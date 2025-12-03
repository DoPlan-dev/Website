import { MemoryCard } from "@/components/MemoryCard";
import { AgentsSection } from "@/components/AgentsSection";
import { Gamification } from "@/components/Gamification";
import { Proof } from "@/components/Proof";
import { FirstFiveMinutes } from "@/components/FirstFiveMinutes";

export const metadata = {
  title: "Features - DoPlan CLI",
  description: "Memory Card progression, 18 AI agents, gamification, and real numbers. See how DoPlan gets smarter with every project.",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <MemoryCard />
      <AgentsSection />
      <Gamification />
      <Proof />
      <FirstFiveMinutes />
    </div>
  );
}

