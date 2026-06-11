import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { featuredProduct } from '../../data/products';

export default function FAQPreview() {
  const [open, setOpen] = useState(null);
  const faqs = featuredProduct.faq.slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#eff6ff] text-[#2B7FFF] text-xs font-semibold uppercase tracking-widest border border-[#bfdbfe] mb-4">
            Dúvidas
          </span>
          <h2 className="font-display text-4xl font-semibold text-[#0f2644]">
            Perguntas frequentes
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="rounded-2xl border border-[#f0f0f0] overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-[#f8f8fa] transition-colors"
              >
                <span className="font-medium text-[#1a1c1e] text-sm">{faq.q}</span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 text-[#2B7FFF]"
                >
                  <ChevronDown size={17} />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-sm text-[#6b7280] leading-relaxed border-t border-[#f0f0f0] pt-3">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            to="/duvidas"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2B7FFF] hover:gap-3 transition-all"
          >
            Ver todas as dúvidas <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
