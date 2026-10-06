<template>
  <section id="tours-section" class="tours-section">
    <div class="container">
      <div class="section-head">
        <h2>Горящие предложения</h2>
        <div class="filter-tabs">
          <button 
            v-for="cat in categories" 
            :key="cat.id"
            :class="['tab-btn', { active: store.activeFilter === cat.id }]"
            @click="store.setFilter(cat.id)"
          >
            {{ cat.name }}
          </button>
        </div>
      </div>

      <div class="tours-grid">
        <div class="tour-card" v-for="tour in store.filteredTours" :key="tour.id">
          <div class="card-media">
            <img :src="tour.image" :alt="tour.title" />
            <span class="badge">{{ tour.badge }}</span>
          </div>
          <div class="card-content">
            <div class="rating">★ {{ tour.rating }} — {{ tour.hotel }}</div>
            <h3 class="tour-title">{{ tour.title }}</h3>
            <p class="tour-info">{{ tour.nights }} ночей • {{ tour.board }}</p>
            <div class="card-footer">
              <div class="price-group">
                <span class="price">от {{ tour.price.toLocaleString() }} ₽</span>
                <span class="sub">за двоих</span>
              </div>
              <button @click="store.openBooking(tour)" class="btn-book">Забронировать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useToursStore } from '../stores/toursStore';

const store = useToursStore();

const categories = [
  { id: 'all', name: 'Все' },
  { id: 'egypt', name: 'Египет' },
  { id: 'uae', name: 'ОАЭ' },
  { id: 'thailand', name: 'Таиланд' }
];
</script>

<style scoped>
.tours-section {
  padding: 50px 0;
}
.section-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
  flex-wrap: wrap;
  gap: 16px;
}
.section-head h2 {
  font-size: 1.8rem;
  font-weight: 800;
}
.filter-tabs {
  display: flex;
  gap: 8px;
}
.tab-btn {
  background: white;
  border: 1px solid var(--border-color);
  padding: 8px 18px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.85rem;
  transition: all 0.2s;
}
.tab-btn.active {
  background-color: var(--primary-coral);
  color: white;
  border-color: var(--primary-coral);
}
.tours-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}
.tour-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: transform 0.2s, box-shadow 0.2s;
}
.tour-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.06);
}
.card-media {
  position: relative;
  height: 200px;
}
.card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--primary-coral);
  color: white;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
}
.card-content {
  padding: 20px;
}
.rating {
  font-size: 0.85rem;
  color: #D97706;
  font-weight: 600;
  margin-bottom: 6px;
}
.tour-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 4px;
}
.tour-info {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 18px;
}
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price {
  font-size: 1.25rem;
  font-weight: 800;
  display: block;
}
.sub {
  font-size: 0.75rem;
  color: var(--text-muted);
}
.btn-book {
  background: var(--text-dark);
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-book:hover {
  background: #000;
}
</style>