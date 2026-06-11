import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

export default function QuantitySelector({ value, onChange, min = 1, max = 99 }) {
  const decrement = () => { if (value > min) onChange(value - 1); };
  const increment = () => { if (value < max) onChange(value + 1); };

  return (
    <div className="flex items-center gap-0 rounded-full border-2 border-[#e8e8eb] overflow-hidden bg-white w-fit">
      <motion.button
        type="button"
        onClick={decrement}
        disabled={value <= min}
        whileTap={{ scale: 0.85 }}
        className="w-10 h-10 flex items-center justify-center text-[#6b7280] hover:text-[#2B7FFF] hover:bg-[#eff6ff] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <Minus size={15} />
      </motion.button>

      <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={value}
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="text-sm font-bold text-[#1a1c1e] tabular-nums"
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </div>

      <motion.button
        type="button"
        onClick={increment}
        disabled={value >= max}
        whileTap={{ scale: 0.85 }}
        className="w-10 h-10 flex items-center justify-center text-[#6b7280] hover:text-[#2B7FFF] hover:bg-[#eff6ff] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <Plus size={15} />
      </motion.button>
    </div>
  );
}
