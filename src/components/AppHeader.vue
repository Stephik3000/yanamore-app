<template>
  <header class="header">
    <div class="container header-inner">
      <router-link to="/" class="logo-box">
        <span class="logo-title">Яна<span class="highlight">МОРЕ</span></span>
        <span class="logo-sub">ТУРАГЕНТСТВО</span>
      </router-link>

      <div class="header-actions">
        <a href="tel:+79000000000" class="phone">+7 (900) 000-00-00</a>
        <a href="https://wa.me/79000000000" target="_blank" class="btn-whatsapp">
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 16px 0;
  background: var(--bg-cream);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 100;
}
.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo-box {
  text-decoration: none;
  display: flex;
  flex-direction: column;
}
.logo-title {
  font-size: 1.8rem;
  font-weight: 900;
  color: var(--primary-coral);
  line-height: 1;
  letter-spacing: 0.5px;
}
.logo-sub {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 3px;
  color: var(--primary-coral);
  margin-top: 2px;
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}
.phone {
  color: var(--text-dark);
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
}
.btn-whatsapp {
  background-color: var(--whatsapp-green);
  color: white;
  padding: 10px 18px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: opacity 0.2s;
}
.btn-whatsapp:hover {
  opacity: 0.9;
}
@media (max-width: 600px) {
  .phone { display: none; }
}
</style>