export const PROFILE = {
  username: 'michi.daily',
  displayName: 'Michi Daily',
  bio: 'Fotos, siestas y aventuras felinas.',
  avatar:
    'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=200&h=200&fit=crop&crop=faces',
  followers: '12.8K',
  following: 384,
};

export const LOCATIONS = [
  'Buenos Aires, Argentina',
  'Palermo Soho',
  'Cordoba Capital',
  'Rosario Centro',
  'Mar del Plata',
  'La Plata',
  'Mendoza',
  'Bariloche',
  'Salta',
  'Tigre',
  'Recoleta',
  'Puerto Madero',
];

export const CAPTIONS = [
  'Modo siesta activado.',
  'La luz de la tarde siempre ayuda.',
  'Explorando el rincon favorito de la casa.',
  'Pequeno descanso antes de jugar.',
  'Hoy toca mirar todo desde arriba.',
  'Un retrato simple, como en el feed.',
  'Probando poses nuevas para la camara.',
  'Domingo tranquilo y muchas fotos.',
  'Ese momento exacto antes de dormir.',
  'Nueva publicacion para el clon movil.',
  'La mejor compania para estudiar React Native.',
  'Otro michi listo para recibir likes.',
];

export const COMMENTS = [
  { id: 'c1', user: 'sofi.cat', text: 'Que buena foto.' },
  { id: 'c2', user: 'react.native.dev', text: 'Excelente encuadre.' },
  { id: 'c3', user: 'expo.fan', text: 'Ese michi merece muchos likes.' },
];

export function buildPost(apiItem, index) {
  const imageUrl =
    apiItem?.url || `https://cataas.com/cat?width=900&height=900&seed=${index + 1}`;

  return {
    id: String(apiItem?.id || `fallback-${index + 1}`),
    username: `usuario_${index + 1}`,
    avatar: `https://cataas.com/cat?width=120&height=120&seed=avatar-${index + 1}`,
    location: LOCATIONS[index % LOCATIONS.length],
    imageUrl,
    likes: 120 + index * 37,
    caption: CAPTIONS[index % CAPTIONS.length],
    tags: ['catapi', 'expo', 'instagramclone'],
  };
}

export const FALLBACK_POSTS = Array.from({ length: 12 }, (_, index) =>
  buildPost(null, index)
);
