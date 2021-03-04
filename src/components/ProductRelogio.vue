<template>
  <div class="product">
    <div class="product-image">
      <!-- muito bom a troca de imagem com property bind! mas temos um jeito melhor! -->
      <img
        v-bind:src="variants[selectedVariant].variantImage"
        title="imagem de relógios"
      />
    </div>

    <div class="product-info">
      <h1>FIAP Relógios de Luxo</h1>
      <p v-if="inStock">Em estoque</p>
      <p v-else>Indisponível</p>

      <p>Entrega: {{ shipping }}</p>
      <h3>Detalhes</h3>

      <ul>
        <li v-for="detail in details" :key="detail">
          {{ detail }}
        </li>
      </ul>

      <h3>Cores</h3>

      <!-- o setChange dispara uma função que muda a variant ao clicar! -->
      <div
        class="color-box"
        :style="{ backgroundColor: variant.variantColor }"
        v-for="(variant, index) in variants"
        :key="variant.variantId"
        v-on:click="setChange(index)"
      >
        <p>{{ variant.variantColor }}</p>
      </div>

      <button v-on:click="addToCart">Adicionar ao carrinho</button>
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
export default {
  name: "product",
  data() {
    return {
      product: "Relógios de Luxo",
      brand: "Fiap",
      inStock: false,
      selectedVariant: 0,
      shipping: "Grátis",
      reviews: [],
      alt: "imagem de relógios",
      details: ["70% gold", "30% silver", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "silver",
          variantImage:
            "https://content.rolex.com/dam/2020/showcase/m128239-0005.jpg",
          variantQuantity: 10
        },
        {
          variantId: 2235,
          variantColor: "black",
          variantImage:
            "https://content.rolex.com/dam/2020/showcase/m50509-0016.jpg",
          variantQuantity: 0
        }
      ]
    };
  },
  methods: {
    addToCart: function() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].variantId);
    },
    setChange(index) {
      this.selectedVariant = index;
      this.inStock = this.variants[this.selectedVariant].variantQuantity > 0; // boa tentativa! podemos fazer melhor!
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
  border: 1px solid #e6a4a4;
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
  border: 1px solid #994949;
  padding: 5px 20px;
}

button {
  margin-top: 30px;
  border: none;
  background-color: #414141;
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;
  border-radius: 10px;
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
