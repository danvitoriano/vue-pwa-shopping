<template>
  <div class="news">
    <p>Pesquisa de Notícias</p>
    <form class="form" v-on:submit.prevent="searchNews">
      <input
        type="text"
        class="assunto-input"
        v-model="assunto"
        placeholder="Assunto"
        maxlength="8"
      />
      <input type="submit" value="Pesquisar" class="assunto-button" />
    </form>
  </div>
</template>

<script>
import axios from "axios"; // biblioteca usada para fazer requisições HTTP, similar ao Fetch

export default {
  name: "News",
  data() {
    return {
      assunto: "",
      dataNews: {},
      //   countNews: Number,
      //   titulo: "",
      //   introducao: "",
      //   dataPublicacao: "",
      //   linkNoticia: "",
      status: Number,
      isError: false,
    };
  },
  methods: {
    searchNews: function() {
      if (this.assunto.length > 0) {
        axios
          .get(
            `http://servicodados.ibge.gov.br/api/v3/noticias/?busca=${this.assunto}/json`
          )
          .then((response) => {
            this.status = response.status;
            this.dataNews = response.data;
            // this.countNews = response.data.count;
            console.log(`Assunto: ${this.assunto}`);
            // console.log(`Count News: ${this.countNews}`);
            console.log(`News: ${this.dataNews}`);
            console.log(`Status: ${this.status}`);
            this.$emit("", this.dataNews);
          })
          .catch(
            // caso a Promise seja rejeitada cairá no catch
            (error) => {
              console.log(error);
              this.isError = true;
            }
          );
      }
    },
  },
  computed: {
    noticia() {
      return this.dataNews.items;
    },
  },
};
</script>

<style scoped>
.assunto-input {
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  width: 250px;
  margin: 10px;
}

.assunto-button {
  border: 1px solid black;
  border-radius: 5px;
  width: 100px;
  background-color: teal;
  color: white;
  margin: 10px;
}

.city-button:hover {
  background-color: rgb(155, 155, 155);
}
</style>
