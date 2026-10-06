<template>
  <div v-if="store.isModalOpen" class="modal-backdrop" @click.self="store.closeBooking">
    <div class="modal-box">
      <button class="btn-close" @click="store.closeBooking">✕</button>
      <h3>Быстрое бронирование</h3>
      <p v-if="store.selectedTourForBooking" class="tour-summary">
        {{ store.selectedTourForBooking.title }} — {{ store.selectedTourForBooking.hotel }}
      </p>

      <form @submit.prevent="submitForm" class="booking-form">
        <div class="field">
          <label>Ваше имя</label>
          <input type="text" v-model="form.name" required placeholder="Иван" />
        </div>
        <div class="field">
          <label>Телефон / WhatsApp</label>
          <input type="tel" v-model="form.phone" required placeholder="+7 (900) 000-00-00" />
        </div>
        <button type="submit" class="btn-submit">Отправить заявку</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useToursStore } from '../stores/toursStore';

const store = useToursStore();

const form = reactive({
  name: '',
  phone: ''
});

const submitForm = () => {
  alert(`Спасибо, ${form.name}! Менеджер свяжется с вами по номеру ${form.phone}.`);
  form.name = '';
  form.phone = '';
  store.closeBooking();
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
}
.modal-box {
  background: white;
  padding: 32px;
  border-radius: 20px;
  max-width: 440px;
  width: 100%;
  position: relative;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}
.btn-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
.modal-box h3 {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 8px;
}
.tour-summary {
  color: var(--primary-coral);
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 20px;
}
.booking-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.field label {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-muted);
}
.field input {
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
}
.btn-submit {
  background: var(--primary-coral);
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 8px;
}
</style>