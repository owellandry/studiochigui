import React from 'react';
import Background from '@/assets/background.webp';

const Backgroundimage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-lg">
        <img
          src={Background.src}
          alt="Background"
          className="w-full h-full p-3 object-cover"
          style={{ borderRadius: '25px' }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-start justify-center w-full h-full p-4">
        {children}
      </div>
    </div>
  );
};

export default Backgroundimage;
