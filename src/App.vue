<template>
  <div id="app">
    <header class="main-header">
      <h1>Estudio de Grabado Láser</h1>
      <div class="cart-summary">
        🛒 Pedido: {{ cartCount }} items (${{ cartTotal }})
      </div>
    </header>

    <main>
      <ProductList />
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ProductList from './components/ProductList.vue'

const store = useStore()

const cartCount = computed(() => store.getters.cartCount)
const cartTotal = computed(() => store.getters.cartTotal)
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
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