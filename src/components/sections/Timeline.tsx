"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code } from "lucide-react";

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
  return (
    <section id="experience" className="max-w-4xl mx-auto p-4 md:p-8 py-20 font-heading">
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-foreground flex items-center gap-2">
          The Journey
        </h2>
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
            className="mb-12 ml-10 md:ml-12 relative group"
          >
            {/* The Node on the line */}
            <span className="absolute -left-[51px] md:-left-[59px] flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-border text-muted-foreground shadow-sm group-hover:border-accent group-hover:text-accent transition-colors">
              {item.icon}
            </span>

            {/* Content Box */}
            <div className="flex flex-col gap-2 bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-accent/50 transition-all">
              <span className="text-xs font-bold text-accent tracking-wider uppercase">
                {item.year}
              </span>
              <h3 className="text-xl font-bold text-card-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-body mt-2">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}