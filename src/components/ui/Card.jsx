import { motion } from 'framer-motion';

export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: '0 20px 40px rgba(43,127,255,0.10)' } : {}}
      transition={{ duration: 0.25 }}
      className={`bg-white rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-[#f0f0f0] overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
