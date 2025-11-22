import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-3xl shadow-xl border"
  >
    <div className="w-12 h-12 mb-6 p-2 rounded-xl bg-green-100 flex items-center justify-center text-green-500">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default FeatureCard;
