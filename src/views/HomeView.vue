<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { TOURS_DATA } from '../data/tours'

const router = useRouter()
const tours = ref(TOURS_DATA)

const searchForm = ref({
  country: 'all',
  nights: '7',
  board: 'any'
})

const handleSearch = () => {
  router.push({
    path: '/search',
    query: searchForm.value
  })
}
</script>

<template>
  <div class="w-full">
    <!-- Hero Секция -->
    <section class="bg-gradient-to-b from-orange-50/60 to-amber-50/20 py-12 px-4 sm:px-6">
      <div class="max-w-5xl mx-auto text-center">
        <span class="inline-block bg-coral-500/10 text-coral-500 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-3">
          Турагентство ЯнаМОРЕ • г. Омск
        </span>
        <h1 class="text-3xl sm:text-5xl font-black text-stone-900 mb-3 leading-tight">
          Ваш идеальный отдых <br />
          <span class="text-coral-500">с вылетом из Омска</span>
        </h1>
        <p class="text-stone-600 text-sm sm:text-base max-w-xl mx-auto mb-8 font-medium">
          Подбираем туры по лучшим ценам, берем на себя все заботы по бронированию и остаемся на связи 24/7.
        </p>

        <!-- Модуль Поиска (Аккуратная компактная плашка) -->
        <div class="bg-white p-4 sm:p-5 rounded-2xl shadow-lg border border-stone-200/80 max-w-3xl mx-auto text-left">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
            <div>
              <label class="block text-[11px] font-extrabold text-stone-400 uppercase mb-1">Направление</label>
              <select v-model="searchForm.country" class="w-full bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-xs font-bold text-stone-800 focus:border-coral-500 focus:outline-none">
                <option value="all">Все направления</option>
                <option value="egypt">Египет 🇪🇬</option>
                <option value="uae">ОАЭ 🇦🇪</option>
                <option value="thailand">Таиланд 🇹🇭</option>
                <option value="turkey">Турция 🇹🇷</option>
              </select>
            </div>
            <div>
              <label class="block text-[11px] font-extrabold text-stone-400 uppercase mb-1">Ночей</label>
              <select v-model="searchForm.nights" class="w-full bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-xs font-bold text-stone-800 focus:border-coral-500 focus:outline-none">
                <option value="6">6 - 7 ночей</option>
                <option value="9">8 - 10 ночей</option>
                <option value="12">11 - 14 ночей</option>
              </select>
            </div>
            <div>
              <label class="block text-[11px] font-extrabold text-stone-400 uppercase mb-1">Питание</label>
              <select v-model="searchForm.board" class="w-full bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-xs font-bold text-stone-800 focus:border-coral-500 focus:outline-none">
                <option value="any">Любое питание</option>
                <option value="AI">Всё включено (AI)</option>
                <option value="BB">Завтраки (BB)</option>
              </select>
            </div>
          </div>

          <!-- Аккуратная кнопка поиска -->
          <button 
            type="button"
            @click="handleSearch" 
            class="w-full bg-coral-500 hover:bg-coral-600 active:scale-[0.99] text-white font-extrabold py-3 px-6 rounded-xl shadow-md shadow-coral-500/20 transition-all text-sm flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>🔍</span>
            <span>Найти подходящие туры</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Горящие предложения -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div class="flex justify-between items-end mb-6">
        <div>
          <h2 class="text-2xl sm:text-3xl font-black text-stone-900">Горящие предложения</h2>
          <p class="text-stone-500 text-xs sm:text-sm mt-0.5">Лучшие варианты с вылетом из Омска</p>
        </div>
        <router-link to="/search" class="text-coral-500 font-extrabold text-xs sm:text-sm hover:underline">
          Смотреть все →
        </router-link>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div 
          v-for="tour in tours" 
          :key="tour.id"
          class="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
        >
          <div>
            <div class="relative h-40">
              <img :src="tour.image" :alt="tour.title" class="w-full h-full object-cover" />
              <span class="absolute top-2.5 left-2.5 bg-coral-500 text-white text-[10px] font-black px-2 py-0.5 rounded shadow">
                {{ tour.badge }}
              </span>
            </div>
            <div class="p-3.5">
              <div class="text-[11px] font-bold text-amber-500 mb-0.5">
                ★ {{ tour.rating }} ({{ tour.reviewsCount }})
              </div>
              <h3 class="font-extrabold text-stone-900 text-sm leading-snug line-clamp-1">{{ tour.hotel }}</h3>
              <p class="text-stone-500 text-xs mt-0.5">{{ tour.title }}</p>
              <p class="text-stone-400 text-[11px] mt-1">{{ tour.nights }} ночей • {{ tour.board }}</p>
            </div>
          </div>

          <div class="p-3.5 pt-0 border-t border-stone-100 mt-2 flex items-center justify-between">
            <div>
              <span class="text-[9px] text-stone-400 uppercase font-bold block">за двоих</span>
              <span class="text-base font-black text-stone-900">{{ tour.price.toLocaleString() }} ₽</span>
            </div>
            <router-link 
              :to="`/tour/${tour.id}`" 
              class="bg-stone-900 hover:bg-black text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
            >
              Подробнее
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>