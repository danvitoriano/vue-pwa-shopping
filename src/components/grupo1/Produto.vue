<template>
  <div class="container">
    <h1>Produto em Destaque</h1>
    <p>Informações sobre o Produto</p>
    <p>
      Produto: <strong> {{ product }} </strong>
    </p>
    <p>
      Quantidade: <strong> {{ getQte }} </strong>
      Cor: <strong> {{ getColor }} </strong>
    </p>
    <p>
      Produto: <strong> {{ product }} </strong>
    </p>
    <!-- <button @click="alterarNome">Alterar Nome</button> -->
    <hr />
    <div class="componentes">
      <ProdutoInfo :product="product" :brand="brand" />
      <Carousel :variants="variants" @change="SettingQteAndColor"/>
      <!-- <app-usuario-editar :idade="idade" /> -->
    </div>
  </div>
</template>

<script>
import ProdutoInfo from "./ProdutoInfo";
import Carousel from "../../components/grupo1/WatchCarousel.vue";

export default {
  components: { ProdutoInfo, Carousel },
  data() {
    return {
      product: "Smart Watch",
      brand: "Fiap",
      selectedVariant: 0,
      selectedImage: require("../../assets/AppleWatchGrupoDeme02.jpeg"),
      shipping: "Grátis",
      buttonState: "active",
      reviews: [],
      alt: "imagem de relógios",
      details: ["Titanium", "Pulseira esportiva", "Gender-neutral"],
      variants: [
        {
          variantId: 2266,
          variantColor: "Black",
          variantImage: "AppleWatchGrupoDeme02.jpeg",
          variantQuantity: 2000,
        },
        {
          variantId: 2267,
          variantColor: "gray",
          variantImage: "AppleWatchGrupoDeme01.jpeg",
          variantQuantity: 10000,
        },
      ],
    };
  },
  computed: {
    getColor() {
      return this.variants[this.selectedVariant].variantColor;
    },
    getQte() {
      return this.variants[this.selectedVariant].variantQuantity;
    }

  },
  methods: {
    SettingQteAndColor(data) {
      this.selectedVariant = data;
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}
</style>
