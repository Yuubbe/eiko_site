'use client';

import { useState, useEffect } from 'react';
import UchihaSlideshow from '@/components/uchiha-slideshow';

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden">
      <UchihaSlideshow />
    </main>
  );
}
