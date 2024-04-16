"use client"

import Image from "next/image";
import { motion } from "framer-motion";

import money_tracker_logo from "@/public/money_tracker_logo.svg";

export default function HomeHeroAnimation() {
  const variants = {
    hidden: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0 },
  };

  return(
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.2 }}
      className="flex items-center justify-center gap-20 h-screen w-screen my-10 relative"
    >
      <div className="absolute top-0 right-0 bg-green-900 w-[400px] h-[400px] blur-[120px] overflow-x-hidden"></div>
      <div className="absolute bottom-0 left-0 bg-green-400 w-[400px] h-[400px] blur-[120px] overflow-x-hidden"></div>
      <div>
        <Image src={money_tracker_logo} alt="money_tracker_logo" width={500} height={500} />
      </div>
      <div>
        <h1 className="font-semibold text-[3rem]">Money Tracker</h1>
        <p className="text-[1.5rem]">Track your incomes, expenses, and transfers in one dashboard!</p>
      </div>
    </motion.div>
  )
}