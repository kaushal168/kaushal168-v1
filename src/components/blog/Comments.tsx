"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Comments() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Sync Giscus theme with Next-Themes
  const giscusTheme = resolvedTheme === "dark" ? "transparent_dark" : "light";

  return (
    <div className="mt-20 pt-10 border-t border-border">
      <h2 className="text-2xl font-bold font-heading text-foreground mb-8">
        Join the Conversation
      </h2>
      <Giscus
        id="comments"
        repo="kaushal168/kaushal168-v1"
        repoId="R_kgDORocMVQ"
        category="General"
        categoryId="DIC_kwDORocMVc4C4hBA"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={giscusTheme}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}