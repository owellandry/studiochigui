// components/Backgroundimage.tsx

import React from 'react';
import Background from '@/assets/background.png';

const Backgroundimage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={Background.src}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Backgroundimage;
