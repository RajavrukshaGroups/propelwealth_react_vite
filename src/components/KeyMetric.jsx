import React from "react";
import { motion } from "framer-motion";

const KeyMetric = ({ icon: Icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    className="text-center p-6 bg-white rounded-2xl shadow-lg border"
  >
    <div className="w-14 h-14 mx-auto mb-4 p-3 rounded-full bg-indigo-50 flex items-center justify-center">
      <Icon size={28} />
    </div>
    <div className="text-3xl font-extrabold text-indigo-700">{value}</div>
    <p className="text-gray-500">{label}</p>
  </motion.div>
);

export default KeyMetric;
