import React from "react";
import { motion } from "framer-motion";
import { Settings, ShieldCheck, TrendingUp, BarChart2 } from "lucide-react";

const InvestmentFeatures = () => (
  <section className="py-24 bg-gray-50" id="tools">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

      {/* LEFT CONTENT */}
      <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}>
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-6">
          Tools Engineered for Financial Freedom
        </h2>

        <p className="text-gray-600 mb-10">
          From automated rebalancing to tax harvesting — take control of your future.
        </p>

        <div className="space-y-6">
          <Feature label="Automated Rebalancing" Icon={Settings} color="indigo" />
          <Feature label="Advanced Tax Harvesting" Icon={ShieldCheck} color="amber" />
          <Feature label="Market-Beating Research" Icon={TrendingUp} color="green" />
        </div>
      </motion.div>

      {/* RIGHT VISUAL */}
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}>
        <div className="relative p-8 bg-white rounded-3xl shadow-xl text-center border">

          <BarChart2 size={60} className="mx-auto mb-4 text-indigo-700" />

          <h4 className="text-xl font-semibold">Visual Portfolio Analysis</h4>
          <p className="text-gray-500 mt-2">Get insights into your investments instantly.</p>

        </div>
      </motion.div>

    </div>
  </section>
);

const Feature = ({ Icon, label, color }) => (
  <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md border">
    <div className={`w-10 h-10 rounded-full bg-${color}-100 flex items-center justify-center`}>
      <Icon size={20} className={`text-${color}-600`} />
    </div>
    <p className="text-gray-700 font-medium">{label}</p>
  </div>
);

export default InvestmentFeatures;
