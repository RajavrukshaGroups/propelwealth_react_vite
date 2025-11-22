import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ArrowRight, ShieldCheck } from "lucide-react";

/* === SVG ANIMATED GRAPH === */
const AnimatedGraph = () => {
  const path =
    "M0,120 C40,80 80,60 120,90 C160,120 200,40 240,70 C280,100 320,60 360,85 C400,110 440,50 480,75";

  return (
    <svg width="100%" height="140" viewBox="0 0 480 140">
      <defs>
        <linearGradient id="lineGradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>

        <linearGradient id="fillGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(79,70,229,0.25)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      {/* Filled Area */}
      <motion.path
        d={`${path} L480,140 L0,140 Z`}
        fill="url(#fillGradient)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
      />

      {/* Line */}
      <motion.path
        d={path}
        stroke="url(#lineGradient)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Glow Dot */}
      <motion.circle
        r="6"
        fill="#f59e0b"
        initial={{ cx: 0, cy: 120 }}
        animate={{
          cx: [0, 120, 240, 360, 480],
          cy: [120, 90, 70, 85, 75]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      />
    </svg>
  );
};

/* === MAIN HERO COMPONENT === */
const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-amber-50/40 min-h-[calc(100vh-80px)] flex items-center pt-24 pb-16 lg:py-0">

      {/* PREMIUM BACKGROUND ORBS */}
      <div className="absolute top-0 right-[-200px] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-[-250px] left-[-150px] w-[450px] h-[450px] bg-amber-400/20 rounded-full blur-[150px]"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
        >

          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur text-indigo-700 text-xs font-bold uppercase tracking-wider shadow-sm border border-indigo-100 mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
            Premium Investment Platform
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-gray-900">
              Investing made effortless.  
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-amber-500">
              Grow with PROPEL.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Smart tools, AI-powered insights, and a beautifully crafted platform built to scale your financial future.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#signup"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Start Investing <ArrowRight size={18} />
            </a>

            <a
              href="#tools"
              className="px-8 py-4 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all w-full sm:w-auto"
            >
              Explore Tools
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 flex-wrap">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-green-600" />
              <span>SEBI Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-green-600" />
              <span>Secure • AES-256</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE UI CHART CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-md mx-auto lg:max-w-none"
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/40 relative z-10">

            {/* Portfolio Value */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wide">
                  Total Portfolio Value
                </h3>
                <div className="text-3xl font-bold text-gray-900 mt-1">
                  ₹ 1,24,567
                </div>
              </div>

              <div className="bg-green-50 text-green-700 px-3 py-1 rounded-lg font-semibold text-sm flex items-center gap-1">
                <TrendingUp size={16} /> +4.2%
              </div>
            </div>

            {/* Animated SVG Graph */}
            <div className="mb-6">
              <AnimatedGraph />
            </div>

            {/* SIP Payment Box */}
            <div className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl flex justify-between items-center hover:from-blue-50 hover:to-white transition-colors cursor-pointer border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-600 font-bold">
                  S
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">SIP Installment</div>
                  <div className="text-xs text-gray-500">Due Today</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="font-bold">₹ 5,000</div>
                </div>
                <button className="px-4 py-2 bg-amber-500 text-white text-xs font-bold rounded-lg shadow-md hover:bg-amber-600 transition-colors">
                  Pay
                </button>
              </div>
            </div>

          </div>

          {/* Floating NIFTY Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/40 flex items-center gap-3 z-20 hidden sm:flex"
          >
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <TrendingUp size={20} />
            </div>
            <div>
              <div className="text-xs text-gray-500">NIFTY 50</div>
              <div className="font-bold text-sm text-green-600">+145.20 (0.8%)</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
