export interface Tour {
  id: number
  title: string
  country: string
  countryCode: string
  hotel: string
  stars: number
  rating: number
  reviewsCount: number
  nights: number
  board: string
  price: number
  oldPrice?: number
  flyFrom: string
  image: string
  badge: string
  description: string
  features: string[]
}

export const TOURS_DATA: Tour[] = [
  {
    id: 1,
    title: 'Египет, Шарм-эль-Шейх',
    country: 'egypt',
    countryCode: '🇪🇬',
    hotel: 'Pickalbatros Aqua Park Resort 5*',
    stars: 5,
    rating: 4.9,
    reviewsCount: 142,
    nights: 7,
    board: 'Всё включено (AI)',
    price: 135000,
    oldPrice: 152000,
    flyFrom: 'Омск (прямой рейс)',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80',
    badge: 'Хит из Омска',
    description: 'Роскошный семейный отель с огромным аквапарком, несколькими бассейнами с подогревом и собственным коралловым пляжем. Идеален для отдыха с детьми.',
    features: ['Первая линия', 'Аквапарк 22 горки', 'Бесплатный Wi-Fi', 'Детский клуб']
  },
  {
    id: 2,
    title: 'ОАЭ, Дубай',
    country: 'uae',
    countryCode: '🇦🇪',
    hotel: 'Marina Byblos Hotel 4*',
    stars: 4,
    rating: 4.7,
    reviewsCount: 98,
    nights: 6,
    board: 'Завтраки (BB)',
    price: 158000,
    oldPrice: 175000,
    flyFrom: 'Омск',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
    badge: 'Горящий тур',
    description: 'Отель в престижном районе Dubai Marina. В пешей доступности станция метро, променад и пляж JBR.',
    features: ['Центр города', 'Бассейн на крыше', 'Трансфер на пляж', 'Рядом метро']
  },
  {
    id: 3,
    title: 'Таиланд, Пхукет',
    country: 'thailand',
    countryCode: '🇹🇭',
    hotel: 'Amora Beach Resort Phuket 5*',
    stars: 5,
    rating: 4.8,
    reviewsCount: 210,
    nights: 9,
    board: 'Завтраки (BB)',
    price: 210000,
    flyFrom: 'Омск',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    badge: 'Рекомендуем',
    description: 'Обновленный 5-звездочный курорт прямо на пляже Банг Тао. Тропический сад, спа-центр и концептуальный пляжный клуб.',
    features: ['Пляж Bang Tao', 'Спа-комплекс', '2 бассейна', 'Рестораны морепродуктов']
  },
  {
    id: 4,
    title: 'Турция, Анталья',
    country: 'turkey',
    countryCode: '🇹🇷',
    hotel: 'Swandor Hotels & Resorts Topkapi 5*',
    stars: 5,
    rating: 4.9,
    reviewsCount: 312,
    nights: 7,
    board: 'Ультра всё включено (UAI)',
    price: 165000,
    oldPrice: 189000,
    flyFrom: 'Омск',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    badge: 'Ultra All Inclusive',
    description: 'Отель премиум-класса с архитектурой Османской империи. Огромный песчаный пляж, активная анимация и рестораны 24/7.',
    features: ['UAI 24/7', 'Песчаный пляж', 'Шоу-программы', 'Парк развлечений']
  }
]