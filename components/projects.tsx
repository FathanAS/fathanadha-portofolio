"use client";
import { motion } from "framer-motion";
import { Cpu, Globe, Database, Code2, ArrowUpRight, Code2Icon, Video, AppWindowIcon, Link2Icon } from "lucide-react";

const projectData = [
  { 
    id: "01", 
    title: "RENTAL CAR", 
    tech: ["FIGMA", "UI", "UX", "RENTAL"], 
    desc: "application designed for quality car rentals",
    icon: <AppWindowIcon  size={18} />,
    link: "https://www.figma.com/design/FzGTWJnH1HEx0g4CpaHCs4/Project-UKK?node-id=0-1&t=DSmjN84LEZwugXan-1"
  },
  { 
    id: "02", 
    title: "MYFERRARI.APP", 
    tech: ["FIGMA", "UI", "UX", "CAR"], 
    desc: "application for buying or renting Scuderia Ferrari cars",
    icon: <AppWindowIcon size={18} />,
    link: "https://www.figma.com/design/B4q3gBCRWVLhy5RLTpFag4/MyFerrari.App?node-id=79-120&t=ftQMlgYXlJmpkMho-1"
  },
  { 
    id: "03", 
    title: "WEB/APP PROMOTION VIDEO", 
    tech: ["ADOBE", "AFTEREFFECT", "PROMOTION"], 
    desc: "contains promotional video projects that I have made so far",
    icon: <Video size={18} />,
    link: "https://drive.google.com/drive/folders/16WXgtaGU1PHxo3N74tryamWk3cVZh9cN?usp=sharing"
  },
  { 
    id: "04", 
    title: "ALL PROJECTS", 
    tech: ["CODE", "VIDEO", "PHOTOGRAPHY"], 
    desc: "folder of all the projects I have created from the past until now",
    icon: <Link2Icon size={18} />,
    link: "https://drive.google.com/drive/folders/1FiP49NGcN9NznO5YFEd1gGfe-Dg5AIiU?usp=sharing"
  },
  { 
    id: "05", 
    title: "PPDB SMK", 
    tech: ["FIGMA", "UI", "REGISTRATION", "UX"], 
    desc: "application that provides student registration, monitoring of accepted PPDB",
    icon: <AppWindowIcon  size={18} />,
    link: "https://www.figma.com/design/QwhxQdxp2Zq9kI9KoNsvv0/PPDB-SMK?node-id=463-1257&t=Bez9BGX3lQMvIx3u-1"
  },
  { 
    id: "06", 
    title: "LAP UANG", 
    tech: ["MONEYREPORT", "SCHOOLMANAGEMENT"], 
    desc: "a web application that provides Islamic boarding school financial management such as expenses, income, tuition payments, etc.",
    icon: <AppWindowIcon  size={18} />,
    link: "https://www.figma.com/design/aAzWDmjo5MVjKgCKY6M38L/Lap-Uang?node-id=3644-12249&t=imIiIfYc0yeFNv4H-1"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-primary px-6 relative overflow-hidden">
      {/* Background Subtle Grid - Elemen Futuristik */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-accent font-mono text-sm tracking-[0.4em] mb-4"
            >
              PROJECT_REPOSITORY.V1
            </motion.p>
            <h2 className="text-light text-5xl md:text-7xl font-bold tracking-tighter">
              FEATURED <span className="text-accent italic font-light">WORKS</span>
            </h2>
          </div>
          <p className="text-light/40 max-w-xs text-sm font-mono uppercase leading-relaxed">
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-secondary/20 border border-accent/20 p-8 rounded-sm hover:border-accent/50 transition-all duration-500 overflow-hidden"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/0 group-hover:border-accent/40 transition-all duration-500"></div>

              <div className="flex justify-between items-start mb-12">
                <div className="p-3 bg-accent/10 rounded-full text-accent group-hover:bg-accent group-hover:text-light transition-colors duration-500">
                  {project.icon}
                </div>
                <span className="text-accent/30 font-mono text-xs tracking-widest">{project.id}</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-light mb-3 tracking-tight group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-light/50 text-sm leading-relaxed mb-6 font-light">
                  {project.desc}
                </p>
              </div>

              {/* Tech Tags - Elemen Futuristik */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-accent/10 group-hover:border-accent/30 transition-colors">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono text-accent/60 tracking-wider">
                    #{t}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                <ArrowUpRight size={20} className="text-accent" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}