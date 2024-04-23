"use client"

import React from "react";
import { motion } from "framer-motion";

export default function BlogAnimation({ children }: { children: React.ReactNode }) {
  const variants = {
    hidden: { opacity: 0, y: 300 },
    show: { opacity: 1, y: 0 },
  };

  return(
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.2, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}