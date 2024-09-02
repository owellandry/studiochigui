// components/Textnavbar.tsx

import React from 'react';

const Textnavbar = () => {
  return (
    <div className="py-8 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-start justify-center w-full h-screen" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <h1 className="py-8 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white" style={{ textShadow: '5px 5px 5px black' }}>
        STUDIO
      </h1>
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white" style={{ textShadow: '5px 5px 5px black' }}>
        CHIGUI
      </h1>
    </div>
  );
};

export default Textnavbar;
