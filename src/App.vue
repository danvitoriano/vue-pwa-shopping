<template>
  <div id="app">
    <div class="cart">
      <p>Carrinho: {{cart.length}}</p>
    </div>
    <product :premium="premium" v-on:add-to-cart="updateCart"></product>
    <my-list :premium="premium" v-on:add-to-cart="updateCart"></my-list>
    <grupo4 :premium="premium" v-on:add-to-cart="updateCart"></grupo4>
    <watch :premium="premium" v-on:add-to-cart-with-watch="updateCart"></watch>
  </div>
</template>

<script>
import Product from './components/Product.vue'
import myList from './components/myList.vue'
import Grupo4 from './components/Grupo4.vue'
import Watch from './components/Watch.vue'
export default {
  name: "App",
  data() {
    return {
      premium: false,
      cart: []
    }
  },
  components: {
    product: Product,
    myList: myList,
    grupo4: Grupo4,
    watch: Watch
  },
    methods: {
    updateCart(id){
      this.cart.push(id)
    }

  }

};
</script>

<style>
body {
  font-family: tahoma;
  color: #282828;
  margin: 0px;
}

.nav-bar {
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  height: 60px;
  margin-bottom: 15px;
}

.product {
  display: flex;
}

img {
  border: 1px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  box-shadow: 0px 0.5px 1px #d8d8d8;
}

.product-image {
  flex-basis: 700px;
}

.product-info {
  margin-top: 10px;
  flex-basis: 500px;
}

.color-box {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}

.cart {
  margin-right: 25px;
  float: right;
  border: 1px solid #d8d8d8;
  padding: 5px 20px;
}

button {
  margin-top: 30px;
  border: none;
  background-color: #1e95ea;
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;
}

.disabledButton {
  background-color: #d8d8d8;
}

.review-form {
  width: 30%;
  padding: 20px;
  border: 1px solid #d8d8d8;
}

input {
  width: 100%;
  height: 25px;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  height: 60px;
}
</style>
