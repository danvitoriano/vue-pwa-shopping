<template>
  <div class="news">
    <p>Pesquisa de Notícias</p>
    <input type="text" class="assunto-input" v-model="assunto" placeholder="Assunto" maxlength="8" />
    <button type="button" class="assunto-button" v-on:click="searchNews">Pesquisar</button>
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
                console.log(`${this.token}`);
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
    border-radius: 5px;
    color: white;
    margin: 10px;
}

.city-button:hover {
    background-color: rgb(155, 155, 155)
}

</style>