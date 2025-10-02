"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import FeatureSection from "@/components/FeatureSection";
import { Gallery } from "@/components/Gallery";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <HeroCarousel />
      <FeatureSection />
      <Gallery />
      <Navbar variant="mobile" />
    </motion.div>
  );
}
