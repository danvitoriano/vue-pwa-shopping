<template>
  <div class="clima">
    <p>Pesquisa de Clima</p>
    <input type="text" class="city-input" v-model="city" placeholder="Cidade" maxlength="8" />
    <button type="button" class="city-button" v-on:click="searchCity">Pesquisar</button>
  </div>
</template>

<script>

// import axios from "axios"; // biblioteca usada para fazer requisições HTTP, similar ao Fetch

export default {
    name: "Clima",
    data() {
        return {
            city: '',
            dataClima: {},
        }
    },
    methods: {
        searchCity: function () {
            if (this.city.length > 0) {
                console.log(`${this.city}`);
            }
        }
    },
    computed: {

    }
}
</script>

<style>

.city-input {
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    width: 250px;
    margin: 10px;
}

.city-button {
    border-radius: 5px;
    color: white;
    margin: 10px;
}

.city-button:hover {
    background-color: rgb(155, 155, 155)
}

</style>