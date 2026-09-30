import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      { 
        id: 1, 
        title: 'Tabla para Asado Personalizada', 
        material: 'Madera de Roble', 
        price: 25000, 
        image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=600&auto=format&fit=crop' 
      },
      { 
        id: 2, 
        title: 'Gobernador / Llavero Acrílico', 
        material: 'Acrílico Espejado', 
        price: 8000, 
        image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=600&auto=format&fit=crop' 
      },
      { 
        id: 3, 
        title: 'Termo Metálico Grabado', 
        material: 'Acero Inoxidable', 
        price: 20000, 
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=600&auto=format&fit=crop' 
      },
      { 
        id: 4, 
        title: 'Caja de Vino con Logo', 
        material: 'Madera MDF / Terciopelo', 
        price: 18, 
        image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop' 
      }
    ],
    cart: []
  },
  getters: {
    cartTotal(state) {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    cartCount(state) {
      return state.cart.reduce((total, item) => total + item.quantity, 0)
    }
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const item = state.cart.find(p => p.id === product.id)
      if (item) {
        item.quantity++
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId)
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product)
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId)
    }
  }
})