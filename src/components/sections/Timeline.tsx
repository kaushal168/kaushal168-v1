"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Briefcase, GraduationCap, Code } from "lucide-react";
import { useRef } from "react";

const timelineData = [
  {
    id: 1,
    year: "Aug 2024 - Present",
    title: "Software Engineer — Wells Fargo",
    description: "Modernizing enterprise systems to scalable Java 17 and Spring Boot microservices. Architecting high-throughput event streaming pipelines using Apache Kafka and IBM MQ, deployed on Red Hat OpenShift (Kubernetes).",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: 2,
    year: "May 2023 - July 2023",
    title: "Intern Analyst — Wells Fargo",
    description: "Engineered an LSTM neural network in Python to automate customer liquidity forecasting, achieving 95% predictive accuracy and reducing manual ETL processing efforts by 40%.",
    icon: <Code className="w-5 h-5" />,
  },
  {
    id: 3,
    year: "Graduated 2024",
    title: "B.Tech in Computer Science and Engineering",
    description: "National Institute of Technology (NIT), Durgapur (CGPA: 8.65). Served as President of the Literary Circle and Vice President of QuizInc, managing 50+ members and large-scale university events.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
];

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 80%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,  // Lower stiffness makes it follow more lazily
    damping: 20,    // Higher damping prevents it from bouncing
    restDelta: 0.001
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="max-w-4xl mx-auto p-4 md:p-8 py-20 font-heading">
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-foreground flex items-center gap-2">
          The Journey
        </h2>
        <p className="text-muted-foreground text-lg">
          A timeline of my professional milestones and technical growth.
        </p>
      </div>

      <div ref={containerRef} className="relative ml-4 md:ml-6 pb-4">
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-border/50" />
        
        <motion.div 
          className="absolute left-0 top-0 w-[2px] bg-accent dark:shadow-[0_0_10px_var(--color-accent)]"
          style={{ height: lineHeight, transformOrigin: "top" }}
        />

        {timelineData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="mb-12 ml-10 md:ml-12 relative group"
          >
            <span className="absolute -left-[51px] md:-left-[59px] flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 z-10 
              bg-white border-slate-200 text-slate-400 group-hover:bg-accent group-hover:text-white group-hover:border-accent
              dark:bg-background dark:border-border dark:text-muted-foreground dark:group-hover:bg-background dark:group-hover:border-accent dark:group-hover:text-accent dark:group-hover:shadow-[0_0_15px_var(--color-accent)]"
            >
              {item.icon}
            </span>

            <div className="relative flex flex-col gap-2 p-6 md:p-8 rounded-2xl border transition-all duration-500 overflow-hidden
              bg-white border-slate-100 shadow-sm hover:shadow-xl hover:border-accent/30 group-hover:-translate-y-1
              dark:bg-card/40 dark:backdrop-blur-md dark:border-border/50 dark:shadow-lg dark:hover:bg-card/60 dark:hover:border-accent/50 dark:group-hover:-translate-y-0"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none dark:from-accent/10" />

              <div className="relative z-10">
                <span className="text-xs font-bold text-accent tracking-wider uppercase">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-card-foreground mt-1">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-muted-foreground leading-relaxed font-body mt-2 transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}