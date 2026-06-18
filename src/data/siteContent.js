// ============================================================
// CONTEÚDO DO SITE — edite todos os textos e links aqui
// ============================================================

export const SITE = {
  name: 'Clean Step',
  tagline: 'Cuidado real para seus tênis.',
  description: 'Mais que limpeza, uma renovação completa.',

  // ─── Contato ───────────────────────────────────────────────
  whatsapp: '5554999900250',
  whatsappDisplay: '54 99990-0250',
  instagram: 'use.cleanstep',
  email: 'contato@cleanstep.com.br',

  // ─── Hero ──────────────────────────────────────────────────
  hero: {
    badge: 'Limpeza completa para tênis',
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
      'A CleanStep é uma mini empresa criada por estudantes do 2° ano da Rede Caminho, como parte de um projeto desenvolvido pela CIC Jovem. Surgimos com um propósito claro: oferecer uma solução para a limpeza de tênis, devolvendo o visual original de forma rápida e acessível.',
      'Por isso, desenvolvemos um kit pensado para simplificar o dia a dia, unindo facilidade de uso e resultados visíveis em poucos minutos.',
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
      name: 'Isabel Cristina de Souza',
      city: 'Caxias do Sul, RS',
      rating: 5,
      photo: '/images/isabel.jpeg',
      text: 'Meu tênis branco estava com manchas de meses. Depois de usar a espuma, ficou como se fosse novo. Produto incrível!',
    },
    {
      name: 'Gabriel Hoffmann Rech',
      city: 'Caxias do Sul, RS',
      rating: 5,
      photo: '/images/gabriel.jpeg',
      text: 'O adesivo antiodor faz diferença real. Uso todo dia no meu tênis de corrida e o chulé acabou. Recomendo muito!',
    },
    {
      name: 'Janaina Moojen de Melos',
      city: 'Caxias do Sul, RS',
      rating: 5,
      photo: '/images/janaina.jpeg',
      photoStyle: { transform: 'scale(1.6)', objectPosition: 'center top' },
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
