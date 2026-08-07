import React, { useEffect, useState } from 'react';
import { Star, Loader2, MessageSquare } from 'lucide-react';
import { api, getSessionId } from '../lib/api';

const StarPicker = ({ value, onChange, size = 22 }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map(n => (
      <button
        key={n}
        type="button"
        onClick={() => onChange(n)}
        aria-label={`Rate ${n} stars`}
        className="transition-transform hover:scale-110"
      >
        <Star
          size={size}
          className={n <= value ? 'text-yellow-400' : 'text-gray-300'}
          fill={n <= value ? '#facc15' : 'none'}
        />
      </button>
    ))}
  </div>
);

const StarRow = ({ rating, size = 14 }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map(n => (
      <Star key={n} size={size} className={n <= rating ? 'text-yellow-400' : 'text-gray-300'} fill={n <= rating ? '#facc15' : 'none'} />
    ))}
  </div>
);

const Reviews = ({ productId }) => {
  const [data, setData] = useState({ reviews: [], total: 0, average: 0, distribution: {1:0,2:0,3:0,4:0,5:0} });
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState(() => localStorage.getItem('gm_reviewer_name') || '');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);

  const load = async () => {
    try {
      const res = await api.get(`/reviews/${productId}`);
      setData(res.data);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  };

  useEffect(() => { setLoading(true); load(); /* eslint-disable-next-line */ }, [productId]);

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    if (!name.trim()) return setError('Please enter your name.');
    if (rating < 1) return setError('Please pick a star rating.');
    setSubmitting(true);
    try {
      await api.post('/reviews', {
        product_id: productId,
        session_id: getSessionId(),
        name: name.trim(),
        rating,
        comment: comment.trim(),
      });
      localStorage.setItem('gm_reviewer_name', name.trim());
      setComment('');
      setRating(0);
      setShowForm(false);
      await load();
    } catch (err) {
      setError(err?.response?.data?.detail || 'Failed to submit review');
    } finally {
      setSubmitting(false);
    }
  };

  const maxDist = Math.max(1, ...Object.values(data.distribution || {}));

  return (
    <div className="mt-8 px-3 md:px-0 md:max-w-6xl md:mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-900 text-base md:text-xl">Ratings & Reviews</h3>
        <button
          onClick={() => setShowForm(s => !s)}
          className="text-xs md:text-sm font-semibold px-3 py-1.5 rounded border border-[#f43397] text-[#f43397] hover:bg-[#fde5ef]"
        >
          {showForm ? 'Cancel' : 'Write a Review'}
        </button>
      </div>

      {/* Aggregate */}
      <div className="grid md:grid-cols-3 gap-4 border border-gray-100 rounded-lg p-4 bg-gray-50">
        <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r pb-3 md:pb-0">
          <div className="text-3xl md:text-4xl font-bold text-gray-900">{data.average || '—'}</div>
          <StarRow rating={Math.round(data.average)} size={16} />
          <p className="text-xs text-gray-500 mt-1">{data.total} {data.total === 1 ? 'review' : 'reviews'}</p>
        </div>
        <div className="md:col-span-2 space-y-1">
          {[5,4,3,2,1].map(n => {
            const c = data.distribution?.[n] || 0;
            return (
              <div key={n} className="flex items-center gap-2 text-xs">
                <span className="w-3 text-gray-700">{n}</span>
                <Star size={12} className="text-yellow-400" fill="#facc15" />
                <div className="flex-1 h-2 bg-gray-200 rounded overflow-hidden">
                  <div className="h-full bg-[#f43397]" style={{ width: `${(c / maxDist) * 100}%` }} />
                </div>
                <span className="w-6 text-right text-gray-600">{c}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form */}
      {showForm && (
        <form onSubmit={submit} className="mt-4 border border-gray-100 rounded-lg p-4 space-y-3 bg-white">
          <div>
            <label className="text-sm font-semibold text-gray-800">Your Rating</label>
            <div className="mt-1"><StarPicker value={rating} onChange={setRating} /></div>
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-800">Your Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Priya S."
              className="mt-1 w-full border rounded px-3 py-2 text-sm outline-none focus:border-[#f43397]"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-800">Comment (optional)</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={3}
              maxLength={500}
              placeholder="What did you think of this combo?"
              className="mt-1 w-full border rounded px-3 py-2 text-sm outline-none focus:border-[#f43397] resize-none"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            disabled={submitting}
            className="px-5 py-2 rounded font-semibold text-white flex items-center gap-2 disabled:opacity-60"
            style={{ background: '#f43397' }}
          >
            {submitting && <Loader2 size={16} className="animate-spin" />}
            Submit Review
          </button>
        </form>
      )}

      {/* List */}
      <div className="mt-4 space-y-3">
        {loading ? (
          <div className="py-6 flex justify-center"><Loader2 className="animate-spin text-[#f43397]" /></div>
        ) : data.reviews.length === 0 ? (
          <div className="py-8 flex flex-col items-center text-center gap-2 border border-dashed border-gray-200 rounded-lg">
            <MessageSquare size={40} className="text-gray-300" />
            <p className="text-sm text-gray-600">No reviews yet — be the first to share your experience!</p>
          </div>
        ) : (
          data.reviews.map(r => (
            <div key={r.id} className="border border-gray-100 rounded-lg p-3 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-[#f43397]" style={{ background: '#fde5ef' }}>
                    {r.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{r.name}</p>
                    <div className="flex items-center gap-2">
                      <StarRow rating={r.rating} />
                      <span className="text-[11px] text-gray-500">{new Date(r.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
              {r.comment && <p className="mt-2 text-sm text-gray-700 leading-relaxed">{r.comment}</p>}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Reviews;
