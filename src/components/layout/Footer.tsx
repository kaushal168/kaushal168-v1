"use client";

import { siteConfig } from "@/data/config";

export function Footer() {
  return (
    <footer className="w-full py-8 text-center flex flex-col items-center justify-center border-t border-border mt-20">
      {/* Mobile Socials (Hidden on Desktop) */}
      <div className="flex lg:hidden items-center gap-6 mb-6">
        {siteConfig.socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="p-2 text-muted-foreground hover:text-accent transition-colors"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Mobile Email (Hidden on Desktop) */}
      <a 
        href={`mailto:${siteConfig.email}`}
        className="lg:hidden text-sm font-body text-muted-foreground hover:text-accent transition-colors mb-6"
      >
        {siteConfig.email}
      </a>

      {/* Copyright */}
      <p className="text-xs text-muted-foreground font-body">
        Built with 🧡 by Kaushal Baid &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}