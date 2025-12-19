"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Instagram, Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import Swal from "sweetalert2"; // Import SweetAlert2

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        // RESPON BERHASIL
        Swal.fire({
          title: "TRANSMISSION_SUCCESS",
          text: "Pesan Anda telah terkirim ke sistem.",
          icon: "success",
          timer: 2500, // Hilang otomatis dalam 2.5 detik
          timerProgressBar: true,
          showConfirmButton: false,
          background: "#1B3C53", // Warna Primary Anda
          color: "#FFFFFF",
          iconColor: "#F5A623", // Warna Aksen Emas
          customClass: {
            title: "font-mono tracking-widest text-xl",
            popup: "border border-accent/30 rounded-none", // Gaya kotak futuristik
          },
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error();
      }
    } catch (err) {
      // RESPON GAGAL
      Swal.fire({
        title: "CONNECTION_ERROR",
        text: "Gagal menghubungi server. Silakan coba lagi.",
        icon: "error",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        background: "#1B3C53",
        color: "#FFFFFF",
        iconColor: "#ef4444", // Merah untuk error
        customClass: {
          title: "font-mono tracking-widest text-xl",
          popup: "border border-red-500/30 rounded-none",
        },
      });
    } finally {
      setLoading(false);
    }
  };

const socialLinks = [
  { 
    name: "Instagram", 
    icon: <Instagram size={20} />, 
    href: "https://www.instagram.com/fathanadha.id/" 
  },
{ 
    name: "WhatsApp", 
    icon: <MessageSquare size={20} />, 
    // Pesan: "Halo Suratman, saya tertarik untuk berdiskusi mengenai proyek saya. Bisa kita bicara lebih lanjut?"
    href: "https://wa.me/6285143515392?text=Halo%20Fathan%2C%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20proyek%20saya.%20Bisa%20kita%20bicara%20lebih%20lanjut%3F" 
  },
  { 
    name: "GitHub", 
    icon: <Github size={20} />, 
    href: "https://github.com/username" 
  },
  { 
    name: "LinkedIn", 
    icon: <Linkedin size={20} />, 
    href: "https://linkedin.com/in/username" 
  },
];

  return (
    <section id="contact" className="py-32 bg-primary px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 -skew-x-12 translate-x-32 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        {/* KOLOM KIRI: INFO & SOCIALS */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between"
        >
          <div>
            <p className="text-accent font-mono text-sm tracking-[0.4em] mb-6 uppercase">
              // Contact_Me
            </p>
            <h2 className="text-5xl md:text-7xl font-bold text-light tracking-tighter leading-none mb-8">
              LET'S START <br /> A <span className="text-accent italic font-light">PROJECT.</span>
            </h2>
            <div className="flex items-center gap-4 text-light/80 hover:text-accent transition-colors group">
              <div className="p-3 border border-accent/20 rounded-full group-hover:border-accent group-hover:bg-accent/10 transition-all">
                <Mail size={20} className="text-accent" />
              </div>
              <span className="text-xl font-medium tracking-tight italic">suratmanfathan@gmail.com</span>
            </div>
          </div>

          <div className="mt-16">
            <p className="text-accent/30 font-mono text-[10px] uppercase tracking-[0.3em] mb-6">
              Find me on social networks
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="flex items-center gap-3 px-6 py-3 bg-secondary/30 border border-accent/10 text-light/60 hover:text-light hover:border-accent hover:bg-accent/5 transition-all duration-300 rounded-sm"
                >
                  {social.icon}
                  <span className="text-[10px] font-mono uppercase tracking-tighter">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* KOLOM KANAN: FORM MINIMALIS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-secondary/20 p-8 md:p-12 border border-accent/10 rounded-sm shadow-2xl backdrop-blur-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative group">
              <label className="text-[10px] font-mono text-accent/50 uppercase tracking-[0.2em] absolute -top-3 left-0">Full_Name</label>
              <input name="name" type="text" placeholder="Ex: John Doe" required className="w-full pt-4 pb-2 bg-transparent border-b border-accent/20 text-light focus:border-accent outline-none transition-all" />
            </div>

            <div className="relative group">
              <label className="text-[10px] font-mono text-accent/50 uppercase tracking-[0.2em] absolute -top-3 left-0">Email_Address</label>
              <input name="email" type="email" placeholder="john@example.com" required className="w-full pt-4 pb-2 bg-transparent border-b border-accent/20 text-light focus:border-accent outline-none transition-all" />
            </div>

            <div className="relative group">
              <label className="text-[10px] font-mono text-accent/50 uppercase tracking-[0.2em] absolute -top-3 left-0">Message_Details</label>
              <textarea name="message" placeholder="Briefly describe your project..." rows={4} required className="w-full pt-4 pb-2 bg-transparent border-b border-accent/20 text-light focus:border-accent outline-none transition-all resize-none"></textarea>
            </div>

            <button
              disabled={loading}
              className="w-full bg-white text-black font-bold py-4 mt-8 transition-all hover:bg-gray-200 flex items-center justify-center gap-3 tracking-[0.2em] text-xs"
            >
              {loading ? (
                "SENDING..."
              ) : (
                <>
                  <Send size={16} /> SEND_MESSAGE
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}