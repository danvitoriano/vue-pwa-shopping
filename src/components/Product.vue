<template>
  <div class="product">
    <div class="product-image">
      <!-- image é uma computed properties ligada ao property bind de src -->
      <img :src="image" :title="alt" />
    </div>

    <div class="product-info">
      <!-- interpolacao da computed property title -->
      <h1>{{ title }}</h1> 
      <!-- diretivas condicionais v-if v-else -->
      <p v-if="inStock">Em estoque</p>
      <p v-else>Indisponível</p>
      <!-- shiiping tb é uma computed property -->
      <p>Entrega: {{shipping}}</p>
      <h3>Detalhes</h3>

      <ul>
        <!-- diretiva v-for para loops, percorrer listas -->
        <li v-for="detail in details" :key="detail">{{detail}}</li>
      </ul>

      <h3>Cores</h3>

      <!-- property bind de style  -->
      <!-- diretiva v-for com 2 parametros, o variant é o item da lista, o index recebe a posição do item na lista -->
      <!-- a propriedade key é obrigatória ao iterar listas no Vue -->
      <!-- o evento onmouseover dispara o método updateProduct passando o indice do item -->
      <div
        class="color-box"
        :style="{backgroundColor: variant.variantColor}"
        v-for="(variant, index) in variants"
        :key="variant.variantId"
        @mouseover="updateProduct(index)"
      >
        <p>{{variant.variantColor}}</p>
      </div>

      <!-- o click no botão chama o método addToCart -->
      <!-- a propriedade disabled de button virou dinamica e recebe uma computed property -->
      <!-- é possível transformar classe em propriedades dinamicas e receber computed properties booleanas -->
      <button
        @click="addToCart"
        :disabled="!inStock"
        :class="{disabledButton: !inStock}"
      >Adicionar ao carrinho</button>
    </div>
    <div>
      <h2>Reviews</h2>
      <!-- v-if só exibe mensagem se a lista de reviews estiver vazia -->
      <p v-if="!reviews.length">There are no reviews yet.</p>
      <!-- senão, percorre a lista e exibe os reviews com o v-for -->
      <ul v-else>
        <li v-for="(review, index) in reviews" :key="index">
          <p>{{ review.name }}</p>
          <p>Rating: {{ review.rating }}</p>
          <p>{{ review.review }}</p>
          <p>{{ review.recommend }}</p>
        </li>
      </ul>
    </div>
    <!-- inserção de um novo componente -->
    <!-- ao receber um evento chamado review-submitted, dispara o método addReview -->
    <product-review @review-submitted="addReview"></product-review>
  </div>
</template>

<script>
import ProductReview from "./ProductReview.vue";

export default {
  name: "product", // nome do componente
  components: { // declaração dos componentes importados
    "product-review": ProductReview
  },
  props: { // as props permitem q o componente receba propriedades externas e estas sejam usadas dentro dele
    premium: { // interfaces das propriedades
      type: Boolean, 
      required: true
    }
  },
  data() { // todos os tipos de propriedades, atributos, variaveis a serem manipuladas pelo componente
    return {
      product: "Meias Coloridas",
      brand: "Fiap",
      selectedVariant: 0,
      reviews: [], // receberá os reviews
      alt: "imagem de meias",
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage:
            "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
          variantQuantity: 10
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage:
            "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
          variantQuantity: 0
        }
      ]
    };
  },
  methods: { // funções javascript que provocarão alguma alteração
    addToCart: function() {
      // o $emit dispara um evento add-to-cart que poderá receber um método quando importado dentro de outro componente
      this.$emit("add-to-cart", this.variants[this.selectedVariant].variantId);
    },
    updateProduct(index) { // apenas alterao índice do item selecionado
      this.selectedVariant = index;
    },
    addReview(productReview) { // método que ao ser chamado adiciona o review recebido do componente importado
      this.reviews.push(productReview);
    }
  },
  computed: { // as computed properties são propriedades que sofrem alteração quando outras propriedades tem seus valores alterados, side effects, efeitos colaterais
    title() {
      return this.brand + " " + this.product; // une duas propriedades
    },
    image() {
      return this.variants[this.selectedVariant].variantImage; // retorna qual variante foi selecionada
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity; // retorna quantos item há no stock
    },
    shipping() {
      if (this.premium) { // se recebeu a propriedade premium como true, o frete é grátis
        return "Grátis";
      }
      return "R$ 2.99";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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