"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/config";

export function SocialSide() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-0 left-10 z-50 hidden lg:flex flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-muted-foreground"
    >
      {siteConfig.socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="p-2 text-muted-foreground hover:text-accent hover:-translate-y-1 transition-all"
        >
          {social.icon}
        </a>
      ))}
    </motion.div>
  );
}