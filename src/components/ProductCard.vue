<template>
  <div class="product-card">
    <img 
      :src="product.image || 'https://via.placeholder.com/300x200?text=Grabado+L%C3%A1ser'" 
      :alt="product.title" 
      class="product-image"
    />
    <div class="product-info">
      <h3>{{ product.title }}</h3>
      <p class="material" v-if="product.material">Material: {{ product.material }}</p>
      <p class="price">${{ product.price.toLocaleString("es-CL") }} CLP</p>
      <button @click="addToCart(product)" class="btn-add">
        Agregar al Pedido
      </button>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
import { useStore } from 'vuex'

defineProps({
  product: {
    type: Object,
    required: true
  }
})

const store = useStore()

const addToCart = (product) => {
  store.dispatch('addToCart', product)
}
</script>

<style scoped>
.product-card {
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding: 16px;
  margin: 12px;
  width: 220px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
.product-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 6px;
}
.product-material {
  font-size: 0.9em;
  color: #666;
}
.product-price {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.1em;
}
.btn-add {
  background-color: #8e44ad;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-add:hover {
  background-color: #71368a;
}
</style>