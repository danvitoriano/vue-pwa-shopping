<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn to="/" text>
        <span class="mr-2">Home</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn to="/about" text>
        <span class="mr-2">About</span>
        <v-icon>mdi-alert-decagram</v-icon>
      </v-btn>
      <v-btn to="/group4" text>
        <span class="mr-2">Group 4</span>
        <v-icon>mdi-border-all</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
