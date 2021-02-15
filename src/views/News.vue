<template>
  <v-app id="inspire">
    <v-app-bar
      app
      shrink-on-scroll
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>Pesquisa de Notícias</v-toolbar-title>

      <v-spacer></v-spacer>


      <!-- <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <v-container>
      <news></news>
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

import News from '../components/News.vue'

  export default {
    name: "News",
    data() {
      return {
      }
    },
    components: {
      news: News
    },
    methods: {

    },
    computed: {

    }
  }
</script>