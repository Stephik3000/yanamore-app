<script setup lang="ts">
import { ref, computed } from 'vue'
import { TOURS_DATA, Tour } from '../data/tours'

const selectedCountry = ref('all')
const selectedBoard = ref('all')
const maxPrice = ref(300000)

const filteredTours = computed(() => {
  return TOURS_DATA.filter((tour: Tour) => {
    const matchCountry = selectedCountry.value === 'all' || tour.country === selectedCountry.value
    const matchBoard = selectedBoard.value === 'all' || tour.board.includes(selectedBoard.value)
    const matchPrice = tour.price <= maxPrice.value
    return matchCountry && matchBoard && matchPrice
  })
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-10">
    <h1 class="text-3xl font-black text-dark mb-2">Поиск и подбор туров</h1>
    <p class="text-stone-500 text-sm mb-8">Найдите идеальный тур по вашим критериям</p>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <!-- Боковой фильтр -->
      <div class="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm h-fit space-y-6">
        <h3 class="font-extrabold text-dark text-lg border-b border-stone-100 pb-3">Фильтры</h3>

        <div>
          <label class="block text-xs font-bold text-stone-400 uppercase mb-2">Направление</label>
          <select v-model="selectedCountry" class="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-sm font-semibold focus:border-coral-500 focus:outline-none">
            <option value="all">Все страны</option>
            <option value="egypt">Египет</option>
            <option value="uae">ОАЭ</option>
            <option value="thailand">Таиланд</option>
            <option value="turkey">Турция</option>
          </select>
        </div>

        <div>
          <label class="block text-xs font-bold text-stone-400 uppercase mb-2">Питание</label>
          <select v-model="selectedBoard" class="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-sm font-semibold focus:border-coral-500 focus:outline-none">
            <option value="all">Любое питание</option>
            <option value="AI">Всё включено (AI)</option>
            <option value="BB">Завтраки (BB)</option>
          </select>
        </div>

        <div>
          <label class="block text-xs font-bold text-stone-400 uppercase mb-2">
            Макс. цена: <span class="text-coral-500 font-extrabold">{{ maxPrice.toLocaleString() }} ₽</span>
          </label>
          <input type="range" v-model.number="maxPrice" min="100000" max="300000" step="10000" class="w-full accent-coral-500 cursor-pointer" />
        </div>
      </div>

      <!-- Список результатов -->
      <div class="lg:col-span-3 space-y-4">
        <div v-if="filteredTours.length === 0" class="bg-white p-12 rounded-2xl text-center border border-stone-200">
          <p class="text-stone-500 font-semibold">По выбранным параметрам ничего не найдено.</p>
        </div>

        <div 
          v-for="tour in filteredTours" 
          :key="tour.id"
          class="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm flex flex-col sm:flex-row gap-6 hover:border-coral-500/50 transition-all"
        >
          <img :src="tour.image" :alt="tour.title" class="w-full sm:w-56 h-40 object-cover rounded-xl" />
          <div class="flex-grow flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-coral-500 uppercase tracking-wider">{{ tour.countryCode }} {{ tour.title }}</span>
                <span class="text-xs font-bold bg-amber-50 text-amber-600 px-2.5 py-1 rounded-md">★ {{ tour.rating }}</span>
              </div>
              <h3 class="text-xl font-extrabold text-dark mt-1">{{ tour.hotel }}</h3>
              <p class="text-stone-500 text-xs mt-1">{{ tour.description }}</p>
            </div>

            <div class="flex items-center justify-between mt-4 pt-3 border-t border-stone-100">
              <div>
                <span class="text-xs text-stone-400 font-semibold block">{{ tour.nights }} ночей • {{ tour.board }}</span>
                <span class="text-xl font-black text-dark">{{ tour.price.toLocaleString() }} ₽</span>
              </div>
              <router-link :to="`/tour/${tour.id}`" class="bg-coral-500 hover:bg-coral-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-coral-500/20">
                Забронировать
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>