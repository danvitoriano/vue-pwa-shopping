<template>
 <div class="product">

    <div class="product-image">
      <img class="img-watch"
        src="https://i.gadgets360cdn.com/products/large/realme-watch-670x800-1590388807.jpg"
        title="imagem de Relógios"
      />
    </div>

    <div class="product-info">
      <h1>Fiap Smart Watch</h1>
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
        :style="{backgroundColor: variant.variantColor, color:'White' }"
        v-for="variant in variants"
        :key="variant.variantId"
      >
        <p @mouseover="mouseOver">{{variant.variantColor}}</p>
      </div>

      <button v-show="{buttonState}" v-on:click="addToCart">Adicionar ao carrinho</button>
      
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
   name: "watch",
   data() {
    return {
      product: "Smart Watch",
      brand: "Fiap",
      inStock: false,
      selectedVariant: 0,
      shipping: "Grátis",
      buttonState: "active",
      reviews: [],
      alt: "imagem de relógios",
      details: ["Titanium", "Pulseira esportiva", "Gender-neutral"],
      variants: [
        {
          variantId: 2266,
          variantColor: "Black",
          variantImage:
            "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
          variantQuantity: 10
        },
        {
          variantId: 2267,
          variantColor: "gray",
          variantImage:
            "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
          variantQuantity: 0
        }
      ]
    };
  },
  methods: {
      addToCart: function() {
          console.log("ddd")
          this.$emit("add-to-cart-with-watch", this.variants[this.selectedVariant].variantId)
      },
      mouseOver: function(){
            this.buttonState = "";   
      }
  }
}
</script>

<style scoped>
.img-watch {
    filter: blur(5px);
}
</style>