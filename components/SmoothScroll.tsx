"use client";
import { ReactLenis } from "lenis/react"; // Perubahan di sini
import { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.1, 
        duration: 1.5, 
        smoothWheel: true,
        // Tambahkan sinkronisasi untuk Framer Motion agar tidak konflik
        syncTouch: true 
      }}
    >
      {children}
    </ReactLenis>
  );
}