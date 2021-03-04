<template>
  <div>
    <v-form @submit.prevent="searchPokemonByName">
      <v-container>
        <v-row class="marginInput">
          <v-text-field
            id="search-pokemon"
            label="Encontre novos pokémons"
            v-model="srcPokemon"
          />
          <v-btn class="ma-2" icon color="black" type="submit" id="btn-src">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </v-form>

    <div v-if="loading" class="text-center ma-10">
      <v-progress-circular indeterminate :size="50" />
    </div>
    <v-container v-else>
      <v-row>
        <v-col v-for="(pokemon, i) in pokemons" :key="i">
          <card :pokemon="pokemon" :loading="loading" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import PokemonCard from "../components/PokemonCard.vue";
export default {
  created() {
    this.fetchPokemons();
  },
  methods: {
    async fetchPokemonDetails(name) {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
      );

      return {
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
        types: data.types
      };
    },
    async fetchPokemons() {
      try {
        this.loading = true;
        const {
          data: { results }
        } = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
        );

        if (results) {
          const promises = await results.map(async pokemon =>
            this.fetchPokemonDetails(pokemon.name)
          );

          this.pokemons = await Promise.all(promises);
          this.loading = false;
        }
      } catch (e) {
        console.log(e);
        alert(JSON.stringify(e));
      }
    },
    async searchPokemonByName() {
      try {
        this.notFound = false;
        this.loading = true;
        const response = await this.fetchPokemonDetails(this.srcPokemon);
        this.pokemons = [response];
        this.loading = false;
      } catch (e) {
        this.loading = false;
        this.notFound = true;
      }
    }
  },
  components: {
    card: PokemonCard
  },
  data() {
    return {
      pokemons: [],
      loading: false,
      srcPokemon: "",
      notFound: false,
      error: false
    };
  }
};
</script>

<style>
.marginInput {
  margin: 0 20px;
}
</style>
