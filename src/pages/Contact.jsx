import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, AtSign, Mail } from 'lucide-react';
import { featuredProduct } from '../data/products';
import { SITE } from '../data/siteContent';
import Button from '../components/ui/Button';

function FAQItem({ faq, i }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.06 }}
      className="rounded-2xl border border-[#f0f0f0] overflow-hidden bg-white"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#f8f8fa] transition-colors"
      >
        <span className="font-medium text-[#1a1c1e]">{faq.q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[#2B7FFF] flex-shrink-0"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 pt-3 text-[#6b7280] leading-relaxed border-t border-[#f0f0f0]">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-[#f8fbff] to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#eff6ff] text-[#2B7FFF] text-xs font-semibold uppercase tracking-widest border border-[#bfdbfe] mb-6"
          >
            Dúvidas & Contato
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl font-semibold text-[#0f2644] mb-4"
          >
            Podemos ajudar?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#4b5563] text-lg"
          >
            Respondemos suas dúvidas mais frequentes abaixo e também pelo WhatsApp.
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold text-[#0f2644] mb-6"
          >
            Perguntas frequentes
          </motion.h2>
          <div className="space-y-3">
            {featuredProduct.faq.map((faq, i) => (
              <FAQItem key={i} faq={faq} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact channels */}
      <section className="py-16 bg-[#f8fbff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-semibold text-[#0f2644] mb-8 text-center"
          >
            Fale com a gente
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: MessageCircle,
                label: 'WhatsApp',
                desc: SITE.whatsappDisplay,
                href: `https://wa.me/${SITE.whatsapp}`,
                color: '#25D366',
              },
              {
                icon: AtSign,
                label: 'Instagram',
                desc: `@${SITE.instagram}`,
                href: `https://instagram.com/${SITE.instagram}`,
                color: '#E1306C',
              },
              {
                icon: Mail,
                label: 'E-mail',
                desc: SITE.email,
                href: `mailto:${SITE.email}`,
                color: '#2B7FFF',
              },
            ].map((ch, i) => {
              const Icon = ch.icon;
              return (
                <motion.a
                  key={ch.label}
                  href={ch.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center gap-3 p-6 bg-white rounded-3xl border border-[#f0f0f0] shadow-[0_2px_16px_rgba(0,0,0,0.05)] text-center transition-all group"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md"
                    style={{ backgroundColor: ch.color + '18' }}
                  >
                    <Icon size={22} style={{ color: ch.color }} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f2644] text-sm">{ch.label}</p>
                    <p className="text-xs text-[#6b7280] mt-0.5">{ch.desc}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
