import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Mohammed Midlaj - Full Stack Developer',
  description: 'Portfolio of Mohammed Midlaj, Full Stack Developer specializing in React, Python, and .NET',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
