import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, ShoppingCart, ArrowLeft, ShoppingBag, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import QuantitySelector from '../components/ui/QuantitySelector';
import Button from '../components/ui/Button';

export default function Cart() {
  const { items, removeItem, updateQty, total, count } = useCart();

  const fmt = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className="pt-16 min-h-screen bg-[#f8fbff]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <ShoppingBag size={24} className="text-[#2B7FFF]" />
            <h1 className="font-display text-4xl font-semibold text-[#0f2644]">
              Meu Carrinho
            </h1>
            {count > 0 && (
              <span className="px-3 py-1 bg-[#2B7FFF] text-white text-sm font-bold rounded-full">
                {count} {count === 1 ? 'item' : 'itens'}
              </span>
            )}
          </div>
        </motion.div>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-24"
          >
            <div className="w-20 h-20 rounded-full bg-[#eff6ff] flex items-center justify-center mx-auto mb-5">
              <ShoppingCart size={32} className="text-[#2B7FFF]" />
            </div>
            <h2 className="font-display text-3xl font-semibold text-[#0f2644] mb-3">Carrinho vazio</h2>
            <p className="text-[#6b7280] mb-8">Adicione produtos para continuar</p>
            <Link to="/produto">
              <Button variant="primary" size="lg">
                Ver produto
              </Button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Items */}
            <div className="lg:col-span-2 space-y-3">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20, height: 0 }}
                    className="bg-white rounded-3xl p-5 border border-[#f0f0f0] shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-[#eff6ff] to-[#f5ede4] flex-shrink-0">
                        <img
                          src={item.coverImage}
                          alt={item.name}
                          className="w-full h-full object-contain p-1"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-[#0f2644] text-sm leading-tight">{item.name}</h3>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-50 hover:text-red-500 text-[#9ca3af] transition-colors flex-shrink-0"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                        <p className="text-[#6b7280] text-xs mt-1">{item.shortDescription}</p>
                        <div className="flex items-center justify-between mt-3 gap-3">
                          <QuantitySelector value={item.quantity} onChange={(q) => updateQty(item.id, q)} />
                          <div className="text-right">
                            <p className="text-xs text-[#9ca3af]">{fmt(item.price)} un.</p>
                            <p className="font-bold text-[#0f2644]">{fmt(item.price * item.quantity)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              <Link
                to="/produto"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#6b7280] hover:text-[#2B7FFF] transition-colors mt-2"
              >
                <ArrowLeft size={14} />
                Continuar comprando
              </Link>
            </div>

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-3xl p-6 border border-[#f0f0f0] shadow-[0_2px_16px_rgba(0,0,0,0.06)] sticky top-24">
                <h2 className="font-semibold text-[#0f2644] mb-5">Resumo do pedido</h2>
                <div className="space-y-3 pb-4 border-b border-[#f0f0f0] mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-[#6b7280] leading-snug">
                        {item.shortName} <span className="text-[#9ca3af]">× {item.quantity}</span>
                      </span>
                      <span className="font-medium text-[#1a1c1e] flex-shrink-0 ml-2">{fmt(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-semibold text-[#0f2644]">Total</span>
                  <span className="font-display text-2xl font-semibold text-[#0f2644]">{fmt(total)}</span>
                </div>
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={() => window.open(buildWhatsAppUrl(items, total), '_blank')}
                >
                  <MessageCircle size={16} />
                  Finalizar pelo WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
