import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, MessageCircle, Check, ChevronDown } from 'lucide-react';
import { featuredProduct } from '../data/products';
import { PRODUCT_GALLERY } from '../data/assets';
import { SITE } from '../data/siteContent';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import QuantitySelector from '../components/ui/QuantitySelector';

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-[#f0f0f0] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-[#f8f8fa] transition-colors"
      >
        <span className="font-medium text-[#1a1c1e] text-sm">{faq.q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-[#2B7FFF] flex-shrink-0">
          <ChevronDown size={17} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 pt-3 text-sm text-[#6b7280] leading-relaxed border-t border-[#f0f0f0]">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Product() {
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const product = featuredProduct;

  const handleAdd = () => {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  const waMessage = encodeURIComponent(
    `Olá! Quero comprar ${qty}x ${product.name} — ${product.priceFormatted}. Pode me ajudar?`
  );
  const waLink = `https://wa.me/${SITE.whatsapp}?text=${waMessage}`;

  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center gap-2 text-xs text-[#9ca3af]">
          <a href="/" className="hover:text-[#2B7FFF] transition-colors">Início</a>
          <span>/</span>
          <span className="text-[#1a1c1e] font-medium">Produto</span>
        </nav>
      </div>

      {/* Main product */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 lg:sticky lg:top-24"
        >
          {/* Main image */}
          <div className="aspect-square rounded-3xl overflow-hidden relative group">
            <motion.img
              key={activeImg}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              src={PRODUCT_GALLERY[activeImg]?.src}
              alt={PRODUCT_GALLERY[activeImg]?.alt}
              className="w-full h-full object-contain group-hover:scale-[1.04] transition-transform duration-700"
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-2">
            {PRODUCT_GALLERY.map((img, i) => (
              <motion.button
                key={i}
                whileTap={{ scale: 0.93 }}
                onClick={() => setActiveImg(i)}
                className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                  activeImg === i
                    ? 'border-[#2B7FFF] shadow-[0_0_0_2px_rgba(43,127,255,0.2)]'
                    : 'border-transparent hover:border-[#bfdbfe]'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-contain"
                />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <div>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#0f2644] leading-tight mb-3">
              {product.name}
            </h1>
            <p className="text-[#4b5563] leading-relaxed">{product.description}</p>
          </div>

          {/* Includes */}
          <div className="bg-[#f8fbff] rounded-2xl p-4 border border-[#dbeafe]">
            <p className="text-xs font-semibold text-[#2B7FFF] uppercase tracking-widest mb-3">Incluso no kit</p>
            <ul className="space-y-2">
              {product.includes.map((inc) => (
                <li key={inc} className="flex items-center gap-2 text-sm text-[#374151]">
                  <Check size={14} className="text-[#2B7FFF]" />
                  {inc}
                </li>
              ))}
            </ul>
          </div>

          {/* Price */}
          <div className="flex items-end gap-3 py-2 border-y border-[#f0f0f0]">
            <span className="font-display text-5xl font-semibold text-[#0f2644]">
              {product.priceFormatted}
            </span>
            <span className="text-sm text-[#9ca3af] mb-2">kit completo</span>
          </div>

          {/* Qty */}
          <div className="flex items-center gap-4">
            <div>
              <p className="text-xs text-[#9ca3af] mb-2 font-medium">Quantidade</p>
              <QuantitySelector value={qty} onChange={setQty} />
            </div>
            <div className="flex-1">
              <p className="text-xs text-[#9ca3af] mb-2 font-medium">Total</p>
              <p className="font-semibold text-[#0f2644]">
                {(product.price * qty).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-3">
            <Button variant="primary" size="xl" fullWidth onClick={handleAdd}>
              {added ? (
                <><Check size={18} /> Adicionado ao carrinho!</>
              ) : (
                <><ShoppingCart size={18} /> Adicionar ao carrinho</>
              )}
            </Button>
            <a href={waLink} target="_blank" rel="noreferrer" className="block">
              <Button variant="secondary" size="xl" fullWidth>
                <MessageCircle size={18} />
                Comprar pelo WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Benefits + How to use + FAQ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#f8fbff] rounded-3xl p-8"
        >
          <h2 className="font-display text-3xl font-semibold text-[#0f2644] mb-6">Benefícios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.benefits.map((b) => (
              <div key={b} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#f0f0f0]">
                <div className="w-8 h-8 rounded-lg bg-[#eff6ff] flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-[#2B7FFF]" />
                </div>
                <span className="text-sm font-medium text-[#374151]">{b}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* How to use */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-semibold text-[#0f2644] mb-6">Modo de uso</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.howToUse.map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-5 border border-[#f0f0f0] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <div className="w-10 h-10 rounded-xl bg-[#2B7FFF] flex items-center justify-center mb-3 shadow-[0_4px_12px_rgba(43,127,255,0.3)]">
                  <span className="text-white font-bold text-sm">{s.step}</span>
                </div>
                <h3 className="font-semibold text-[#0f2644] text-sm mb-1">{s.title}</h3>
                <p className="text-xs text-[#6b7280] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#9ca3af] mt-4">
            * A escova ou pano são apenas apoio para aplicação e não fazem parte do produto.
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-semibold text-[#0f2644] mb-6">Perguntas frequentes</h2>
          <div className="space-y-3">
            {product.faq.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
