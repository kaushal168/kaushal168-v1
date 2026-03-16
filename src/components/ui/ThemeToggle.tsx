"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // Wait until mounted on client to avoid hydration mismatch on icons
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-[42px] h-[42px] rounded-lg bg-muted border border-border animate-pulse shadow-sm" />;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2.5 rounded-lg bg-muted text-muted-foreground hover:text-accent hover:bg-muted/80 transition-all border border-border shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
      aria-label="Toggle Dark Mode"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </motion.button>
  );
}