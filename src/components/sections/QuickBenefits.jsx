import { motion } from 'framer-motion';
import { Sparkles, Wind, Sun, Star } from 'lucide-react';

const ICON_MAP = { Sparkles, Wind, Sun, Star };

const items = [
  { icon: 'Sparkles', label: 'Limpeza prática' },
  { icon: 'Wind', label: 'Antiodor' },
  { icon: 'Sun', label: 'Uso diário' },
  { icon: 'Star', label: 'Visual renovado' },
];

export default function QuickBenefits() {
  return (
    <section className="bg-[#0f2644] py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
          {items.map((item, i) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center justify-center gap-2.5 py-4 px-4"
              >
                <Icon size={16} className="text-[#2B7FFF] flex-shrink-0" />
                <span className="text-sm font-medium text-white/80">{item.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
