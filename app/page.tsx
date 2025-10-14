import Image from 'next/image';

export default function Home() {
  return (
    <div id='balloon-container'>
      <main className='flex min-h-screen flex-col items-center p-5 pt-30 gap-5'>
        <h1 className='text-pink-500 dark:text-pink-300 font-mogra text-5xl text-center wave-text'>
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
      </main>
    </div>
  );
}
