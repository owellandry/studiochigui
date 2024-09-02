import React from 'react';
import { Image } from '@nextui-org/image';
import logoimage from '@/assets/logo.png'; // Asegúrate de ajustar la ruta si es necesario

const Footer = () => {
  const year = new Date().getFullYear(); // Obtén el año actual dinámicamente

  return (
    <footer className="bg-gray-800 text-white py-8">
      {/* Contenedor principal */}
      <div className="container mx-auto px-4">
        {/* Sección de las columnas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Columna Sitemap */}
          <div className="flex flex-col space-y-2 text-center">
            <h4 className="text-lg font-bold border-b-2 border-gray-600 pb-2">Sitemap</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline hover:text-gray-400">INICIO</a></li>
              <li><a href="/about" className="hover:underline hover:text-gray-400">ACERCA DE</a></li>
              <li><a href="/store" className="hover:underline hover:text-gray-400">TIENDA</a></li>
              <li><a href="/games" className="hover:underline hover:text-gray-400">JUEGOS</a></li>
              <li><a href="/blog" className="hover:underline hover:text-gray-400">BLOG</a></li>
              <li><a href="/apps" className="hover:underline hover:text-gray-400">APPS</a></li>
            </ul>
          </div>

          {/* Columna Socials */}
          <div className="flex flex-col space-y-2 text-center">
            <h4 className="text-lg font-bold border-b-2 border-gray-600 pb-2">Socials</h4>
            <ul className="space-y-2">
              <li><a href="https://instagram.com" className="hover:underline hover:text-gray-400">Instagram</a></li>
              <li><a href="https://facebook.com" className="hover:underline hover:text-gray-400">Facebook</a></li>
              <li><a href="https://twitter.com" className="hover:underline hover:text-gray-400">Twitter</a></li>
              <li><a href="https://threads.net" className="hover:underline hover:text-gray-400">Threads</a></li>
              <li><a href="https://linkedin.com" className="hover:underline hover:text-gray-400">LinkedIn</a></li>
              <li><a href="https://youtube.com" className="hover:underline hover:text-gray-400">YouTube</a></li>
            </ul>
          </div>

          {/* Columna Localidad */}
          <div className="flex flex-col space-y-2 text-center">
            <h4 className="text-lg font-bold border-b-2 border-gray-600 pb-2">Localidad</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline hover:text-gray-400">Colombia</a></li>
              <li><a href="#" className="hover:underline hover:text-gray-400">Bucaramanga</a></li>
              <li><a href="#" className="hover:underline hover:text-gray-400">Floridablanca</a></li>
            </ul>
          </div>

          {/* Columna Contactos */}
          <div className="flex flex-col space-y-2 text-center">
            <h4 className="text-lg font-bold border-b-2 border-gray-600 pb-2">Contactos</h4>
            <ul className="space-y-2">
              <li><a href="mailto:email@example.com" className="hover:underline hover:text-gray-400">Email</a></li>
              <li><a href="tel:+123456789" className="hover:underline hover:text-gray-400">Phone</a></li>
              <li><a href="#" className="hover:underline hover:text-gray-400">Chatbot</a></li>
              <li><a href="#" className="hover:underline hover:text-gray-400">Soporte</a></li>
            </ul>
          </div>
        </div>

        {/* Logo y derechos reservados */}
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-4">
            <Image src={logoimage.src} alt="Logo" width={100} height={100} />
          </div>

          {/* Derechos reservados */}
          <div className="text-gray-400">
            <p>&copy; {year} Derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
