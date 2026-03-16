import { HeroBento } from "@/components/sections/HeroBento";
import { Timeline } from "@/components/sections/Timeline";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroBento />
      <Timeline />
    </main>
  );
}