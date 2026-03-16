"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Briefcase, GraduationCap, MapPin } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 300, damping: 24 } 
  },
};

export function HeroBento() {
  return (
    <section className="max-w-6xl mx-auto p-4 md:p-8 pt-20 font-heading">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 auto-rows-[200px]"
      >
        {/* Main Identity Box */}
        <motion.div
          variants={itemVariants}
          className="col-span-1 md:col-span-2 md:row-span-2 rounded-3xl bg-card text-card-foreground shadow-sm p-8 flex flex-col justify-end border border-border"
        >
          <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-border shadow-md bg-muted">
            <Image 
              src="/images/profile.jpg" 
              alt="Kaushal Baid"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Hi, I'm Kaushal Baid.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A Software Engineer dedicated to building robust backend systems and high-performance digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="col-span-1 md:col-span-2 rounded-3xl bg-muted text-card-foreground p-8 border border-border flex flex-col justify-center shadow-sm relative overflow-hidden"
        >
          <MapPin className="absolute -right-4 -bottom-4 w-32 h-32 text-background/50" />
          <h2 className="text-xl font-semibold mb-2 relative z-10">Based in Hyderabad, India</h2>
          <p className="text-sm text-muted-foreground relative z-10">
            Currently engineering enterprise solutions in the banking sector.
          </p>
        </motion.div>

        {/* Experience Box */}
        <motion.div
          variants={itemVariants}
          className="col-span-1 md:col-span-1 rounded-3xl bg-card p-6 flex flex-col items-start justify-center gap-3 border border-border shadow-sm hover:border-accent/50 transition-colors cursor-default"
        >
          <div className="p-3 bg-muted rounded-full">
            <Briefcase className="w-5 h-5 text-foreground" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">Wells Fargo</p>
            <p className="text-xs text-muted-foreground">Software Engineer</p>
          </div>
        </motion.div>

        {/* Education Box */}
        <motion.div
          variants={itemVariants}
          className="col-span-1 md:col-span-1 rounded-3xl bg-card p-6 flex flex-col items-start justify-center gap-3 border border-border shadow-sm hover:border-accent/50 transition-colors cursor-default"
        >
          <div className="p-3 bg-muted rounded-full">
            <GraduationCap className="w-5 h-5 text-foreground" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">NIT Durgapur</p>
            <p className="text-xs text-muted-foreground">B.Tech, CSE</p>
          </div>
        </motion.div>

        {/* Call to Action Box */}
        <motion.div
          variants={itemVariants}
          className="col-span-1 md:col-span-4 rounded-3xl bg-foreground text-background p-8 flex items-center justify-between group cursor-pointer transition-all hover:opacity-90 shadow-md"
        >
          <h3 className="text-2xl font-bold">
            View My Projects
          </h3>
          <div className="bg-background text-foreground p-3 rounded-full group-hover:translate-x-2 transition-transform">
             <ArrowRight className="w-6 h-6" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}