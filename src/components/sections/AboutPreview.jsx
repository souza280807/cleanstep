import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Heart, Lightbulb } from 'lucide-react';
import { SITE } from '../../data/siteContent';
import { assets } from '../../data/assets';

const ICONS = { Zap, Heart, Lightbulb };

export default function AboutPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-[440px] mx-auto lg:mx-0">
              <img
                src={assets.kit}
                alt="Kit Clean Step — espuma + adesivo antiodor"
                className="w-full h-auto object-contain drop-shadow-xl"
              />

              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0, rotate: -8 }}
                whileInView={{ scale: 1, rotate: -8 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-4 -right-2 bg-[#0f2644] text-white rounded-2xl shadow-[0_8px_28px_rgba(15,38,68,0.35)] px-5 py-4 text-center"
              >
                <p className="text-2xl font-display leading-none" style={{ letterSpacing: '-0.03em' }}>
                  R$ 20
                </p>
                <p className="text-[10px] text-white/60 mt-1 uppercase tracking-widest font-medium">Kit completo</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#eff6ff] text-[#2B7FFF] text-[11px] font-bold uppercase tracking-[0.12em] border border-[#bfdbfe] mb-6">
              Quem somos
            </span>

            <h2
              className="font-display text-4xl sm:text-5xl text-[#0a0e1a] mb-6 leading-[1.1]"
              style={{ letterSpacing: '-0.03em' }}
            >
              Nascemos para simplificar o cuidado com seus tênis.
            </h2>

            <p className="text-[#4b5563] leading-relaxed mb-8 text-[1.05rem]">
              {SITE.about.paragraphs[0]} {SITE.about.paragraphs[1]}
            </p>

            <div className="grid grid-cols-3 gap-3 mb-10">
              {SITE.about.values.map((v) => {
                const Icon = ICONS[v.icon];
                return (
                  <div
                    key={v.label}
                    className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#f9fafb] border border-[#e5e7eb]"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#eff6ff] flex items-center justify-center mb-2.5">
                      <Icon size={16} className="text-[#2B7FFF]" />
                    </div>
                    <p className="text-xs font-bold text-[#0f2644] leading-tight">{v.label}</p>
                  </div>
                );
              })}
            </div>

            <Link
              to="/quem-somos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2B7FFF] hover:gap-3 transition-all"
            >
              Conheça nossa história <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
