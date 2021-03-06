<template>
  <v-card dark height="150" width="350">
    <div class="d-flex flex-wrap justify-space-between">
      <div>
        <v-card-title class="headline" v-text="this.name" id="card-name" />

        <div class="d-flex">
          <v-card-subtitle v-for="(types, i) in this.pokemon.types" :key="i">
            <chips :typeData="types" />
          </v-card-subtitle>
        </div>
      </div>

      <v-avatar class="ma-3" size="110" tile>
        <v-img :src="this.pokemon.image"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
import PokemonTypesChips from "../components/PokemonTypesChips.vue";
export default {
  components: {
    chips: PokemonTypesChips
  },
  props: {
    pokemon: Object,
    loading: Boolean
  },
  computed: {
    name() {
      const { name } = this.pokemon;
      return name?.charAt(0).toUpperCase() + name?.slice(1);
    }
  }
};
</script>
