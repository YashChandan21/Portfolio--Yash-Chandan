import { Outfit, Ovo } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const ovo = Ovo({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata = {
  title: 'Portfolio - Yash Chandan',
    description: 'Frontend Developer portfolio showcasing projects, skills in React.js, Next.js, and Tailwind CSS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:text-white dark:bg-[#11001f]`}
      >
        {children}
      </body>
    </html>
  );
}
