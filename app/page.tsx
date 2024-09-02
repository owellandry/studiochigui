// pages/index.tsx

import React from 'react';
import Textnavbar from '@/components/text_navbar';
import Backgroundimage from '@/components/background';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <>
      <Backgroundimage>
        <Navbar />
        <Textnavbar />
      </Backgroundimage>
    </>
  );
}
