// components/ui/Tooltip.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  label: string;
}

const Tooltip = ({ children, label }: TooltipProps) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center px-3 py-1.5"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 px-2 py-1 text-xs rounded-md bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900 shadow-lg whitespace-nowrap"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
