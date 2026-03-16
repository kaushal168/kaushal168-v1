"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/config";

export function EmailSide() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-0 right-10 z-50 hidden lg:flex flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-muted-foreground"
    >
      <a
        href={`mailto:${siteConfig.email}`}
        className="text-sm font-body tracking-[0.2em] text-muted-foreground hover:text-accent hover:-translate-y-1 transition-all"
        style={{ writingMode: "vertical-rl" }} // CSS trick for vertical text
      >
        {siteConfig.email}
      </a>
    </motion.div>
  );
}