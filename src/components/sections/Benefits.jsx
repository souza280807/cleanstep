import { motion } from 'framer-motion';
import { Zap, Droplets, Wind, Shield, Clock, Package } from 'lucide-react';

const BENEFITS = [
  {
    Icon: Zap,
    title: 'Ação instantânea',
    desc: 'A espuma age profundamente no material em segundos, sem necessidade de espera.',
    color: '#f59e0b',
  },
  {
    Icon: Droplets,
    title: 'Limpeza profunda',
    desc: 'Remove sujeira, manchas e resíduos do dia a dia sem agredir o material.',
    color: '#2B7FFF',
  },
  {
    Icon: Wind,
    title: 'Antiodor de verdade',
    desc: 'Ajuda a reduzir odores e manter o tênis mais fresco por até 48 horas.',
    color: '#10b981',
  },
  {
    Icon: Shield,
    title: 'Fórmula suave',
    desc: 'Seguro para couro, tecido, sintético e materiais delicados.',
    color: '#8b5cf6',
  },
  {
    Icon: Clock,
    title: 'Em minutos',
    desc: 'Processo rápido e sem burocracia. Aplica, espalha com um pano e pronto.',
    color: '#ef4444',
  },
  {
    Icon: Package,
    title: 'Kit completo',
    desc: 'Espuma 100ml + adesivo antiodor. Tudo que você precisa em um único kit.',
    color: '#0f2644',
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#eff6ff] text-[#2B7FFF] text-[11px] font-bold uppercase tracking-[0.12em] border border-[#bfdbfe] mb-5">
            Por que Clean Step?
          </span>
          <h2
            className="font-display text-4xl sm:text-5xl text-[#0a0e1a] mb-4"
            style={{ letterSpacing: '-0.03em' }}
          >
            Mais que limpeza, uma renovação completa
          </h2>
          <p className="text-[#6b7280] text-lg max-w-lg mx-auto">
            Cada detalhe foi pensado para que seus tênis fiquem impecáveis com o mínimo de esforço.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative bg-[#f9fafb] border border-[#e5e7eb] rounded-3xl p-7 overflow-hidden cursor-default"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 30% 40%, ${item.color}12, transparent 65%)` }}
              />

              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <item.Icon size={22} style={{ color: item.color }} strokeWidth={2} />
              </div>

              <h3
                className="font-display text-[1.05rem] text-[#0a0e1a] mb-2"
                style={{ letterSpacing: '-0.01em' }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
