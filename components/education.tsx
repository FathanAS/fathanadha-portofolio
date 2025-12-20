"use client";
import { motion } from "framer-motion";

const educationData = [
  {
    year: "2023-Now",
    school: "SMK Madinatul Quran",
    degree: "Rekayasa Perangkat Lunak",
    description: "Mempelajari dasar-dasar pemrograman, dan belajar membuat web",
  },
  {
    year: "2020-2023",
    school: "SMP Insan Tauhid School",
    degree: "Islam Terpadu",
    description: "Mempelajari ilmu-ilmu keislaman dan juga mempelajari hal-hal umum",
  },
  {
    year: "2014 - 2020",
    school: "SDN BJI IX",
    degree: "Sekolah Negeri",
    description: "mempelajari pelajaran-pelajaran yang umum",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-primary px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-light mb-16 text-center">Riwayat Pendidikan</h2>
        <div className="relative border-l border-accent/30 ml-4 md:ml-0 md:mx-auto">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-8 relative"
            >
              {/* Dot Indikator */}
              <div className="absolute -left-[41px] top-1 w-5 h-5 bg-accent rounded-full border-4 border-primary"></div>
              
              <span className="text-accent font-mono text-sm uppercase tracking-widest">{edu.year}</span>
              <h3 className="text-2xl font-bold text-light mt-1">{edu.school}</h3>
              <p className="text-accent/80 font-medium mb-2">{edu.degree}</p>
              <p className="text-light/60 max-w-xl">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
