"use client";

import { useTheme } from "next-themes";
import { HiSun } from "react-icons/hi2";
import { HiMoon } from "react-icons/hi";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-1.5 rounded-lg bg-muted hover:scale-110 transition cursor-pointer"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {theme === "dark" ? <HiSun size={20} /> : <HiMoon size={20} />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}

