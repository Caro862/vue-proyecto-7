<template>
  <header class="main-header">
    <div class="logo">
      <h1>Estudio de Grabado Láser</h1>
    </div>
    <div class="cart-summary">
      🛒 Pedido: {{ cartCount }} items (${{ cartTotal.toLocaleString('es-CL') }} CLP)
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const cartCount = computed(() => store.getters.cartCount)
const cartTotal = computed(() => store.getters.cartTotal)
</script>

<style scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #2c3e50;
  color: white;
}
.cart-summary {
  font-size: 1.1em;
  background: #34495e;
  padding: 8px 15px;
  border-radius: 20px;
}
</style>