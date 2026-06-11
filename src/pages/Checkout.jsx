import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ChevronRight, Check, CreditCard, Banknote, QrCode } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { SITE } from '../data/siteContent';
import Button from '../components/ui/Button';

const PAYMENT_OPTIONS = [
  { value: 'pix', label: 'Pix', icon: QrCode, desc: 'Transferência instantânea' },
  { value: 'dinheiro', label: 'Dinheiro', icon: Banknote, desc: 'Pagamento na entrega' },
  { value: 'cartao', label: 'Cartão na entrega', icon: CreditCard, desc: 'Débito ou crédito' },
];

function Field({ label, name, value, onChange, type = 'text', placeholder, required, half = false }) {
  return (
    <div className={half ? 'col-span-1' : 'col-span-2'}>
      <label className="block text-xs font-semibold text-[#374151] mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl border-2 border-[#e8e8eb] bg-white text-sm text-[#1a1c1e] placeholder-[#9ca3af] focus:outline-none focus:border-[#2B7FFF] focus:ring-4 focus:ring-[#2B7FFF]/10 transition-all"
      />
    </div>
  );
}

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [payment, setPayment] = useState('pix');
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    cidade: '',
    bairro: '',
    endereco: '',
  });

  const fmt = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildMessage = () => {
    const paymentLabel = PAYMENT_OPTIONS.find((p) => p.value === payment)?.label;
    const itemsList = items
      .map((i) => `  • ${i.shortName} × ${i.quantity} = ${fmt(i.price * i.quantity)}`)
      .join('\n');

    return encodeURIComponent(
      `🛒 *Novo Pedido — Clean Step*\n\n` +
      `*Cliente:* ${form.name}\n` +
      `*WhatsApp:* ${form.whatsapp}\n\n` +
      `*Endereço:*\n  ${form.endereco}, ${form.bairro}\n  ${form.cidade}\n\n` +
      `*Itens:*\n${itemsList}\n\n` +
      `*Total:* ${fmt(total)}\n` +
      `*Pagamento:* ${paymentLabel}\n\n` +
      `Aguardo confirmação! 😊`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (items.length === 0) return;
    const msg = buildMessage();
    window.open(`https://wa.me/${SITE.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <div className="pt-16 min-h-screen bg-[#f8fbff]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-4xl font-semibold text-[#0f2644] mb-1">
            Finalizar pedido
          </h1>
          <p className="text-[#6b7280] text-sm">Preencha os dados e finalize pelo WhatsApp</p>
        </motion.div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-5"
            >
              {/* Personal info */}
              <div className="bg-white rounded-3xl p-6 border border-[#f0f0f0] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <h2 className="font-semibold text-[#0f2644] mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#2B7FFF] text-white text-xs flex items-center justify-center font-bold">1</span>
                  Seus dados
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Nome completo" name="name" value={form.name} onChange={handleChange} placeholder="Seu nome" required />
                  <Field label="WhatsApp" name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="(11) 99999-9999" required />
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-3xl p-6 border border-[#f0f0f0] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <h2 className="font-semibold text-[#0f2644] mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#2B7FFF] text-white text-xs flex items-center justify-center font-bold">2</span>
                  Endereço de entrega
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Cidade" name="cidade" value={form.cidade} onChange={handleChange} placeholder="Sua cidade" required half />
                  <Field label="Bairro" name="bairro" value={form.bairro} onChange={handleChange} placeholder="Seu bairro" required half />
                  <Field label="Endereço completo" name="endereco" value={form.endereco} onChange={handleChange} placeholder="Rua, número, complemento" required />
                </div>
              </div>

              {/* Payment */}
              <div className="bg-white rounded-3xl p-6 border border-[#f0f0f0] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <h2 className="font-semibold text-[#0f2644] mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#2B7FFF] text-white text-xs flex items-center justify-center font-bold">3</span>
                  Forma de pagamento
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PAYMENT_OPTIONS.map((opt) => {
                    const Icon = opt.icon;
                    const selected = payment === opt.value;
                    return (
                      <motion.button
                        key={opt.value}
                        type="button"
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setPayment(opt.value)}
                        className={`relative flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all text-center ${
                          selected
                            ? 'border-[#2B7FFF] bg-[#eff6ff] shadow-[0_0_0_3px_rgba(43,127,255,0.15)]'
                            : 'border-[#e8e8eb] hover:border-[#bfdbfe] bg-white'
                        }`}
                      >
                        <Icon size={22} className={selected ? 'text-[#2B7FFF]' : 'text-[#6b7280]'} />
                        <div>
                          <p className={`text-sm font-semibold ${selected ? 'text-[#2B7FFF]' : 'text-[#1a1c1e]'}`}>{opt.label}</p>
                          <p className="text-[10px] text-[#9ca3af] mt-0.5">{opt.desc}</p>
                        </div>
                        <AnimatePresence>
                          {selected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              className="absolute top-2 right-2 w-5 h-5 bg-[#2B7FFF] rounded-full flex items-center justify-center"
                            >
                              <Check size={11} className="text-white" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Order summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-3xl p-6 border border-[#f0f0f0] shadow-[0_2px_16px_rgba(0,0,0,0.06)] sticky top-24">
                <h2 className="font-semibold text-[#0f2644] mb-5">Seu pedido</h2>

                {items.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-sm text-[#9ca3af]">Nenhum item no carrinho</p>
                    <button
                      type="button"
                      onClick={() => navigate('/produto')}
                      className="mt-3 text-sm font-medium text-[#2B7FFF] hover:underline"
                    >
                      Ver produto
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-3 pb-4 border-b border-[#f0f0f0] mb-4">
                      {items.map((item) => (
                        <div key={item.id} className="flex gap-3 items-center">
                          <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#eff6ff] flex-shrink-0">
                            <img
                              src={item.coverImage}
                              alt={item.name}
                              className="w-full h-full object-contain p-1"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-[#0f2644] leading-snug truncate">{item.shortName}</p>
                            <p className="text-xs text-[#9ca3af]">× {item.quantity}</p>
                          </div>
                          <p className="text-sm font-bold text-[#0f2644] flex-shrink-0">{fmt(item.price * item.quantity)}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center mb-6">
                      <span className="font-semibold text-[#0f2644]">Total</span>
                      <span className="font-display text-2xl font-semibold text-[#0f2644]">{fmt(total)}</span>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={items.length === 0}
                    >
                      <MessageCircle size={17} />
                      Finalizar pelo WhatsApp
                    </Button>

                    <p className="text-[10px] text-[#9ca3af] text-center mt-3 leading-relaxed">
                      Ao clicar, você será redirecionado para o WhatsApp para confirmar seu pedido.
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </form>
      </div>
    </div>
  );
}
