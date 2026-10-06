<template>
  <section class="hero">
    <div class="container">
      <h1 class="hero-title">Найдите идеальный тур из Омска</h1>
      <p class="hero-subtitle">Лучшие отели, проверенные направления и честные цены</p>

      <div class="search-box">
        <div class="field">
          <label>Откуда</label>
          <input type="text" v-model="form.from" readonly />
        </div>
        <div class="field">
          <label>Куда</label>
          <select v-model="form.country">
            <option value="egypt">Египет</option>
            <option value="uae">ОАЭ</option>
            <option value="thailand">Таиланд</option>
            <option value="turkey">Турция</option>
          </select>
        </div>
        <div class="field">
          <label>Дата вылета</label>
          <input type="date" v-model="form.date" />
        </div>
        <div class="field">
          <label>Ночей</label>
          <input type="number" v-model="form.nights" min="1" max="21" />
        </div>
        <button @click="handleSearch" class="btn-submit">Найти туры</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';
import { useToursStore } from '../stores/toursStore';

const store = useToursStore();

const form = reactive({
  from: 'Омск',
  country: 'egypt',
  date: new Date().toISOString().split('T')[0],
  nights: 7
});

const handleSearch = () => {
  store.setFilter(form.country);
  const element = document.getElementById('tours-section');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.hero {
  padding: 60px 0 40px;
  text-align: center;
}
.hero-title {
  font-size: 2.8rem;
  font-weight: 900;
  margin-bottom: 12px;
  letter-spacing: -0.5px;
}
.hero-subtitle {
  color: var(--text-muted);
  font-size: 1.1rem;
  margin-bottom: 36px;
}
.search-box {
  background: white;
  padding: 18px;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(0,0,0,0.06);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)) 160px;
  gap: 12px;
  align-items: end;
  border: 1px solid var(--border-color);
}
.field {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.field label {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-muted);
  margin-bottom: 6px;
  text-transform: uppercase;
}
.field input, .field select {
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
  background-color: #FAFAFA;
}
.btn-submit {
  background-color: var(--primary-coral);
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-submit:hover {
  background-color: var(--primary-hover);
}
@media (max-width: 768px) {
  .hero-title { font-size: 2rem; }
  .search-box { grid-template-columns: 1fr; }
}
</style>