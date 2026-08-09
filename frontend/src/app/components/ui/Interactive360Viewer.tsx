import React, { useRef, useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';

interface Interactive360ViewerProps {
  videoSrc: string;
  onClose: () => void;
}

export function Interactive360Viewer({ videoSrc, onClose }: Interactive360ViewerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [lastTime, setLastTime] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    if (videoRef.current) {
      setLastTime(videoRef.current.currentTime);
    }
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !videoRef.current || !containerRef.current) return;
    
    const containerWidth = containerRef.current.clientWidth || window.innerWidth;
    const dragDistance = e.clientX - startX;
    
    const duration = videoRef.current.duration;
    if (!duration) return;

    // drag right = spin left (or vice versa), tweak multiplier as needed
    let newTime = lastTime - (dragDistance / containerWidth) * duration;
    
    if (newTime < 0) {
      newTime = duration + (newTime % duration);
    } else if (newTime > duration) {
      newTime = newTime % duration;
    }

    videoRef.current.currentTime = newTime;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md"
      style={{ touchAction: 'none' }}
    >
      <IconButton 
        onClick={onClose} 
        sx={{ position: 'absolute', top: 24, right: 24, color: 'white', backgroundColor: 'rgba(255,255,255,0.1)', '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' } }}
        size="large"
      >
        <CloseIcon />
      </IconButton>

      <div 
        ref={containerRef}
        className="relative w-full max-w-[1200px] h-[80vh] flex flex-col items-center justify-center cursor-ew-resize select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-white/50 text-xl font-light tracking-widest">
            LOADING 360 MODEL...
          </div>
        )}

        <video 
          ref={videoRef}
          src={videoSrc}
          className={`w-full h-full object-contain pointer-events-none transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          muted
          playsInline
          onLoadedMetadata={() => {
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
            }
          }}
          onCanPlayThrough={() => setIsLoaded(true)}
          preload="auto"
        />

        {isLoaded && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 px-6 py-3 bg-black/60 rounded-full border border-white/10 pointer-events-none shadow-2xl backdrop-blur-sm">
            <ThreeSixtyIcon sx={{ color: 'white', fontSize: 28 }} />
            <span className="text-white/90 text-sm font-medium tracking-wide">DRAG TO ROTATE</span>
          </div>
        )}
      </div>
    </div>
  );
}