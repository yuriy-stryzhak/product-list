import { createStore } from 'vuex'

const store = createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'Product 1',
        image: 'https://via.placeholder.com/150',
        price: 10,
        length: 10,
        width: 10,
        category: 'Category1'
      },
      {
        id: 2,
        name: 'Product 2',
        image: 'https://via.placeholder.com/150',
        price: 20,
        length: 20,
        width: 20,
        category: 'Category2'
      },
      {
        id: 3,
        name: 'Product 3',
        image: 'https://via.placeholder.com/150',
        price: 30,
        length: 30,
        width: 30,
        category: 'Category1'
      },
      {
        id: 4,
        name: 'Product 4',
        image: 'https://via.placeholder.com/150',
        price: 40,
        length: 40,
        width: 40,
        category: 'Category2'
      },
      {
        id: 5,
        name: 'Product 5',
        image: 'https://via.placeholder.com/150',
        price: 10,
        length: 10,
        width: 10,
        category: 'Category1'
      },
      {
        id: 6,
        name: 'Product 6',
        image: 'https://via.placeholder.com/150',
        price: 20,
        length: 20,
        width: 20,
        category: 'Category2'
      },
      {
        id: 7,
        name: 'Product 7',
        image: 'https://via.placeholder.com/150',
        price: 30,
        length: 30,
        width: 30,
        category: 'Category1'
      },
      {
        id: 8,
        name: 'Product 8',
        image: 'https://via.placeholder.com/150',
        price: 40,
        length: 40,
        width: 40,
        category: 'Category2'
      }
    ],
    filters: {
        category: '',
        price: '',
        length: '',
        width: '',
    }
  },
  mutations: {
    setCategory(state, category) {
      state.filters.category = category
    },
    setPrice(state, price) {
      state.filters.price = price
    },
    setLength(state, length) {
      state.filters.length = length
    },
    setWidth(state, width) {
      state.filters.width = width
    },
  },
  getters: {
    filteredProducts: (state) => {
      let products = state.products

        // console.log(state.filters.category.target.value);

      if (state.filters.category && state.filters.category.target.value !== '') {
          products = products.filter((product) => product.category === state.filters.category.target.value)
      }

      if (state.filters.price && state.filters.price.target.value !== '') {
        products = products.filter((product) => product.price <= state.filters.price.target.value)
      }

      if (state.filters.length && state.filters.length.target.value !== '') {
        products = products.filter((product) => product.length <= state.filters.length.target.value)
      }

      if (state.filters.width && state.filters.width.target.value !== '') {
        products = products.filter((product) => product.width <= state.filters.width.target.value)
      }

      return products
    },
  },
})

export default store