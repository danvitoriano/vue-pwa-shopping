<template>
  <div class="product">
    <div class="product-image">
      <img :src="selectedImage" title="imagem de meias" />
    </div>

    <div class="product-info">
      <h1>Fiap Mi Band</h1>
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

      <div
        class="variant-container"
        v-for="(variant, index) in variants"
        :key="variant.variantId"
        v-on:mouseover="setImage(index)"
        :class="{ selectedBox: index === selectedVariant }"
      >
        <div
          class="color-box"
          :style="{ backgroundColor: variant.variantColor }"
        />
        <p>{{ variant.description }}</p>
      </div>

      <button
        :disabled="!inStock"
        :class="{ disabledButton: !inStock }"
        v-on:click="addToCart"
      >
        Adicionar ao carrinho
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
export default {
  name: "product",
  data() {
    return {
      product: "Meias Coloridas",
      brand: "Fiap",
      inStock: false,
      selectedVariant: 0,
      selectedImage:
        "https://cdn.shopify.com/s/files/1/0405/6891/4073/products/m5_Preto_1080x.jpg?v=1592361518",
      shipping: "Grátis",
      reviews: [],
      alt: "imagem de meias",
      details: ["2 películas protetoras", "Pulseira adicional"],
      variants: [
        {
          variantId: 2234,
          description: "Sem pulseira adicional",
          variantImage:
            "https://cdn.shopify.com/s/files/1/0405/6891/4073/products/m5_Preto_1080x.jpg?v=1592361518",
          variantQuantity: 10,
          inStock: true,
        },
        {
          variantId: 2234,
          description: "Pulseira vermelha",
          variantColor: "red",
          variantImage:
            "https://cdn.shopify.com/s/files/1/0405/6891/4073/products/m5_vermelho_1080x.jpg?v=1592361518",
          variantQuantity: 10,
          inStock: true,
        },
        {
          variantId: 2235,
          description: "Pulseira azul",
          variantColor: "blue",
          variantImage:
            "https://cdn.shopify.com/s/files/1/0405/6891/4073/products/m5_Azul_1080x.jpg?v=1592361518",
          variantQuantity: 0,
          inStock: true,
        },
        {
          variantId: 2235,
          description: "Pulseira cinza",
          variantColor: "gray",
          variantImage:
            "https://cdn.shopify.com/s/files/1/0405/6891/4073/products/m5_cinza_1080x.jpg?v=1592361518",
          variantQuantity: 0,
        },
      ],
    };
  },
  methods: {
    addToCart: function() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].variantId);
    },
    setImage: function(index) {
      this.selectedVariant = index;
      this.selectedImage = this.variants[this.selectedVariant].variantImage;
    },
  },
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

.variant-container {
  padding: 0 15px;
  display: flex;
  align-items: "center";
}

.variant-container > p {
  margin-left: 15px;
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
