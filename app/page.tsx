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
    `background-color: rgba(${r},${g},${b},0.95);
     color: rgba(${r},${g},${b},0.95); 
     box-shadow: inset -7px -3px 10px rgba(${Math.max(r - 10, 0)},${Math.max(
      g - 10,
      0
    )},${Math.max(b - 10, 0)},0.95);
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

  const handlePlayMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.ended && !audio.paused) {
      // If already playing, do nothing
      return;
    }
    audio.volume = 0.5;
    audio.play().catch((e) => {
      console.warn('Autoplay prevented:', e);
    });
  };

  useEffect(() => {
    createBalloons(30);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={balloonContainerRef}
      id='balloon-container'
      className='h-screen overflow-hidden p-4 box-border flex justify-center flex-wrap transition-opacity duration-300 relative'
    >
      <main className='flex min-h-screen flex-col items-center p-5 gap-6 absolute z-20 '>
        {/* <h1 className='text-pink-500 font-mogra text-4xl sm:text-5xl lg:text-8xl text-center wave-text'>
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
          <br className='lg:hidden' />
          <span>&nbsp;</span>
          <span className='text-violet-600'>A</span>
          <span className='text-violet-600'>Z</span>
          <span className='text-violet-600'>H</span>
          <span className='text-violet-600'>A</span>
          <span className='text-violet-600'>R</span>
          <span>!</span>
          <span>!</span>
          <span>!</span>
        </h1> */}
        <div className='texturizer-content p-1 text-4xl lg:text-6xl text-center'>
          <div id='ransomizer-bpkquil7'>
            <div className='ts'>
              <div className='tw'>
                <div data-text='H' className='mlvx-0 tc'>
                  <div data-text='H'>H</div>
                </div>
                <div data-text='A' className='mlvx-1 tc'>
                  <div data-text='A'>A</div>
                </div>
                <div data-text='P' className='mlvx-2 tc'>
                  <div data-text='P'>P</div>
                </div>
                <div data-text='P' className='mlvx-3 tc'>
                  <div data-text='P'>P</div>
                </div>
                <div data-text='Y' className='mlvx-4 tc'>
                  <div data-text='Y'>Y</div>
                </div>
              </div>
              <div className='tw'>
                <div data-text='B' className='mlvx-6 tc'>
                  <div data-text='B'>B</div>
                </div>
                <div data-text='I' className='mlvx-7 tc'>
                  <div data-text='I'>I</div>
                </div>
                <div data-text='R' className='mlvx-8 tc'>
                  <div data-text='R'>R</div>
                </div>
                <div data-text='T' className='mlvx-9 tc'>
                  <div data-text='T'>T</div>
                </div>
                <div data-text='H' className='mlvx-10 tc'>
                  <div data-text='H'>H</div>
                </div>
                <div data-text='D' className='mlvx-11 tc'>
                  <div data-text='D'>D</div>
                </div>
                <div data-text='A' className='mlvx-12 tc'>
                  <div data-text='A'>A</div>
                </div>
                <div data-text='Y' className='mlvx-13 tc'>
                  <div data-text='Y'>Y</div>
                </div>
              </div>
              <div className='tw'>
                <div data-text='A' className='mlvx-15 tc'>
                  <div data-text='A'>A</div>
                </div>
                <div data-text='Z' className='mlvx-16 tc'>
                  <div data-text='Z'>Z</div>
                </div>
                <div data-text='H' className='mlvx-17 tc'>
                  <div data-text='H'>H</div>
                </div>
                <div data-text='A' className='mlvx-18 tc'>
                  <div data-text='A'>A</div>
                </div>
                <div data-text='R' className='mlvx-19 tc'>
                  <div data-text='R'>R</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <button onClick={handlePlayMusic} className='btn-play font-comicRelief'>
          Play music 😎
        </button>
        <audio hidden ref={audioRef}>
          <source src='song.mp3' type='audio/mpeg' />
          Your browser does not support the audio element.
        </audio>
      </main>
    </div>
  );
}
