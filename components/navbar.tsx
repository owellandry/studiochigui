// components/Navbar.tsx

import React from 'react';
import { Image } from "@nextui-org/image";
import logoimage from "@/assets/logo.png";

const Navbar = () => {
  return (
    <header className="relative text-white p-10 sm:p-10 md:p-12 lg:p-12">
      <div className="absolute left-4 sm:left-6 md:left-8 lg:left-12 top-1/2 transform -translate-y-1/2">
        <Image src={logoimage.src} alt="StudioChigui" width={50} height={50} />
      </div>
      <div className="container mx-auto flex justify-center items-center">
      </div>
    </header>
  );
};

export default Navbar;
