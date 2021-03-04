<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col v-for="item in data.items" :key="item" cols="6">
          <v-card height="230">
            <h2>{{ item.titulo }}</h2>
            <h5>{{ item.data_publicacao }}</h5>
            <hr />
            <h4>{{ item.introducao }}</h4>
            <br />
            <a :href="item.link" target="blank">{{ texto }}</a>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "News",
  data() {
    return {};
  },
  props: ["data", "texto"],
};
</script>
