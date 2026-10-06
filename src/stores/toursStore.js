import { defineStore } from 'pinia';

export const useToursStore = defineStore('tours', {
  state: () => ({
    activeFilter: 'all',
    selectedTourForBooking: null,
    isModalOpen: false,
    tours: [
      {
        id: 1,
        title: 'Шарм-эль-Шейх, Египет',
        hotel: 'Albatros Aqua Park 5*',
        category: 'egypt',
        rating: '4.9',
        nights: 7,
        board: 'Все включено',
        price: 135000,
        badge: 'Хит продаж',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 2,
        title: 'Дубай, ОАЭ',
        hotel: 'Marina Byblos 4*',
        category: 'uae',
        rating: '4.7',
        nights: 6,
        board: 'Завтраки',
        price: 158000,
        badge: 'Горящий тур',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 3,
        title: 'Пхукет, Таиланд',
        hotel: 'Amora Beach Resort 5*',
        category: 'thailand',
        rating: '4.8',
        nights: 9,
        board: 'Завтраки',
        price: 210000,
        badge: 'Рекомендуем',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'
      }
    ]
  }),
  getters: {
    filteredTours: (state) => {
      if (state.activeFilter === 'all') return state.tours;
      return state.tours.filter(t => t.category === state.activeFilter);
    }
  },
  actions: {
    setFilter(category) {
      this.activeFilter = category;
    },
    openBooking(tour) {
      this.selectedTourForBooking = tour;
      this.isModalOpen = true;
    },
    closeBooking() {
      this.isModalOpen = false;
      this.selectedTourForBooking = null;
    }
  }
});