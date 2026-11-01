"use client";

import { useEffect, useState } from "react";

export function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/views", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        if (data.views) setViews(data.views);
      })
      .catch((err) => console.error("View counter error:", err));
  }, []);

  if (views === null) return null;

  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium tracking-wide bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 backdrop-blur-md transition-colors hover:border-slate-300 dark:hover:border-white/20">
      {/* Live Glowing Dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
      </span>
      
      {/* Formatted to Indian numbering system automatically */}
      {views.toLocaleString("en-IN")} views
    </span>
  );
}