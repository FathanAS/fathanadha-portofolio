"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = [
    { name: "ABOUT", href: isHome ? "#about" : "/#about" },
    { name: "PROJECTS", href: isHome ? "#projects" : "/#projects" },
    { name: "EDUCATION", href: isHome ? "#education" : "/#education" },
    { name: "CONTACT", href: isHome ? "#contact" : "/#contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-lg border-b border-white/5 px-6 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="text-xl font-bold text-white tracking-tighter z-[110]">
          PORTFOLIO<span className="text-[#F5A623]">.</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[10px] font-mono text-white/50 hover:text-[#F5A623] tracking-[0.3em] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/resume">
            <button className={`px-6 py-2 rounded-sm font-mono text-[10px] tracking-widest transition-all font-bold 
              ${pathname === '/resume' ? 'bg-[#F5A623] text-white' : 'border border-[#F5A623] text-[#F5A623] hover:bg-[#F5A623] hover:text-white'}`}>
              HIRE_ME
            </button>
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button 
          className="md:hidden text-white z-[110] p-2" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MOBILE STACK MENU OVERLAY */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 h-screen w-full bg-black flex flex-col items-center justify-center gap-8 md:hidden z-[100]"
            >
              {/* Decorative Background Text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
                <h2 className="text-[20vw] font-bold leading-none">NAVIGATION</h2>
              </div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold text-white/70 hover:text-[#F5A623] tracking-[0.2em] transition-all font-mono"
                  >
                    <span className="text-[#F5A623] mr-4 text-sm font-light italic">0{i+1}.</span>
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link href="/resume" onClick={() => setIsOpen(false)}>
                  <button className="bg-white text-black px-12 py-5 font-bold text-xs tracking-[0.4em] uppercase hover:bg-[#F5A623] hover:text-white transition-all">
                    HIRE_ME
                  </button>
                </Link>
              </motion.div>

              {/* Social Links Mini Footer for Mobile */}
              <div className="absolute bottom-10 flex gap-6 text-white/30 text-[10px] font-mono tracking-widest">
                <span>IG</span>
                <span>GH</span>
                <span>LI</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}