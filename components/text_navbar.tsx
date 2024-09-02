import React from 'react';

const Textnavbar = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-start justify-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <h1 className="py-8 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white" style={{ textShadow: '5px 5px 5px black' }}>
        STUDIO
      </h1>
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white" style={{ textShadow: '5px 5px 5px black' }}>
        CHIGUI
      </h1>
      <div className="absolute bottom-4 right-4 p-4 bg-black bg-opacity-50 rounded max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <span className="text-sm text-gray-300">
          Bienvenido a <strong>StudioChigui</strong> <br />
        </span>
        <span className="text-sm text-gray-300">
          conoce nuestros juegos, aplicaciones, páginas y forma parte de nuestra comunidad.
        </span>
      </div>
    </div>
  );
};

export default Textnavbar;
    