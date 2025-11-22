import './globals.css';

export const metadata = {
  title: 'Mohammed Midlaj - Full Stack Developer',
  description: 'Portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
