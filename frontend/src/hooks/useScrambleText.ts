import { useState, useEffect, useRef } from 'react';

const CHARACTERS = '!<>-_\\/[]{}—=+*^?#_';

export function useScrambleText(text: string, isActive: boolean = true) {
  const [displayText, setDisplayText] = useState('');
  const [isScrambling, setIsScrambling] = useState(false);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    if (!isActive || hasTriggeredRef.current) return;
    
    let frame = 0;
    const totalFrames = 30; // ~500ms at 60fps
    let animationFrameId: number;

    setIsScrambling(true);
    hasTriggeredRef.current = true;

    const animate = () => {
      let result = '';
      const progress = frame / totalFrames;

      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          result += ' ';
          continue;
        }

        const revealThreshold = i / text.length;
        if (progress >= revealThreshold) {
          result += text[i];
        } else {
          result += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        }
      }

      setDisplayText(result);

      if (frame < totalFrames) {
        frame++;
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayText(text);
        setIsScrambling(false);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [text, isActive]);

  return { displayText: displayText || text, isScrambling };
}
