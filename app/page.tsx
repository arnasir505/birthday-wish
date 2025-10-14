'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Home() {
  const balloonContainerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Precompute random values for all balloons to avoid repeated Math.random calls during rendering
  const generateBalloonData = (num: number) =>
    Array.from({ length: num }, () => ({
      r: Math.floor(Math.random() * 255),
      g: Math.floor(Math.random() * 255),
      b: Math.floor(Math.random() * 255),
      mt: Math.floor(Math.random() * 200),
      ml: Math.floor(Math.random() * 50),
      dur: Math.floor(Math.random() * 5) + 5,
    }));

  const getBalloonStyle = ({
    r,
    g,
    b,
    mt,
    ml,
    dur,
  }: {
    r: number;
    g: number;
    b: number;
    mt: number;
    ml: number;
    dur: number;
  }) =>
    `background-color: rgba(${r},${g},${b},0.7);
     color: rgba(${r},${g},${b},0.7); 
     box-shadow: inset -7px -3px 10px rgba(${Math.max(r - 10, 0)},${Math.max(
      g - 10,
      0
    )},${Math.max(b - 10, 0)},0.7);
     margin: ${mt}px 0 0 ${ml}px;
     animation: float ${dur}s ease-in infinite;`;

  const createBalloons = (num: number) => {
    const balloonContainer = balloonContainerRef.current;
    if (!balloonContainer) return;
    // Use DocumentFragment for faster DOM insertion
    const fragment = document.createDocumentFragment();
    const balloonData = generateBalloonData(num);
    for (let i = 0; i < num; i++) {
      const balloon = document.createElement('div');
      balloon.className = 'balloon';
      balloon.style.cssText = getBalloonStyle(balloonData[i]);
      fragment.appendChild(balloon);
    }
    balloonContainer.appendChild(fragment);
  };

  const removeBalloons = () => {
    const balloonContainer = balloonContainerRef.current;
    if (!balloonContainer) return;
    setTimeout(() => {
      const balloons = balloonContainer.querySelectorAll('.balloon');
      balloons.forEach((balloon) => balloon.remove());
    }, 300);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.4;
    audio.play().catch((e) => {
      console.warn('Autoplay prevented:', e);
    });
    createBalloons(30);

    const handleClick = () => removeBalloons();
    window.addEventListener('click', handleClick, { passive: true });

    return () => {
      window.removeEventListener('click', handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={balloonContainerRef}
      id='balloon-container'
      className='h-screen overflow-hidden p-4 box-border flex justify-center flex-wrap transition-opacity duration-300 relative'
    >
      <main className='flex min-h-screen flex-col items-center p-5 pt-30 gap-5 absolute z-20 pointer-events-none'>
        <h1 className='text-pink-500 dark:text-pink-300 font-mogra text-5xl lg:text-8xl text-center wave-text'>
          <span>H</span>
          <span>A</span>
          <span>P</span>
          <span>P</span>
          <span>Y</span>
          <span>&nbsp;</span>
          <span>B</span>
          <span>I</span>
          <span>R</span>
          <span>T</span>
          <span>H</span>
          <span>D</span>
          <span>A</span>
          <span>Y</span>
          <span>&nbsp;</span>
          <span>A</span>
          <span>Z</span>
          <span>H</span>
          <span>A</span>
          <span>R</span>
          <span>!</span>
          <span>!</span>
          <span>!</span>
        </h1>
        <div className='flex items-center justify-between w-full max-w-xl'>
          <Image
            className='relative w-full h-auto'
            src='/image.png'
            alt='Azhar jumping'
            width={200}
            height={145}
            priority
          />
        </div>
        <audio hidden ref={audioRef}>
          <source src='song.mp3' type='audio/mpeg' />
          Your browser does not support the audio element.
        </audio>
      </main>
    </div>
  );
}
