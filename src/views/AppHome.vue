<template>
  <section class="products">
    <div class="products__filter">

      <div class="products__filter-item">
        <label for="category">Category:</label>
        <select id="category" v-model="category" @change="setCategory">
          <option value="">All</option>
          <option v-for="category in categories" :value="category" :key="category.id">{{ category }}</option>
        </select>
      </div>

      <div class="products__filter-item">
        <label for="price">Price:</label>
        <input
          type="number"
          id="price"
          v-model="price"
          @input="setPrice"
        />
      </div>

      <div class="products__filter-item">
        <label for="length">Length:</label>
        <input type="number" id="length" v-model="length" @input="setLength" />
      </div>

      <div class="products__filter-item">
        <label for="width">Width:</label>
        <input type="number" id="width" v-model="width" @input="setWidth" />
      </div>

    </div>

    <div class="products__list" v-if="filteredProducts.length">
      <div v-for="product in filteredProducts" :key="product.id">

        <router-link class="products__img" :to="{ name: 'Product', params: { id: product.id } }">
          <img :src="product.image" :alt="product.name" />
        </router-link>

        <router-link class="products__title" :to="{ name: 'Product', params: { id: product.id } }">
          <h3>{{ product.name }}</h3>
        </router-link>

        <p class="products__price">Price: {{ product.price }}</p>
      </div>
    </div>

    <div v-else>
      <p>No products found.</p>
    </div>

  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(['filteredProducts']),
    categories() {
      return [...new Set(this.products.map((product) => product.category))]
    },
  },
  data() {
    return {
      category: this.$store.state.filters.category,
      price: this.$store.state.filters.price,
      length: this.$store.state.filters.length,
      width: this.$store.state.filters.width,
    }
  },
  methods: {
    ...mapMutations(['setCategory', 'setPrice', 'setLength', 'setWidth']),
  },
  name: 'AppHome',
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>

a {
  text-decoration: none;
  display: inline-block;
}

.products {
  margin: 50px 0;
}

.products__filter {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 40px;
}

.products__filter-item {
  flex: 1;
}

.products__filter-item label {
  margin-bottom: 5px;
  display: inline-block;
}

.products__filter-item select,
.products__filter-item input
{
  width: 100%;
  height: 30px;
  font-size: inherit;
}

.products__list {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;
}

.products__img {
  width: 150px;
  height: 150px;
  background-color: #dddddd;
  margin-bottom: 15px;
}

.products__title {
  margin-bottom: 15px;
  color: rgb(100, 0, 193);
  transition: all 0.25s;
  border-bottom: 1px solid transparent;
}

.products__title:hover {
  border-color: rgb(100, 0, 193);
}

.products__price {
  font-size: 14px;
}

</style>