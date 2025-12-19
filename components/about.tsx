"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 bg-primary px-6 border-y border-accent/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* KOLOM FOTO SEBAGAI DEKORASI */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 border-2 border-accent/30 rounded-2xl group-hover:inset-0 transition-all duration-500"></div>
          <img 
            src="/images/fathan.png" // SIMPAN FOTO LAIN DI: public/images/about-me.jpg
            alt="About Me"
            className="relative rounded-xl w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

        {/* KOLOM DESKRIPSI */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-accent text-lg mb-4 tracking-tighter">— About Me</h2>
          <h3 className="text-4xl font-bold text-light mb-6">
            Membangun solusi digital melalui <span className="text-accent">kreativitas dan imajinasi visual.</span>
          </h3>
          <div className="space-y-4 text-light/70 leading-relaxed text-lg">
            <p>
              Halo! Saya <span className="text-light font-semibold">Fathan Adha Suratman</span> saya seorang UI/UX Designer. Fokus utama saya adalah menciptakan antarmuka yang intuitif, user-friendly, dan minimalis sesuai dengan visi klien.
            </p>
            <p>
              Selain itu saya juga editor video, saya dapat menghasilkan video dengan kualitas yang cukup bagus dan juga nyaman serta dapat dinikmati oleh audiens. 
            </p>
          </div>
          
          {/* CTA Simple */}
          <div className="mt-10">
            <a href="#contact" className="text-accent border-b-2 border-accent pb-1 hover:text-light hover:border-light transition-all">
              Contact Me →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}