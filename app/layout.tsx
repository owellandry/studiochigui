import React from 'react';
import Footer from '@/components/footer';
import '../styles/globals.css';
import logoimage from "@/assets/logo.png";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>StudioChigui</title>
        <link rel="icon" href={logoimage.src} />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
