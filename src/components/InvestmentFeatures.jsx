import React from "react";
import { motion } from "framer-motion";
import { Settings, ShieldCheck, TrendingUp, BarChart2 } from "lucide-react";

/* === SVG Animated Mini Chart === */
const MiniChart = () => {
  const path = "M0,40 C10,30 20,35 30,25 C40,15 50,20 60,10 C70,5 80,20 90,15";
  return (
    <svg width="100%" height="60" viewBox="0 0 100 50">
      <defs>
        <linearGradient id="miniChartGradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <motion.path
        d={path}
        stroke="url(#miniChartGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.circle
        r="3"
        fill="#f59e0b"
        initial={{ cx: 0, cy: 40 }}
        animate={{
          cx: [0, 30, 60, 90],
          cy: [40, 25, 10, 15]
        }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
    </svg>
  );
};

/* === FEATURE COMPONENT === */
const Feature = ({ Icon, label, color }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    className={`flex items-start gap-4 p-4 rounded-xl shadow-lg border border-white/30 bg-white/80 backdrop-blur-md`}
  >
    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-${color}-100`}>
      <Icon size={24} className={`text-${color}-600`} />
    </div>
    <p className="text-gray-800 font-medium">{label}</p>
  </motion.div>
);

/* === MAIN COMPONENT === */
const InvestmentFeatures = () => (
  <section className="py-24 bg-gradient-to-b from-indigo-50 via-white to-amber-50/40" id="tools">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
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
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative p-8 rounded-3xl shadow-2xl border border-white/30 bg-white/80 backdrop-blur-md text-center">

          <BarChart2 size={60} className="mx-auto mb-4 text-indigo-700" />

          <h4 className="text-xl font-semibold text-gray-900">Visual Portfolio Analysis</h4>
          <p className="text-gray-500 mt-2 mb-4">Get insights into your investments instantly.</p>

          {/* Animated Mini Chart */}
          <div className="w-full h-16">
            <MiniChart />
          </div>

        </div>
      </motion.div>

    </div>
  </section>
);

export default InvestmentFeatures;
