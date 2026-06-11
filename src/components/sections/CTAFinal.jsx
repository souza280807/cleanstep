import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { SITE } from '../../data/siteContent';
import { useCart } from '../../context/CartContext';
import { featuredProduct } from '../../data/products';

export default function CTAFinal() {
  const { addItem, setIsOpen } = useCart();

  const handleBuy = () => {
    addItem(featuredProduct);
    setIsOpen(true);
  };

  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Olá! Quero comprar o Kit Clean Step. Pode me passar as informações?')}`;

  return (
    <section className="py-28 bg-[#0f2644] text-white relative overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#2B7FFF]/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 text-white/70 text-[11px] font-bold uppercase tracking-[0.12em] mb-6">
            Oferta especial
          </span>

          <h2
            className="font-display text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem] text-white leading-[1.05] mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            Pare de andar com<br />
            <span className="text-[#60a5fa]">tênis sujo.</span>
          </h2>

          <p className="text-white/60 text-lg sm:text-xl max-w-xl mx-auto mb-3 leading-relaxed">
            O Kit Clean Step por apenas{' '}
            <span className="text-white font-bold">R$ 20,00</span>. Espuma + adesivo antiodor.
          </p>
          <p className="text-white/40 text-sm mb-12">
            Entregamos na sua região. Fale com a gente pelo WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleBuy}
              className="inline-flex items-center justify-center gap-2.5 bg-[#2B7FFF] hover:bg-[#1d6ef5] text-white font-bold text-base px-8 py-4 rounded-2xl shadow-[0_8px_32px_rgba(43,127,255,0.4)] transition-colors"
            >
              Comprar Agora
              <ArrowRight size={18} />
            </motion.button>

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-base px-8 py-4 rounded-2xl transition-colors"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
