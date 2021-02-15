<template>
  <v-app id="inspire">
    <v-app-bar
      app
      shrink-on-scroll
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>Pesquisa de Clima</v-toolbar-title>

      <v-spacer></v-spacer>


      <!-- <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <v-container>
      <clima></clima>
        <v-row>
          <v-col
            v-for="n in 3"
            :key="n"
            cols="4"
          >
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import Clima from '../components/Clima.vue'

  export default {
    name: "Clima",
    data() {
      return {
      }
    },
    components: {
      clima: Clima
    },
    methods: {

    },
    computed: {

    }
  }
</script>