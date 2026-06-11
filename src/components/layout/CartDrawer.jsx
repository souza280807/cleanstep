import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Trash2, ArrowRight, ShoppingBag, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { buildWhatsAppUrl } from '../../utils/whatsapp';
import QuantitySelector from '../ui/QuantitySelector';
import Button from '../ui/Button';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQty, total, count } = useCart();
  const navigate = useNavigate();

  const fmt = (v) =>
    v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const goWhatsApp = () => {
    window.open(buildWhatsAppUrl(items, total), '_blank');
  };

  const goCart = () => {
    setIsOpen(false);
    navigate('/carrinho');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#f0f0f0]">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} className="text-[#2B7FFF]" />
                <h2 className="font-semibold text-[#1a1c1e]">
                  Carrinho
                  {count > 0 && (
                    <span className="ml-2 text-xs font-bold bg-[#2B7FFF] text-white px-2 py-0.5 rounded-full">
                      {count}
                    </span>
                  )}
                </h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f3f4f6] transition-colors text-[#6b7280]"
              >
                <X size={18} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <AnimatePresence>
                {items.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="h-full flex flex-col items-center justify-center gap-4 text-center py-16"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#eff6ff] flex items-center justify-center">
                      <ShoppingCart size={28} className="text-[#2B7FFF]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a1c1e]">Carrinho vazio</p>
                      <p className="text-sm text-[#6b7280] mt-1">Adicione produtos para continuar</p>
                    </div>
                    <button
                      onClick={() => { setIsOpen(false); navigate('/produto'); }}
                      className="mt-2 text-sm font-medium text-[#2B7FFF] flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Ver produto <ArrowRight size={14} />
                    </button>
                  </motion.div>
                ) : (
                  <div className="space-y-3">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex gap-3 p-3 rounded-2xl bg-[#f8f8fa] border border-[#f0f0f0]"
                      >
                        <div className="w-16 h-16 rounded-xl bg-[#f8fbff] flex-shrink-0 overflow-hidden">
                          <img
                            src={item.coverImage}
                            alt={item.name}
                            className="w-full h-full object-contain p-1"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-[#1a1c1e] leading-tight line-clamp-2">
                            {item.shortName}
                          </p>
                          <p className="text-sm font-bold text-[#2B7FFF] mt-1">
                            {fmt(item.price * item.quantity)}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <QuantitySelector
                              value={item.quantity}
                              onChange={(q) => updateQty(item.id, q)}
                            />
                            <button
                              onClick={() => removeItem(item.id)}
                              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-red-50 hover:text-red-500 text-[#9ca3af] transition-colors"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-6 py-5 border-t border-[#f0f0f0] bg-white space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#6b7280]">Total</span>
                  <span className="text-lg font-bold text-[#1a1c1e]">{fmt(total)}</span>
                </div>
                <Button variant="primary" size="lg" fullWidth onClick={goWhatsApp}>
                  <MessageCircle size={16} />
                  Finalizar pelo WhatsApp
                </Button>
                <button
                  onClick={goCart}
                  className="w-full text-sm text-center text-[#6b7280] hover:text-[#2B7FFF] transition-colors py-1"
                >
                  Ver carrinho completo
                </button>
              </motion.div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
