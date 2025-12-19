"use client";
import { motion } from "framer-motion";
import { Download, FileText, ChevronLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  const resumePath = "/cv-suratman.pdf";

  // Fungsi untuk memaksa download jika tombol diklik
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "CV_Suratman_Fathan.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen bg-[#0A0A0A] pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link href="/" className="text-accent/50 hover:text-accent font-mono text-[10px] tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
              <ChevronLeft size={14} /> Back_to_home
            </Link>
            <h1 className="text-5xl font-bold text-white tracking-tighter">
              MY_RESUME<span className="text-accent">.</span>
            </h1>
          </motion.div>

          <div className="flex gap-3 w-full md:w-auto">
     <button 
  onClick={handleDownload}
  className="flex-1 md:flex-none bg-white text-black px-8 py-4 font-bold text-[10px] tracking-[0.2em] 
             hover:bg-[#F5A623] hover:text-white transition-all duration-300 
             flex items-center justify-center gap-2 border border-transparent shadow-xl"
>
  <Download size={16} /> DOWNLOAD_PDF
</button>
            <a 
              href={resumePath} 
              target="_blank" 
              className="p-4 border border-white/10 text-white hover:border-accent hover:text-accent transition-all"
              title="Open in New Tab"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        {/* Preview Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full aspect-[1/1.4] md:h-[900px] border border-white/5 bg-[#111] overflow-hidden"
        >
          {/* Header Toolbar Minimalis */}
          <div className="absolute top-0 left-0 w-full h-10 bg-[#1A1A1A] border-b border-white/5 flex items-center px-4 justify-between z-20">
             <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white/10"></div>
                <div className="w-2 h-2 rounded-full bg-white/10"></div>
                <div className="w-2 h-2 rounded-full bg-white/10"></div>
             </div>
             <p className="font-mono text-[9px] text-white/30 tracking-[0.3em]">PREVIEW_MODE_ACTIVE</p>
          </div>

          {/* PDF Container */}
          <div className="w-full h-full pt-10">
            <object
              data={resumePath}
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="flex flex-col items-center justify-center h-full text-white/40 font-mono text-xs p-10 text-center">
                <FileText size={40} className="mb-4 opacity-20" />
                <p>Browser Anda tidak mendukung preview langsung.</p>
                <button onClick={handleDownload} className="mt-4 text-accent underline">
                  Klik di sini untuk mengunduh
                </button>
              </div>
            </object>
          </div>
        </motion.div>

      </div>
    </section>
  );
}