import React, { useRef, useEffect, useState } from 'react';
import clsx from 'clsx';

const Hero = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible) {
      if (!video.ended) {
        video.playbackRate = 2;
        video.play().catch(() => {});
      }
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isVisible]);

  return (
    <section id="hero" ref={sectionRef}>
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="MacBook title" />
      </div>
      <video
        ref={videoRef}
        src="/videos/hero.mp4"
        muted
        playsInline
        className={clsx(isVisible && 'hero-video--visible')}
      />
      <button>Buy</button>
      <p>from $1999</p>
    </section>
  );
};

export default Hero;
