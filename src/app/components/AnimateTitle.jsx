"use client";

import { motion } from "framer-motion";

export default function AnimateTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="flex flex-col items-center justify-center h-80 m-9 z-10 text-black">
        <h1 className="text-5xl m-2 font-bold">RUNNING SHOE</h1>
        <h1 className="text-7xl tracking-wider font-bold">REVIEWS</h1>
      </div>
    </motion.div>
  );
}
