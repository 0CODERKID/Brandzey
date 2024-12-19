import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors ${className}`}
    >
      {children}
    </motion.button>
  );
}