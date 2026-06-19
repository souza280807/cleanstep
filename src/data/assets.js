// ============================================================
// ASSETS — imagens da pasta public/images/
// Para trocar uma foto, basta alterar o caminho abaixo.
// ============================================================

export const assets = {
  logo:        '/images/logo.png',
  logo2:       '/images/logo2.png',
  hero:        '/images/aplicandoespuma.png',
  espuma:      '/images/espuma.png',
  kit:         '/images/kit.png',
  cheiroso:    '/images/cheiroso.png',
  tenisLimpo:  '/images/tenis-limpo.jpg',
  tenisSujo:   '/images/tenis-sujo.jpg',
};

// Alias para compatibilidade com componentes que usam IMAGES
export const IMAGES = {
  heroApplying:   assets.hero,
  productFoam:    assets.espuma,
  productKit:     assets.kit,
  productSticker: assets.cheiroso,
};

// Galeria do produto
export const PRODUCT_GALLERY = [
  { src: assets.espuma,   alt: 'Espuma Clean Step — frasco 100ml' },
  { src: assets.kit,      alt: 'Kit espuma + adesivo antiodor Clean Step' },
  { src: assets.cheiroso, alt: 'Adesivo antiodor Clean Step' },
];
