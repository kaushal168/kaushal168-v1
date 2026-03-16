"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section className="max-w-6xl mx-auto p-4 md:p-8 py-10 font-heading">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          All Projects
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          A comprehensive list of things I've built, including open-source contributions, enterprise migrations, and full-stack applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col justify-between bg-card p-8 rounded-3xl border border-border shadow-sm hover:-translate-y-2 hover:shadow-md hover:border-accent/50 transition-all duration-300"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                {/* New Sleek Icon Container */}
                <div className="p-3 bg-muted rounded-2xl text-accent group-hover:bg-accent/10 transition-colors">
                  <Code2 className="w-7 h-7" />
                </div>
                {project.link !== "#" && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-accent transition-colors"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-body">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-muted text-muted-foreground text-[11px] font-bold uppercase tracking-wider rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}