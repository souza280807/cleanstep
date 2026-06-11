// ============================================================
// CONTEÚDO DO SITE — edite todos os textos e links aqui
// ============================================================

export const SITE = {
  name: 'Clean Step',
  tagline: 'Cuidado real para seus tênis.',
  description: 'Espuma de limpeza profunda e adesivo antiodor para manter seus tênis limpos e cheirosos.',

  // ─── Contato ───────────────────────────────────────────────
  whatsapp: '5554999900250',
  whatsappDisplay: '54 99990-0250',
  instagram: 'use.cleanstep',
  email: 'contato@cleanstep.com.br',

  // ─── Hero ──────────────────────────────────────────────────
  hero: {
    badge: 'Cuidado para tênis',
    headline: 'Seu tênis merece\nparecer novo novamente.',
    subheadline: 'Limpeza profunda e proteção contra odores em poucos minutos.',
    ctaPrimary: 'Comprar Agora',
    ctaSecondary: 'Ver como funciona',
    trustItems: [
      { label: 'Espuma de limpeza 100ml' },
      { label: 'Adesivo antiodor incluso' },
      { label: 'Por apenas R$ 20,00' },
    ],
  },

  // ─── Sobre ─────────────────────────────────────────────────
  about: {
    title: 'Quem somos',
    paragraphs: [
      'A Clean Step nasceu para simplificar o cuidado com os tênis no dia a dia.',
      'Criamos uma solução prática que une limpeza e combate ao mau cheiro em uma experiência simples, moderna e eficiente.',
      'Nosso propósito é ajudar você a manter seus tênis com aparência renovada e sensação de cuidado por mais tempo.',
    ],
    values: [
      { icon: 'Zap',       label: 'Praticidade', desc: 'Solução rápida que cabe na rotina.' },
      { icon: 'Heart',     label: 'Cuidado',     desc: 'Fórmula pensada para preservar o material.' },
      { icon: 'Lightbulb', label: 'Inovação',    desc: 'Produto moderno e eficiente.' },
    ],
  },

  // ─── Vídeo demonstrativo ───────────────────────────────────
  // Cole aqui o ID do vídeo do YouTube (parte após "v=" na URL)
  // Exemplo: https://youtube.com/watch?v=XXXXXXXXXXX → 'XXXXXXXXXXX'
  videoId: '',

  // ─── Depoimentos ───────────────────────────────────────────
  testimonials: [
    {
      name: 'Marcos Alves',
      city: 'Caxias do Sul, RS',
      rating: 5,
      text: 'Meu tênis branco estava com manchas de meses. Depois de usar a espuma, ficou como se fosse novo. Produto incrível!',
    },
    {
      name: 'Juliana Ramos',
      city: 'Porto Alegre, RS',
      rating: 5,
      text: 'O adesivo antiodor faz diferença real. Uso todo dia no meu tênis de corrida e o chulé acabou. Recomendo muito!',
    },
    {
      name: 'Felipe Costa',
      city: 'Gramado, RS',
      rating: 5,
      text: 'Produto prático, fácil de aplicar e o resultado é imediato. Comprei para mim e já pedi de presente para o meu irmão.',
    },
  ],

  // ─── Navegação ─────────────────────────────────────────────
  nav: [
    { label: 'Início',     path: '/' },
    { label: 'Produto',    path: '/produto' },
    { label: 'Quem somos', path: '/quem-somos' },
    { label: 'Dúvidas',    path: '/duvidas' },
  ],

  // ─── Footer ────────────────────────────────────────────────
  footer: {
    copy: '© 2025 Clean Step. Todos os direitos reservados.',
    links: [
      { label: 'Política de Privacidade', path: '#' },
      { label: 'Termos de Uso',           path: '#' },
    ],
  },
};
