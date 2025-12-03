import { FAQ } from "@/components/FAQ";

export const metadata = {
  title: "FAQ - DoPlan CLI",
  description: "Frequently asked questions about DoPlan CLI. Honest answers about how it works, pricing, privacy, and more.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen py-20">
      <FAQ />
    </div>
  );
}

