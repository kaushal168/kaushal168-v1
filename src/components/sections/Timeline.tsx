"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code } from "lucide-react";

const timelineData = [
  {
    id: 1,
    year: "2026",
    title: "Building MealMate & Expanding Horizons",
    description: "Developing 'MealMate', a full-stack application for couples, while continuously leveling up my system design and algorithmic problem-solving skills.",
    icon: <Code className="w-5 h-5" />,
  },
  {
    id: 2,
    year: "2024 - Present",
    title: "Software Developer — Wells Fargo",
    description: "Driving backend modernization by migrating enterprise Spring Boot applications from Java 11 to 17, enhancing system performance and maintainability.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: 3,
    year: "Graduated",
    title: "B.Tech in Computer Science and Engineering",
    description: "National Institute of Technology (NIT), Durgapur. Built a robust foundation in core computer science principles, data structures, and software engineering.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
];

export function Timeline() {
  return (
    <section className="max-w-4xl mx-auto p-4 md:p-8 py-20 font-heading">
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-foreground">The Journey</h2>
        <p className="text-muted-foreground text-lg">
          A timeline of my professional milestones and technical evolution.
        </p>
      </div>

      <div className="relative border-l-2 border-border ml-4 md:ml-6">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="mb-12 ml-10 md:ml-12 relative"
          >
            {/* The Node on the line */}
            <span className="absolute -left-[51px] md:-left-[59px] flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-border text-muted-foreground shadow-sm">
              {item.icon}
            </span>

            {/* Content Box */}
            <div className="flex flex-col gap-2 bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-bold text-accent tracking-wider uppercase">
                {item.year}
              </span>
              <h3 className="text-xl font-bold text-card-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}