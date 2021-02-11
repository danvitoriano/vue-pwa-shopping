<template>
    <!-- evento v-on:submit dispara a função onSubmit -->
    <!-- o prevent é um método que o Vue traz. evita o comportamento padrão do form que é recarregar a página. -->
  <form class="review-form" @submit.prevent="onSubmit">

<!-- se há erros  -->
      <p class="error" v-if="errors.length">
          <strong>corrija os seguintes erros</strong>
          <ul>
              <li v-for="error in errors" :key="error">{{error}}</li>
          </ul>
      </p>

      <p>
        <label for="name">Name:</label>
        <!-- o v-model faz o Two Way Data Binding, e preenche a propriedade name com o valor que for digitado no campo -->
        <input id="name" v-model="name" placeholder="name">
      </p>
      
      <p>
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>
      </p>
      
      <p>
        <label for="rating">Rating:</label>
        <!-- o v-model tem propriedades como o number para facilitar a iteração de valores -->
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>

      <p>Would you recommend this product?</p>

        <label>
          Yes
          <!-- para input radio, o v-model precisa ser o mesmo, pois apenas receberemos um único valor -->
          <input type="radio" value="Yes" v-model="recommend"/>
        </label>
        <label>
          No
          <input type="radio" value="No" v-model="recommend"/>
        </label>
          
      <p>
        <input type="submit" value="Submit">  
      </p>    
    
    </form>
</template>

<script>
export default {
  name: "product-review",
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      recommend: null,
      errors: [],
    };
  },
  methods: {
    onSubmit() { // método que vai enviar o form
      if (this.name && this.review && this.rating) { // se todos os campos foram preenchidos
        // monta objetos com os reviews
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          recommend: this.recommend,
        };
        // emite evento review-submitted passando o objeto de review
        this.$emit("review-submitted", productReview);
        // limpa os campos do formulário
        (this.name = null),
          (this.review = null),
          (this.rating = null),
          (this.recommend = null)
          (this.errors = []);
      } else { // se algum campo não foi preenchido, adiciona o erro e exibe na tela
        if (!this.name) this.errors.push("Nome obrigatorio");
        if (!this.review) this.errors.push("Review obrigatorio");
        if (!this.rating) this.errors.push("Rating obrigatorio");
      }
    },
  },
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