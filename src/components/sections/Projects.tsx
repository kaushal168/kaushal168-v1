"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section className="max-w-5xl mx-auto p-4 md:p-8 py-20 font-heading">
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
          Projects
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          Building intelligent, low-latency systems to solve real-world problems across AI, real-time processing, and scalable platforms.
        </p>
      </div>

      <div className="flex flex-col border-t border-border">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a 
                href={project.link !== "#" ? project.link : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row md:items-center py-10 border-b border-border hover:border-accent transition-colors duration-500 cursor-pointer gap-8 md:gap-12"
              >
                <div className={`w-full md:flex-1 flex flex-col order-1 ${isEven ? "md:order-1" : "md:order-2"}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:text-accent">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 transition-transform duration-500 group-hover:translate-x-2 items-center">
                    {project.tags.map((tag, tagIndex) => (
                      <div key={tag} className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">
                          {tag}
                        </span>
                        {tagIndex < project.tags.length - 1 && (
                          <span className="text-muted-foreground/40 text-xs font-bold">•</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`w-full md:flex-1 order-2 ${isEven ? "md:order-2" : "md:order-1"}`}>
                  <p className="text-muted-foreground font-body leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                </div>

                <div className="order-3 flex-shrink-0 w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:border-accent group-hover:-translate-y-1 group-hover:translate-x-1 mt-2 md:mt-0 self-end md:self-center">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}