import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { SITE } from '../../data/siteContent';

function StarRow({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-[#f59e0b]" fill="currentColor" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0a0e1a] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 text-white/80 text-[11px] font-bold uppercase tracking-[0.12em] mb-5">
            Quem já usou
          </span>
          <h2
            className="font-display text-4xl sm:text-5xl text-white mb-4"
            style={{ letterSpacing: '-0.03em' }}
          >
            Resultados reais
          </h2>
          <p className="text-white/50 text-lg max-w-md mx-auto">
            Pessoas que já transformaram seus tênis com o Kit da Clean Step.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SITE.testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl p-8 border border-white/10 bg-white/5 flex flex-col gap-5"
            >
              {/* Top line glow */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              <StarRow count={t.rating} />

              <p className="text-white/70 text-[0.95rem] leading-relaxed flex-1">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                {/* Avatar initials */}
                <div className="w-10 h-10 rounded-full bg-[#2B7FFF]/25 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#93c5fd] font-bold text-sm">
                    {t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mt-14 pt-10 border-t border-white/10"
        >
          {[
            { value: '5★', label: 'Avaliação média' },
            { value: '100%', label: 'Satisfação garantida' },
            { value: 'R$ 20', label: 'Kit completo' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="font-display text-3xl text-white mb-1"
                style={{ letterSpacing: '-0.03em' }}
              >
                {stat.value}
              </p>
              <p className="text-white/40 text-xs uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
