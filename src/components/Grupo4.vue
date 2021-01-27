<template>
  <div class="product">

    <div class="product-image">
      <img
        :src="selectedImage"
        title="imagem de apple watch"
      />
    </div>

    <div class="product-info">
      <h1>Fiap Apple Watch</h1>
      <p v-if="inStock">Em estoque</p>
      <p v-else>Indisponível</p>

      <p>Entrega: {{ shipping }}</p>
      <h3>Detalhes</h3>

      <ul>
        <li v-for="detail in details" :key="detail">
            {{detail}}
        </li>
      </ul>

      <h3>Cores</h3>

      <div
        class="color-box"
        :style="{backgroundColor: variant.variantColor}"
        v-for="(variant, index) in variants"
        :key="variant.variantId"
        v-on:mouseover="setImage(index)"
        :class="{selectedBox: index === selectedVariant}">
        <p>{{variant.variantColor}}</p>
      </div>

      <cep-search v-if="inStock"></cep-search>

      <button 
        :disabled="!inStock"
        :class="{disabledButton: !inStock}"
        v-on:click="addToCart">Adicionar ao carrinho
      </button>
      
    </div>

    <div class="product-review">
      <h2>Reviews</h2>
      <p v-if="!reviews.length">There are no reviews yet.</p>
      <ul v-else>
        <li>
          <p>review.name</p>
          <p>Rating: review.rating</p>
          <p>review.review</p>
          <p>review.recommend</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CepSearch from './CepSearch.vue';
export default {
  name: "grupo4",
  data()
    {
    return {
      product: "Apple Watch",
      brand: "Fiap",
      inStock: true,
      selectedVariant: 0,
      selectedImage: require('../assets/apple_watch_01.jpg'),
      shipping: "Grátis",
      reviews: [],
      alt: "imagem de apple watch",
      details: ["bluetooth", "44mm", "GPS"],
      variants: [
        {
          variantId: 0,
          variantColor: "black",
          variantImage:
          "apple_watch_01.jpg",
          variantQuantity: 5
        },
        {
          variantId: 1,
          variantColor: "white",
          variantImage:
          "apple_watch_02.jpg",
          variantQuantity: 5
        },
        {
          variantId: 2,
          variantColor: "pink",
          variantImage:
          "apple_watch_03.jpg",
          variantQuantity: 10
        }
      ]
    };
  },
  components: {
      'cep-search': CepSearch,
  },
  methods: {
      addToCart: function() {
        this.$emit("add-to-cart", this.variants[this.selectedVariant].variantId)
      },
      setImage: function(index) {
        this.selectedVariant = index;
        this.selectedImage = require('../assets/' + this.variants[this.selectedVariant].variantImage)
      }
  }
};
</script>

<style scoped>
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
  border-radius: 5px;
}
.color-box:hover {
  border: 1px solid #000000;
  border-radius: 5px;
}
.selectedBox {
  border: 2px solid gray;
  border-radius: 5px;
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