<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { TOURS_DATA } from '../data/tours'

const route = useRoute()
const tourId = Number(route.params.id)
const tour = computed(() => TOURS_DATA.find(t => t.id === tourId) || TOURS_DATA[0])

const userName = ref('')
const userPhone = ref('')
const isBooked = ref(false)

const sendRequest = () => {
  if (!userName.value || !userPhone.value) return
  isBooked.value = true
}
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-10">
    <router-link to="/search" class="text-stone-400 hover:text-dark font-bold text-sm mb-6 inline-block">
      ← Назад к каталогу
    </router-link>

    <div class="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-lg">
      <div class="relative h-80 sm:h-96">
        <img :src="tour.image" :alt="tour.hotel" class="w-full h-full object-cover" />
        <span class="absolute top-4 left-4 bg-coral-500 text-white font-black text-sm px-4 py-1.5 rounded-xl shadow">
          {{ tour.badge }}
        </span>
      </div>

      <div class="p-6 sm:p-10">
        <div class="flex flex-wrap justify-between items-start gap-4 mb-4">
          <div>
            <span class="text-sm font-bold text-coral-500 uppercase tracking-widest">{{ tour.countryCode }} {{ tour.title }}</span>
            <h1 class="text-3xl font-black text-dark mt-1">{{ tour.hotel }}</h1>
            <p class="text-stone-400 text-sm mt-1">Вылет из: {{ tour.flyFrom }}</p>
          </div>
          <div class="text-right">
            <span class="text-xs text-stone-400 font-bold uppercase block">Стоимость за двоих</span>
            <span class="text-3xl font-black text-dark">{{ tour.price.toLocaleString() }} ₽</span>
          </div>
        </div>

        <p class="text-stone-600 text-base leading-relaxed mb-6">{{ tour.description }}</p>

        <!-- Особенности -->
        <div class="mb-8">
          <h3 class="font-extrabold text-dark mb-3">Особенности отеля:</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="feat in tour.features" :key="feat" class="bg-stone-100 text-stone-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-stone-200">
              ✓ {{ feat }}
            </span>
          </div>
        </div>

        <!-- Форма бронирования -->
        <div class="bg-stone-50 p-6 rounded-2xl border border-stone-200">
          <h3 class="text-xl font-black text-dark mb-2">Оставить заявку на этот тур</h3>
          <p class="text-stone-500 text-sm mb-4">Менеджер ЯнаМОРЕ свяжется с вами в течение 10 минут и уточнит актуальное наличие мест.</p>

          <div v-if="isBooked" class="bg-emerald-50 text-emerald-800 p-4 rounded-xl font-bold border border-emerald-200">
            ✓ Спасибо, {{ userName }}! Заявка отправлена. Ожидайте звонка от нашего менеджера!
          </div>

          <form v-else @submit.prevent="sendRequest" class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input v-model="userName" required placeholder="Ваше имя" class="bg-white border border-stone-200 rounded-xl p-3.5 text-sm font-semibold focus:border-coral-500 focus:outline-none" />
            <input v-model="userPhone" required type="tel" placeholder="+7 (900) 000-00-00" class="bg-white border border-stone-200 rounded-xl p-3.5 text-sm font-semibold focus:border-coral-500 focus:outline-none" />
            <button type="submit" class="bg-coral-500 hover:bg-coral-600 text-white font-extrabold p-3.5 rounded-xl shadow-md shadow-coral-500/20 transition-all">
              Забронировать тур
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>