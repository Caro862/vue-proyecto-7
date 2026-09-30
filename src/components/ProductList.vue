<template>
  <div class="showcase-container">
    <h2>Catálogo de Productos y Grabado Láser</h2>
    <p class="subtitle">Diseños personalizados en madera, acrílico y metal</p>
    
    <div class="products-grid">
      <ProductCard 
        v-for="product in products" 
        :key="product.id" 
        :product="product" 
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ProductCard from './ProductCard.vue'

const store = useStore()
const products = computed(() => store.state.products)
</script>

<style scoped>
.showcase-container {
  padding: 20px;
  text-align: center;
}
.subtitle {
  color: #7f8c8d;
  margin-bottom: 25px;
}
.products-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>