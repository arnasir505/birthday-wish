import type { Metadata } from 'next';
import {
  Mogra,
  Comic_Relief,
  Abril_Fatface,
  Alfa_Slab_One,
  Berkshire_Swash,
  Cabin,
  Courier_Prime,
  Crimson_Pro,
  Germania_One,
  Lobster,
  Pacifico,
  Rubik,
  Rye,
} from 'next/font/google';
import './globals.css';
import './style.css';

const abrilFatface = Abril_Fatface({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-abril-fatface',
});

const alfaSlabOne = Alfa_Slab_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-alfa-slab-one',
});

const berkshireSwash = Berkshire_Swash({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-berkshire-swash',
});

const cabin = Cabin({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cabin',
});

const courierPrime = Courier_Prime({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-courier-prime',
});

const crimsonPro = Crimson_Pro({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-crimson-pro',
});

const germaniaOne = Germania_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-germania-one',
});

const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lobster',
});

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
});

const rubik = Rubik({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
});

const rye = Rye({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rye',
});

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
      <body
        className={`${mogra.variable} ${comicRelief.variable} ${abrilFatface.variable} ${alfaSlabOne.variable} ${berkshireSwash.variable} ${cabin.variable} ${courierPrime.variable} ${crimsonPro.variable} ${germaniaOne.variable} ${lobster.variable} ${pacifico.variable} ${rubik.variable} ${rye.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
