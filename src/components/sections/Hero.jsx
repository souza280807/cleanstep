import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart, Check } from 'lucide-react';
import { SITE } from '../../data/siteContent';
import { assets } from '../../data/assets';
import { useCart } from '../../context/CartContext';
import { featuredProduct } from '../../data/products';
import Button from '../ui/Button';

const stagger = (i) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  const { addItem } = useCart();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-bl from-[#eff6ff] via-[#f8fbff] to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] rounded-full bg-[#2B7FFF]/6 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Left: Copy ─────────────────────────────────── */}
        <div className="order-2 lg:order-1 max-w-xl">
          <motion.div {...stagger(0)}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eff6ff] text-[#2B7FFF] text-[11px] font-bold uppercase tracking-[0.12em] border border-[#bfdbfe] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2B7FFF] animate-pulse" />
              {SITE.hero.badge}
            </span>
          </motion.div>

          <motion.h1
            {...stagger(1)}
            className="font-display text-[2.8rem] sm:text-[3.6rem] lg:text-[4rem] leading-[1.08] text-[#0a0e1a] mb-6"
            style={{ letterSpacing: '-0.03em' }}
          >
            {SITE.hero.headline.split('\n').map((line, i) => (
              <span key={i}>
                {i === 1 ? <span className="text-[#2B7FFF]">{line}</span> : line}
                {i === 0 && <br />}
              </span>
            ))}
          </motion.h1>

          <motion.p {...stagger(2)} className="text-lg text-[#4b5563] leading-relaxed mb-10 font-light">
            {SITE.hero.subheadline}
          </motion.p>

          <motion.div {...stagger(3)} className="flex flex-col sm:flex-row gap-3 mb-10">
            <Button variant="primary" size="xl" onClick={() => addItem(featuredProduct)}>
              <ShoppingCart size={18} />
              {SITE.hero.ctaPrimary}
            </Button>
            <Button variant="ghost" size="xl" onClick={() => {
              document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              {SITE.hero.ctaSecondary}
              <ArrowRight size={16} />
            </Button>
          </motion.div>

          {/* Trust checklist */}
          <motion.ul {...stagger(4)} className="flex flex-col sm:flex-row gap-3 sm:gap-6">
            {SITE.hero.trustItems.map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-sm text-[#374151] font-medium">
                <div className="w-5 h-5 rounded-full bg-[#2B7FFF] flex items-center justify-center flex-shrink-0">
                  <Check size={11} className="text-white" strokeWidth={3} />
                </div>
                {item.label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* ── Right: Product image ────────────────────────── */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Soft glow behind product */}
            <div className="absolute inset-[-20%] rounded-full bg-[#2B7FFF]/10 blur-3xl" />

            {/* Product image */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <div className="w-[300px] h-[340px] sm:w-[360px] sm:h-[400px] lg:w-[420px] lg:h-[480px]">
                <img
                  src={assets.kit}
                  alt="Kit Clean Step — espuma + adesivo antiodor"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Floating pill — price */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-2 -left-4 bg-[#0f2644] text-white rounded-2xl shadow-xl px-5 py-3.5 z-20"
            >
              <p className="text-xs text-white/50 font-medium mb-0.5">Kit completo</p>
              <p className="text-xl font-bold leading-none">R$ 20,00</p>
            </motion.div>

            {/* Floating pill — product detail */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.15, duration: 0.5 }}
              className="absolute -top-2 -right-4 bg-white border border-[#e8ecf0] rounded-2xl shadow-xl p-3 flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-[#f0f6ff] flex items-center justify-center flex-shrink-0">
                <img src={assets.espuma} alt="" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#0f2644] leading-tight">Espuma + Adesivo</p>
                <p className="text-[10px] text-[#6b7280]">Kit Clean Step</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-[#d1d5db] flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-[#9ca3af]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
