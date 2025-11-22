import React from "react";
import FeatureCard from "./FeatureCard";
import { Sparkles, Target, ShieldCheck } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Hybrid Expertise + Technology",
      description: "Human advisors + AI-driven planning tools.",
      delay: 0.1,
    },
    {
      icon: Target,
      title: "Goal-Based Planning",
      description: "Invest to reach your life goals, not just returns.",
      delay: 0.3,
    },
    {
      icon: ShieldCheck,
      title: "Risk Management",
      description: "Custom risk-mapping and active rebalancing.",
      delay: 0.5,
    },
  ];

  return (
    <section className="py-24 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl font-extrabold text-indigo-700 mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
