import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { assets } from '../../data/assets';

export default function BeforeAfter() {
  const containerRef = useRef(null);
  const dragging = useRef(false);
  const animRef = useRef(null);

  // Position as a MotionValue — starts at 50% (centered)
  const pos = useMotionValue(50);

  // Derived values for smooth GPU-accelerated updates (no re-renders)
  const clipPath  = useTransform(pos, (v) => `inset(0 ${100 - v}% 0 0)`);
  const leftPct   = useTransform(pos, (v) => `${v}%`);

  // Auto-animation on load: 50 → 40 → 60 → 50 (shows interactivity, runs once)
  useEffect(() => {
    animRef.current = animate(pos, [40, 62, 50], {
      duration: 2,
      delay: 0.9,
      ease: [0.4, 0, 0.2, 1],
    });
    return () => animRef.current?.stop();
  }, []);

  const stopAnim = () => animRef.current?.stop();

  const updatePos = (clientX) => {
    if (!containerRef.current) return;
    stopAnim();
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100));
    pos.set(x);
  };

  const onContainerDown = (e) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePos(e.clientX);
  };
  const onMove   = (e) => { if (dragging.current) updatePos(e.clientX); };
  const onUp     = ()  => { dragging.current = false; };
  const onTouch  = (e) => { updatePos(e.touches[0].clientX); e.preventDefault(); };

  return (
    <section className="py-24 bg-[#f5f7fa]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#0f2644] text-white text-[11px] font-bold uppercase tracking-[0.12em] mb-5">
            ✨ Veja a transformação real
          </span>
          <h2
            className="font-display text-4xl sm:text-5xl text-[#0a0e1a] mb-4"
            style={{ letterSpacing: '-0.03em' }}
          >
            Veja a diferença
          </h2>
          <p className="text-[#6b7280] text-lg max-w-md mx-auto">
            A espuma Clean Step age em minutos.
          </p>
        </motion.div>

        {/* Card wrapper — adds the shadow */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-sm sm:max-w-md mx-auto rounded-3xl shadow-[0_24px_72px_rgba(0,0,0,0.22)] overflow-hidden"
        >
          {/* Comparison area */}
          <div
            ref={containerRef}
            className="relative w-full aspect-[3/4] cursor-ew-resize select-none"
            onPointerDown={onContainerDown}
            onPointerMove={onMove}
            onPointerUp={onUp}
            onPointerLeave={onUp}
            onTouchMove={onTouch}
            style={{ touchAction: 'none' }}
          >

            {/* ── ANTES — tênis sujo (base layer, sempre visível) ── */}
            <div className="absolute inset-0">
              <img
                src={assets.tenisSujo}
                alt="Antes da limpeza — tênis sujo"
                className="w-full h-full object-cover"
                style={{ objectPosition: '48% 54%' }}
                draggable={false}
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-[0.1em] pointer-events-none">
                Antes
              </div>
            </div>

            {/* ── DEPOIS — tênis limpo (revelado ao arrastar) ────── */}
            <motion.div className="absolute inset-0" style={{ clipPath }}>
              <img
                src={assets.tenisLimpo}
                alt="Depois da limpeza — tênis limpo"
                className="w-full h-full object-cover"
                style={{ objectPosition: '48% 54%' }}
                draggable={false}
              />
              <div className="absolute top-4 right-4 bg-[#2B7FFF] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-[0.1em] pointer-events-none">
                Depois
              </div>
            </motion.div>

            {/* ── Divider line ──────────────────────────────────── */}
            <motion.div
              className="absolute inset-y-0 w-[2px] pointer-events-none"
              style={{
                left: leftPct,
                background: 'linear-gradient(to bottom, transparent 0%, white 15%, white 85%, transparent 100%)',
                boxShadow: '0 0 12px rgba(255,255,255,0.7), 0 0 32px rgba(255,255,255,0.3)',
              }}
            />

            {/* ── Drag handle ──────────────────────────────────── */}
            <motion.div
              className="absolute top-1/2 z-20 cursor-ew-resize"
              style={{
                left: leftPct,
                translateX: '-50%',
                translateY: '-50%',
              }}
            >
              <motion.div
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.9 }}
                className="relative flex items-center justify-center"
              >
                {/* Outer ring */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-[0_4px_28px_rgba(0,0,0,0.35)] flex items-center justify-center gap-1">
                  {/* Left arrow */}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M9 2L4 7L9 12" stroke="#2B7FFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {/* Center divider */}
                  <div className="w-px h-5 bg-[#e5e7eb] mx-0.5" />
                  {/* Right arrow */}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 2L10 7L5 12" stroke="#2B7FFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {/* Blue ring accent */}
                <div className="absolute inset-0 rounded-full border-2 border-[#2B7FFF]/25 pointer-events-none" />
              </motion.div>
            </motion.div>

          </div>
        </motion.div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-[#9ca3af] mt-6"
        >
          Arraste a barra para comparar o resultado da limpeza.
        </motion.p>

      </div>
    </section>
  );
}
