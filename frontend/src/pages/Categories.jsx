import React from 'react';
import { categories } from '../data/mock';
import { Wheat, Droplet, Nut, Coffee, SprayCan, Sparkles, Cookie, Milk } from 'lucide-react';

const iconMap = { wheat: Wheat, droplet: Droplet, nut: Nut, coffee: Coffee, 'spray-can': SprayCan, sparkles: Sparkles, cookie: Cookie, milk: Milk };

const Categories = () => (
  <div className="px-4 py-4 pb-24">
    <h2 className="text-lg font-semibold text-gray-900 mb-3">Shop by Category</h2>
    <div className="grid grid-cols-3 gap-3">
      {categories.map(c => {
        const Icon = iconMap[c.icon] || Sparkles;
        return (
          <div key={c.name} className="border border-gray-100 rounded-lg p-3 flex flex-col items-center gap-2 hover:border-[#f43397] transition-colors">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{background:'#fde5ef'}}>
              <Icon className="text-[#f43397]" size={22} />
            </div>
            <span className="text-xs font-medium text-gray-700 text-center">{c.name}</span>
          </div>
        );
      })}
    </div>
  </div>
);

export default Categories;
