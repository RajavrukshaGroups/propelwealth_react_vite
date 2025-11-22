import React from "react";
import KeyMetric from "./KeyMetric";
import { DollarSign, Users, BarChart2, Award } from "lucide-react";

const KeyMetrics = () => {
  const metrics = [
    { icon: DollarSign, value: "$500M+", label: "Assets Managed", delay: 0.1 },
    { icon: Users, value: "15,000+", label: "Investors", delay: 0.3 },
    { icon: BarChart2, value: "18.5%", label: "Avg Returns", delay: 0.5 },
    { icon: Award, value: "5 Yrs", label: "Experience", delay: 0.7 },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-extrabold text-indigo-700 mb-10">
          Our Performance By The Numbers
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <KeyMetric key={i} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
