"use client";

import FeatureCard from "./FeatureCard";
import { FEATURES } from "@/data/features";

const FeatureSection = () => {
  return (
    <section className="px-6 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-content">Generate</h2>
        <button className="text-sm font-medium text-primary hover:underline">
          Show all
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
