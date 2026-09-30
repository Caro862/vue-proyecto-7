# Vue Product Showcase - Estudio de Grabado Láser

Aplicación desarrollada con *Vue 3, **Vuex 4* y *Vue CLI* para la exhibición interactiva de productos de grabado en madera, acrílico y metal.

## Características
- *Componentes Modulares*: Arquitectura dividida en <Header>, <Footer>, <ProductList> y <ProductCard>.
- *Estado Global con Vuex*: Gestión centralizada de catálogo, estados de carga/error y filtro por categorías.
- *Consumo Asíncrono de API*: Manejo dinámico de productos con soporte para estados de Carga (loading) y Error (error).
- *Localización Chilena*: Precios formateados en Pesos Chilenos (CLP) con toLocaleString('es-CL').
- *Pruebas Automatizadas*: Cobertura de pruebas unitarias con Jest y pruebas E2E con Cypress.

## Tecnologías Utilizadas
- Vue 3 (Composition API / <script setup>)
- Vue CLI & Webpack
- Vuex 4
- Axios
- Jest & Vue Test Utils
- Cypress

## Instalación y Configuración

1. *Instalar dependencias:*
 
   `npm install`

2. Iniciar servidor de desarrollo

    `npm run serve`

3. Ejecutar pruebas unitarias (jest)

    `npm run test:e2e`

###### Siguiendo la recomendacion del profesor se opto por la sintaxis <script setup> mateniendo legibilidad y rendimiento. Se centralizo en Vuex para garantizar la consistencia de datos entre los componentes independientes #####