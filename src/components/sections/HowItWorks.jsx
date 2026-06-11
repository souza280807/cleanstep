import { motion } from 'framer-motion';
import { featuredProduct } from '../../data/products';

const STEP_COLORS = ['#2B7FFF', '#10b981', '#f59e0b', '#8b5cf6'];

export default function HowItWorks() {
  const steps = featuredProduct.howToUse;

  return (
    <section id="como-funciona" className="py-24 bg-[#f5f7fa]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#0f2644] text-white text-[11px] font-bold uppercase tracking-[0.12em] mb-5">
            Como usar
          </span>
          <h2
            className="font-display text-4xl sm:text-5xl text-[#0a0e1a] mb-4"
            style={{ letterSpacing: '-0.03em' }}
          >
            Simples assim
          </h2>
          <p className="text-[#6b7280] text-lg max-w-md mx-auto">
            Quatro passos para deixar seus tênis com aparência renovada.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] right-[-50%] h-px border-t-2 border-dashed border-[#d1d5db] z-0" />
              )}

              <div className="relative z-10 bg-white rounded-3xl p-7 shadow-[0_2px_20px_rgba(0,0,0,0.06)] border border-[#f0f0f0] h-full">
                {/* Step number badge */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
                  style={{ backgroundColor: STEP_COLORS[i] }}
                >
                  <span className="text-white font-display text-xl" style={{ letterSpacing: '-0.02em' }}>
                    {s.step}
                  </span>
                </div>

                <h3
                  className="font-display text-[1rem] text-[#0a0e1a] mb-2"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs text-[#9ca3af] mt-8 max-w-lg mx-auto"
        >
          * Para aplicar, você pode usar um pano limpo ou escova macia de uso doméstico. Não incluídos no kit.
        </motion.p>
      </div>
    </section>
  );
}
