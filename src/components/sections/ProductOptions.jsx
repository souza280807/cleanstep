import { motion } from 'framer-motion';
import { Check, MessageCircle } from 'lucide-react';
import { SITE } from '../../data/siteContent';

const wa = (msg) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

const PRODUCTS = [
  {
    id: 'espuma',
    name: 'Apenas Espuma de Limpeza',
    price: 'R$ 18,00',
    items: [
      'Limpeza rápida e prática para tênis',
      'Remove sujeira superficial sem precisar lavar',
    ],
    waMsg: 'Olá! Tenho interesse na Espuma de Limpeza Clean Step por R$18,00.',
    featured: false,
    badge: null,
  },
  {
    id: 'kit',
    name: 'Kit Completo Clean Step',
    price: 'R$ 25,00',
    items: [
      'Espuma de limpeza',
      '10 adesivos antiodor',
    ],
    waMsg: 'Olá! Tenho interesse no Kit Completo Clean Step por R$25,00.',
    featured: true,
    badge: 'Mais vendido',
  },
  {
    id: 'adesivo',
    name: 'Apenas Adesivos Antiodor',
    price: 'R$ 5,00',
    items: [
      '10 adesivos antiodor',
      'Ajuda a reduzir odores por até 48 horas',
    ],
    waMsg: 'Olá! Tenho interesse nos Adesivos Antiodor Clean Step por R$5,00.',
    featured: false,
    badge: null,
  },
];

export default function ProductOptions() {
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
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#eff6ff] text-[#2B7FFF] text-[11px] font-bold uppercase tracking-[0.12em] border border-[#bfdbfe] mb-5">
            Escolha o seu
          </span>
          <h2
            className="font-display text-4xl sm:text-5xl text-[#0a0e1a]"
            style={{ letterSpacing: '-0.03em' }}
          >
            Escolha como cuidar do seu tênis
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col rounded-3xl p-8 ${
                p.featured
                  ? 'bg-white border-2 border-[#2B7FFF] shadow-[0_8px_40px_rgba(43,127,255,0.18)]'
                  : 'bg-white border border-[#e5e7eb] shadow-[0_2px_16px_rgba(0,0,0,0.05)]'
              }`}
            >
              {/* Badge "Mais vendido" */}
              {p.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-block bg-[#2B7FFF] text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_4px_12px_rgba(43,127,255,0.4)] whitespace-nowrap">
                    {p.badge}
                  </span>
                </div>
              )}

              {/* Name */}
              <h3
                className="font-display text-[1.15rem] text-[#0a0e1a] mb-2 mt-2"
                style={{ letterSpacing: '-0.02em' }}
              >
                {p.name}
              </h3>

              {/* Price */}
              <p
                className={`font-display text-3xl mb-6 ${p.featured ? 'text-[#2B7FFF]' : 'text-[#0a0e1a]'}`}
                style={{ letterSpacing: '-0.03em' }}
              >
                {p.price}
              </p>

              {/* Items list */}
              <ul className="flex flex-col gap-2.5 flex-1 mb-8">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#4b5563]">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      p.featured ? 'bg-[#2B7FFF]' : 'bg-[#e5e7eb]'
                    }`}>
                      <Check size={11} className={p.featured ? 'text-white' : 'text-[#374151]'} strokeWidth={3} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.a
                href={wa(p.waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-sm transition-colors ${
                  p.featured
                    ? 'bg-[#2B7FFF] hover:bg-[#1d6ef5] text-white shadow-[0_4px_16px_rgba(43,127,255,0.35)]'
                    : 'bg-[#0a0e1a] hover:bg-[#1a1f2e] text-white'
                }`}
              >
                <MessageCircle size={16} />
                Comprar agora
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
