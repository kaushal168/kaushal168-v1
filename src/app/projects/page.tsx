import { Projects } from "@/components/sections/Projects";

export const metadata = {
  title: "Projects | Kaushal Baid",
  description: "A comprehensive list of my software engineering projects.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-10">
      <Projects />
    </div>
  );
}