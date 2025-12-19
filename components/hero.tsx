"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  return (
    <section ref={ref} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-primary px-6">
      <motion.div style={{ y: yText }} className="z-10 text-center">
        {/* AREA FOTO PROFIL UTAMA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-accent p-1 mx-auto mb-8 overflow-hidden shadow-2xl"
        >
          <img 
            src="/images/pasfoto.png" // SIMPAN FOTO ANDA DI: public/images/profile.jpg
            alt="My Profile"
            className="w-full h-full object-cover rounded-full bg-secondary"
          />
        </motion.div>

        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-accent tracking-[0.3em] uppercase text-sm mb-2 block"
        >
          Available for Hire
        </motion.span>
        
        {/* TEMPAT MENGISI NAMA ANDA */}
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-light leading-tight"
        >
          HI, I'M <span className="text-accent">FATHAN ADHA SURATMAN</span>
        </motion.h1>
        
        <p className="text-light/60 text-lg md:text-xl mt-4 font-light tracking-wide">
          UI/UX Designer | Video Editor
        </p>
      </motion.div>

      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
    </section>
  );
}