"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { siteConfig } from "@/data/config";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="flex justify-between items-center px-6 md:px-12 h-20 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold font-heading tracking-tighter text-foreground hover:text-accent transition-colors z-50">
          KB<span className="text-accent">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {siteConfig.navLinks.map((link, i) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <Link href={link.url} className="hover:text-accent transition-colors">
                  <span className="text-accent text-xs mr-1">0{i + 1}.</span>
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l border-border pl-6">
            <ThemeToggle />
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-accent border border-accent rounded-md hover:bg-accent/10 transition-colors"
            >
              Resume
            </a>
          </div>
        </nav>

        {/* Mobile Controls (Hamburger + Theme) */}
        <div className="flex items-center gap-4 md:hidden z-50">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 h-screen w-full bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              <ul className="flex flex-col items-center gap-8 text-lg font-medium text-foreground">
                {siteConfig.navLinks.map((link, i) => (
                  <li key={link.name}>
                    <Link 
                      href={link.url} 
                      onClick={() => setIsOpen(false)}
                      className="hover:text-accent transition-colors flex flex-col items-center gap-1"
                    >
                      <span className="text-accent text-sm">0{i + 1}.</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-8 py-3 text-sm font-medium text-accent border border-accent rounded-md hover:bg-accent/10 transition-colors w-full text-center"
              >
                Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}