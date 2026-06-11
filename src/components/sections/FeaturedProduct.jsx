import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, MessageCircle, Check } from 'lucide-react';
import { featuredProduct } from '../../data/products';
import { PRODUCT_GALLERY } from '../../data/assets';
import { SITE } from '../../data/siteContent';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';
import QuantitySelector from '../ui/QuantitySelector';

export default function FeaturedProduct() {
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const product = featuredProduct;

  const handleAdd = () => {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const waMessage = encodeURIComponent(
    `Olá! Quero comprar ${qty}x ${product.name} por ${product.priceFormatted}. Pode me ajudar?`
  );
  const waLink = `https://wa.me/${SITE.whatsapp}?text=${waMessage}`;

  return (
    <section className="py-20 bg-white" id="produto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#eff6ff] text-[#2B7FFF] text-xs font-semibold uppercase tracking-widest border border-[#bfdbfe] mb-4">
            Produto
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-[#0f2644]">
            Kit Clean Step
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-3"
          >
            {/* Main image */}
            <div className="aspect-square rounded-3xl overflow-hidden bg-[#f8fbff] relative group">
              <motion.img
                key={activeImg}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                src={PRODUCT_GALLERY[activeImg]?.src}
                alt={PRODUCT_GALLERY[activeImg]?.alt}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-4"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {PRODUCT_GALLERY.map((img, i) => (
                <motion.button
                  key={i}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all bg-[#f8fbff] ${
                    activeImg === i
                      ? 'border-[#2B7FFF] shadow-[0_0_0_2px_rgba(43,127,255,0.2)]'
                      : 'border-transparent hover:border-[#bfdbfe]'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-contain p-1"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display text-3xl font-semibold text-[#0f2644] leading-tight mb-2">
                {product.name}
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Includes */}
            <div className="bg-[#f8fbff] rounded-2xl p-4 border border-[#dbeafe]">
              <p className="text-xs font-semibold text-[#2B7FFF] uppercase tracking-widest mb-3">O que vem no kit</p>
              <ul className="space-y-2">
                {product.includes.map((inc) => (
                  <li key={inc} className="flex items-center gap-2 text-sm text-[#374151]">
                    <Check size={14} className="text-[#2B7FFF] flex-shrink-0" />
                    {inc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div className="flex items-end gap-3">
              <span className="font-display text-5xl font-semibold text-[#0f2644]">
                {product.priceFormatted}
              </span>
              <span className="text-sm text-[#9ca3af] mb-2">kit completo</span>
            </div>

            {/* Qty + Add */}
            <div className="flex items-center gap-4">
              <QuantitySelector value={qty} onChange={setQty} />
              <Button variant="primary" size="lg" onClick={handleAdd} className="flex-1">
                {added ? (
                  <><Check size={16} />Adicionado!</>
                ) : (
                  <><ShoppingCart size={16} />Adicionar ao carrinho</>
                )}
              </Button>
            </div>

            {/* WhatsApp */}
            <a href={waLink} target="_blank" rel="noreferrer" className="block">
              <Button variant="secondary" size="lg" fullWidth>
                <MessageCircle size={16} />
                Comprar pelo WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
