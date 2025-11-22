import './globals.css'

export const metadata = {
  title: 'Mohammed Midlaj - Full Stack Developer',
  description: 'Portfolio of Mohammed Midlaj, Full Stack Developer specializing in React, Python, and .NET',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactNode {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
