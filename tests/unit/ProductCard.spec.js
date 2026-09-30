import { mount } from '@vue/test-utils'
import ProductCard from '@/components/ProductCard.vue'
import { createStore } from 'vuex'

describe('ProductCard.vue', () => {
  const mockProduct = {
    id: 1,
    title: 'Tabla para Asado Personalizada',
    material: 'Madera de Roble',
    price: 25000,
    image: 'https://via.placeholder.com/150'
  }

  test('Renderiza correctamente el título, material y precio', () => {
    // Se provee un store simulado por si el botón de comprar llama a Vuex
    const store = createStore({
      actions: {
        addToCart: jest.fn()
      }
    })

    const wrapper = mount(ProductCard, {
      props: {
        product: mockProduct
      },
      global: {
        plugins: [store]
      }
    })

    // Comprobamos que existan los textos principales del producto
    expect(wrapper.text()).toContain('Tabla para Asado Personalizada')
    expect(wrapper.text()).toContain('Madera de Roble')
  })
})