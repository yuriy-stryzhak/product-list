<template>

  
  <div class="product">
    <router-link class="button" :to="{ name: 'Home' }">Back to Products List</router-link>
    
    <div class="product__details">
      <div class="product__details-img">
        <img :src="product.image" :alt="product.name" />
      </div>
      <h3 class="product__details-title">{{ product.name }}</h3>
      <p>Price: {{ product.price }}</p>
      <p>Length: {{ product.length }}</p>
      <p>Width: {{ product.width }}</p>
      <p>Category: {{ product.category }}</p>
    </div>

  </div>
</template>

<script>

export default {


  computed: {
    product() {
      return this.$store.state.products.find((product) => product.id === parseInt(this.$route.params.id))
    },
  },
  name: 'AppProduct',
}

</script>

<style>

.button {
  margin-bottom: 50px;
  cursor: pointer;
  font-size: inherit;
  background-color: aquamarine;
  border: 1px solid #000;
  padding: 10px 30px;
  transition: all 0.25s;
}

.button:hover {
  background-color: rgb(127, 255, 155);
}

.product {
  margin-top: 50px;
}

.product__details-img {
  width: 150px;
  height: 150px;
  background-color: #dddddd;
  margin-bottom: 15px;
}

.product__details-title {
  margin-bottom: 15px;
}

.product p {
  margin-bottom: 5px;
}

</style>