"use client"

import { motion } from "framer-motion";

export default function FeaturesHeroAnimation() {
  const variants = {
    hidden: { opacity: 0, y: 200 },
    show: { opacity: 1, y: 0 },
  };

  return(
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.2 }}
      className="flex flex-col items-center justify-center h-[600px] lg:h-screen gap-20 relative mx-10 lg:mx-0"
    >
      <div className="absolute top-0 left-0 bg-green-900 lg:w-[400px] w-[100px] lg:h-[400px] h[100px] lg:blur-[150px] blur-[60px]"></div>
      <div className="absolute bottom-0 right-0 bg-green-400 lg:w-[400px] w-[100px] lg:h-[400px] h[100px] lg:blur-[150px] blur-[60px]"></div>
      <h1 className="font-semibold text-[3rem]">Features</h1>
      <p className="text-center lg:text-left text-[1.5rem]">Curious about our features? No worries! Scroll down to see our features in full display!</p>
    </motion.div>
  )
}