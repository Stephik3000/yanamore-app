<template>
  <div class="max-w-5xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-black text-dark mb-4">Контакты</h1>
    <p class="text-stone-500 text-base mb-8">Свяжитесь с нами любым удобным способом или приходите в офис!</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
        <div>
          <span class="text-xs font-bold text-stone-400 uppercase block mb-1">Адрес офиса</span>
          <p class="text-lg font-extrabold text-dark">г. Омск, пр. Карла Маркса, 29А</p>
          <p class="text-stone-500 text-sm">1 этаж, левое крыло</p>
        </div>

        <div>
          <span class="text-xs font-bold text-stone-400 uppercase block mb-1">Телефон</span>
          <a href="tel:+79957714824" class="text-xl font-black text-coral-500 hover:underline">
            +7 (995) 771-48-24
          </a>
        </div>

        <div>
          <span class="text-xs font-bold text-stone-400 uppercase block mb-1">Быстрая связь</span>
          <div class="flex space-x-3 mt-2">
            <a href="https://wa.me/79957714824" target="_blank" class="bg-[#25D366] text-white px-4 py-2.5 rounded-xl font-extrabold text-sm shadow">
              WhatsApp
            </a>
            <a href="https://t.me/" target="_blank" class="bg-[#229ED9] text-white px-4 py-2.5 rounded-xl font-extrabold text-sm shadow">
              Telegram
            </a>
          </div>
        </div>
      </div>

      <div class="bg-stone-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between">
        <div>
          <h3 class="text-2xl font-black mb-2">Режим работы</h3>
          <p class="text-stone-400 text-sm mb-6">Ждем вас в гости или на связи онлайн:</p>
          <ul class="space-y-3 text-sm">
            <li class="flex justify-between border-b border-stone-800 pb-2">
              <span>Пн — Пт:</span> <span class="font-bold text-white">10:00 — 19:00</span>
            </li>
            <li class="flex justify-between border-b border-stone-800 pb-2">
              <span>Суббота:</span> <span class="font-bold text-white">11:00 — 16:00</span>
            </li>
            <li class="flex justify-between">
              <span>Воскресенье:</span> <span class="font-bold text-coral-400">По договоренности</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>