import React, { useRef } from 'react';

const HeroVideoBanner = () => {
  const videoRef = useRef(null);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    // When the video reaches 5 seconds, automatically skip (scroll) ahead to 8 seconds
    if (video.currentTime >= 5 && video.currentTime < 8) {
      video.currentTime = 8;
    }
  };

  return (
    <div className="px-3 md:px-6 pt-3 md:pt-5">
      <div className="relative w-full overflow-hidden rounded-md md:rounded-xl group aspect-[16/9] sm:aspect-[21/9] md:aspect-[3/1] bg-black">
        <video
          ref={videoRef}
          src="/videos/hero_banner.mp4"
          autoPlay
          muted
          loop
          playsInline
          onTimeUpdate={handleTimeUpdate}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroVideoBanner;
