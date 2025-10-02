"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Navbar variant="mobile" />
    </motion.div>
  );
}
