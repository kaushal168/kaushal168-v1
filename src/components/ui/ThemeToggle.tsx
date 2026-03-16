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

  if (!mounted) return <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse" />;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-3 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-500"
      aria-label="Toggle Dark Mode"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-5 h-5 text-neutral-100" />
      ) : (
        <Moon className="w-5 h-5 text-neutral-900" />
      )}
    </motion.button>
  );
}