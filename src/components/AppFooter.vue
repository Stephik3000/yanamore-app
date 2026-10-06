<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div>
        <p class="brand">ЯнаМОРЕ Турагентство</p>
        <p class="city">г. Омск</p>
      </div>
      <p class="copy">© {{ new Date().getFullYear() }}. Все права защищены.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--text-dark);
  color: #888;
  padding: 32px 0;
  margin-top: 60px;
  font-size: 0.85rem;
}
.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.brand {
  color: white;
  font-weight: 700;
  font-size: 1rem;
}
</style>