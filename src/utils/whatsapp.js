import { SITE } from '../data/siteContent';

const fmt = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export function buildWhatsAppUrl(items, total) {
  const lines = items.map(
    (i) => `• ${i.name} — Qtd: ${i.quantity} — ${fmt(i.price * i.quantity)}`
  ).join('\n');

  const totalQty = items.reduce((sum, i) => sum + i.quantity, 0);

  const msg =
    `Olá! Quero fazer um pedido da Clean Step.\n\n` +
    `${lines}\n\n` +
    `Quantidade total: ${totalQty} ${totalQty === 1 ? 'item' : 'itens'}\n` +
    `Total: ${fmt(total)}\n\n` +
    `Pode me passar as informações para finalizar?`;

  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
}
