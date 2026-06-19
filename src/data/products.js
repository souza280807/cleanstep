// ============================================================
// PRODUTOS — edite preço, nome, descrição aqui
// ============================================================

import { assets, PRODUCT_GALLERY } from './assets';

export const PRODUCTS = [
  {
    id: 'kit-clean-step',
    slug: 'kit-clean-step',
    name: 'Clean Step — Espuma + Adesivo Antiodor',
    shortName: 'Kit Clean Step',
    price: 20.00,
    priceFormatted: 'R$ 20,00',
    originalPrice: null,
    description:
      'Uma solução simples para limpar seus tênis e ajudar a combater o mau cheiro no dia a dia. A espuma de limpeza age profundamente no material e o adesivo antiodor mantém o interior fresco por mais tempo.',
    shortDescription:
      'Espuma de limpeza profunda + adesivo antiodor. Cuidado completo para seus tênis.',
    includes: [
      '1 frasco espuma de limpeza 100ml',
      '4 adesivos antiodor para tênis',
    ],
    benefits: [
      'Remove sujeiras do dia a dia',
      'Ajuda a reduzir o mau cheiro',
      'Fácil de aplicar',
      'Ideal para rotina de cuidados',
      'Deixa o tênis com aparência renovada',
      'Compacto e prático',
    ],
    howToUse: [
      { step: 1, title: 'Aplique a espuma', desc: 'Aplique a espuma diretamente na superfície do tênis.' },
      { step: 2, title: 'Espalhe', desc: 'Espalhe com um pano ou escova macia em movimentos circulares.' },
      { step: 3, title: 'Remova o excesso', desc: 'Com um pano limpo e seco, remova o excesso da espuma.' },
      { step: 4, title: 'Use o adesivo', desc: 'Coloque o adesivo antiodor no interior do tênis e aproveite uma sensação de frescor por até 48 horas.' },
    ],
    faq: [
      {
        q: 'O produto vem com escova?',
        a: 'Não. A Clean Step é composta pela espuma de limpeza e pelo adesivo antiodor. Para aplicar, você pode usar um pano ou escova macia que já tenha em casa.',
      },
      {
        q: 'Pode usar em qualquer tênis?',
        a: 'Sim! A espuma foi desenvolvida para ser versátil e pode ser usada em tênis de couro, tecido, sintético e outros materiais.',
      },
      {
        q: 'A espuma agride o material?',
        a: 'Não. A fórmula é suave e foi pensada para não agredir o material do tênis, preservando a textura e a cor.',
      },
      {
        q: 'Como usar o adesivo antiodor?',
        a: 'Retire a proteção adesiva e cole no interior do tênis. Ele age absorvendo o odor e mantendo o frescor.',
      },
      {
        q: 'Quanto tempo dura o adesivo?',
        a: 'O adesivo antiodor ajuda a reduzir odores por aproximadamente 48 horas (2 dias) em uso regular.',
      },
      {
        q: 'Como faço para comprar?',
        a: 'Clique em "Comprar agora" ou "Comprar pelo WhatsApp" em qualquer página do site. É simples e rápido!',
      },
      {
        q: 'A entrega é feita em quais regiões?',
        a: 'Entregamos em toda a região. Entre em contato pelo WhatsApp para confirmar disponibilidade na sua cidade.',
      },
    ],
    images: PRODUCT_GALLERY,
    coverImage: assets.espuma,
  },
];

export const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);
export const featuredProduct = PRODUCTS[0];
