import { motion } from 'framer-motion';
import { FlaskConical, Leaf, Sparkles } from 'lucide-react';

const TECHS = [
  {
    Icon: FlaskConical,
    title: 'Fórmula de limpeza ativa',
    desc: 'A espuma foi desenvolvida com agentes de limpeza que penetram nas fibras do tênis, dissolvedores de sujeira e resíduos sem agredir o material ou desbotá-lo.',
    tag: 'Espuma 100ml',
  },
  {
    Icon: Leaf,
    title: 'Tecnologia antiodor',
    desc: 'O adesivo utiliza tecnologia de absorção de odores por ação contínua. Colocado no interior do tênis, age enquanto você usa — sem perfumes artificiais, sem máscaras.',
    tag: 'Adesivo antiodor',
  },
  {
    Icon: Sparkles,
    title: 'Resultado visível',
    desc: 'A combinação de limpeza profunda e eliminação do odor entrega uma renovação completa. Seu tênis parece recém-comprado a cada uso.',
    tag: 'Kit Clean Step',
  },
];

export default function Technology() {
  return (
    <section className="py-24 bg-[#0a0e1a] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 text-white/80 text-[11px] font-bold uppercase tracking-[0.12em] mb-5">
            O que está por trás
          </span>
          <h2
            className="font-display text-4xl sm:text-5xl text-white mb-4"
            style={{ letterSpacing: '-0.03em' }}
          >
            A tecnologia do kit
          </h2>
          <p className="text-white/50 text-lg max-w-md mx-auto">
            Dois produtos complementares que trabalham juntos para um resultado que se vê e se sente.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TECHS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden cursor-default"
            >
              {/* Top glow */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Hover glow */}
              <div className="absolute inset-0 bg-[#2B7FFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl pointer-events-none" />

              {/* Tag */}
              <span className="inline-block px-2.5 py-1 rounded-full bg-[#2B7FFF]/20 text-[#93c5fd] text-[10px] font-bold uppercase tracking-widest mb-6">
                {item.tag}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-[#2B7FFF]/15 flex items-center justify-center mb-5">
                <item.Icon size={22} className="text-[#2B7FFF]" strokeWidth={2} />
              </div>

              <h3
                className="font-display text-[1.1rem] text-white mb-3"
                style={{ letterSpacing: '-0.02em' }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
