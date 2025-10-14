import type { Metadata } from 'next';
import { Mogra, Comic_Relief } from 'next/font/google';
import './globals.css';
import './style.css';

const mogra = Mogra({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mogra',
});

const comicRelief = Comic_Relief({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-comic-relief',
});

export const metadata: Metadata = {
  title: 'Happy Birthday Azhar',
  description: 'A silly little website to wish Azhar a happy birthday',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${mogra.variable} ${comicRelief.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
