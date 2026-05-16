import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  icon?: React.ReactNode;
}

const GlowButton = ({ children, variant = "primary", className, icon, ...props }: GlowButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2",
        variant === "primary"
          ? "text-white bg-[linear-gradient(90deg,#00f5ff,#7c3aed)] shadow-[0_0_20px_rgba(124,58,237,0.6)] hover:shadow-[0_0_30px_rgba(124,58,237,0.8)]"
          : "bg-gray-900 text-white border border-gray-700 hover:border-gray-500 hover:bg-gray-800",
        className
      )}
      {...props}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </motion.button>
  );
};

export default GlowButton;
