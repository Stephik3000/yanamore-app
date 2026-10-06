<template>
  <div class="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col justify-between font-sans">
    
    <!-- Хедер сайта -->
    <header class="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/80 py-3 px-4 sm:px-6">
      <div class="max-w-6xl mx-auto flex justify-between items-center">
        
        <!-- Логотип -->
        <router-link to="/" class="flex flex-col leading-none">
          <span class="text-2xl font-black tracking-tight text-coral-500">
            Яна<span class="text-stone-900">МОРЕ</span>
          </span>
          <span class="text-[8px] font-extrabold tracking-[0.25em] text-coral-500 uppercase mt-0.5">
            турагентство
          </span>
        </router-link>

        <!-- Главное меню (с подсвечиванием активной кнопки) -->
        <nav class="hidden md:flex items-center space-x-1 bg-stone-200/60 p-1 rounded-xl border border-stone-200">
          <router-link 
            to="/" 
            exact-active-class="!bg-coral-500 !text-white !font-black shadow-sm"
            class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:text-stone-900 transition-all"
          >
            Главная
          </router-link>

          <router-link 
            to="/search" 
            exact-active-class="!bg-coral-500 !text-white !font-black shadow-sm"
            class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:text-stone-900 transition-all"
          >
            Поиск туров
          </router-link>

          <router-link 
            to="/about" 
            exact-active-class="!bg-coral-500 !text-white !font-black shadow-sm"
            class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:text-stone-900 transition-all"
          >
            О нас
          </router-link>

          <router-link 
            to="/reviews" 
            exact-active-class="!bg-coral-500 !text-white !font-black shadow-sm"
            class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:text-stone-900 transition-all"
          >
            Отзывы
          </router-link>

          <router-link 
            to="/contacts" 
            exact-active-class="!bg-coral-500 !text-white !font-black shadow-sm"
            class="px-3.5 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:text-stone-900 transition-all"
          >
            Контакты
          </router-link>
        </nav>

        <!-- Контакты в шапке -->
        <div class="flex items-center space-x-3">
          <a href="tel:+79957714824" class="font-extrabold text-xs text-stone-900 hover:text-coral-500 transition-colors hidden sm:block">
            +7 (995) 771-48-24
          </a>
          <a href="https://wa.me/79957714824" target="_blank" class="bg-[#25D366] text-white px-3 py-1.5 rounded-lg font-bold text-xs shadow-sm hover:opacity-90 transition-all">
            WhatsApp
          </a>
        </div>
      </div>
    </header>

    <!-- Контейнер вывода текущей страницы -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Футер -->
    <footer class="bg-stone-900 text-stone-400 py-8 px-4 sm:px-6 mt-12 border-t border-stone-800 text-xs">
      <div class="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <span class="text-white font-black text-base">ЯнаМОРЕ</span>
          <p class="text-[11px] text-stone-500">г. Омск, пр. Карла Маркса, 29А</p>
        </div>
        <div class="flex space-x-4 text-[11px] font-semibold">
          <router-link to="/" class="hover:text-white">Главная</router-link>
          <router-link to="/search" class="hover:text-white">Поиск туров</router-link>
          <router-link to="/about" class="hover:text-white">О нас</router-link>
          <router-link to="/contacts" class="hover:text-white">Контакты</router-link>
        </div>
        <p class="text-[11px] text-stone-500">© {{ new Date().getFullYear() }} ЯнаМОРЕ</p>
      </div>
    </footer>

  </div>
</template>