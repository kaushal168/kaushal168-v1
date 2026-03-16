"use client";

import { motion } from "framer-motion";
import { Folder, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto p-4 md:p-8 py-20 font-heading">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-foreground flex items-center gap-2">
          <span className="text-accent text-xl">03.</span> Selected Work
        </h2>
        <p className="text-muted-foreground text-lg">
          A showcase of my recent projects and technical deep dives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col justify-between bg-card p-8 rounded-3xl border border-border shadow-sm hover:-translate-y-2 hover:shadow-md transition-all duration-300"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <Folder className="w-10 h-10 text-accent" />
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
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium text-muted-foreground">
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