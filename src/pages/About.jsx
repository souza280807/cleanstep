import { motion } from 'framer-motion';
import { Zap, Heart, Lightbulb } from 'lucide-react';
import { SITE } from '../data/siteContent';
import { assets } from '../data/assets';

const ICONS = { Zap, Heart, Lightbulb };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-[#0f2644] to-[#1a3a6e] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, #2B7FFF33 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.span
            {...fadeUp(0)}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-widest border border-white/20 mb-6"
          >
            Nossa história
          </motion.span>
          <motion.h1 {...fadeUp(0.1)} className="font-display text-5xl sm:text-6xl font-semibold text-white mb-6">
            {SITE.about.title}
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-white/70 text-lg leading-relaxed">
            {SITE.about.paragraphs[0]}
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeUp(0)}>
              <img
                src={assets.espuma}
                alt="Espuma Clean Step"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </motion.div>

            <div className="space-y-5">
              {SITE.about.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  {...fadeUp(i * 0.1)}
                  className="text-[#4b5563] leading-relaxed text-lg"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#f8fbff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="font-display text-4xl font-semibold text-[#0f2644]">Nossos valores</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SITE.about.values.map((v, i) => {
              const Icon = ICONS[v.icon];
              return (
                <motion.div
                  key={v.label}
                  {...fadeUp(i * 0.1)}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-3xl p-8 text-center border border-[#f0f0f0] shadow-[0_2px_16px_rgba(0,0,0,0.05)]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#2B7FFF] flex items-center justify-center mx-auto mb-5 shadow-[0_4px_16px_rgba(43,127,255,0.3)]">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#0f2644] mb-2">{v.label}</h3>
                  <p className="text-sm text-[#6b7280] leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
