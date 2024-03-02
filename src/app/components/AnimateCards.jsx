"use client";

import { motion } from "framer-motion";

export default function AnimateCards({ children }) {
  return (
    <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
      {children}
    </motion.div>
  );
}
