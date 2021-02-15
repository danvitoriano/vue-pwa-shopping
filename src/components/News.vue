<template>
  <div class="news">
    <p>Pesquisa de Notícias</p>
    <form class="form" v-on:submit.prevent="searchNews">
        <input type="text" class="assunto-input" v-model="assunto" placeholder="Assunto" maxlength="8" />
        <input type="submit" value="Pesquisar" class="assunto-button">
    </form>
  </div>
</template>

<script>

// import axios from "axios"; // biblioteca usada para fazer requisições HTTP, similar ao Fetch

export default {
    name: "News",
    data() {
        return {
            assunto: '',
        }
    },
    methods: {
        searchNews: function () {
            if (this.assunto.length > 0) {
                console.log(`${this.assunto}`);
            }
        }
    },
    computed: {

    }
}
</script>

<style>

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
    background-color: rgb(155, 155, 155)
}

</style>