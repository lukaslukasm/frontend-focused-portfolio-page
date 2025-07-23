import '../styles/globals.css';
import { Inter } from 'next/font/google';

const font = Inter({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="no-scrollbar max-w-screen overflow-x-hidden" lang="en">
      <body className={`col flex w-full bg-cyan-50 ${font.className}`}>
        {children}
      </body>
    </html>
  );
}
