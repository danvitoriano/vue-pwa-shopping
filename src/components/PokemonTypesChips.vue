<template>
  <div class="text-center">
    <v-chip class="ma-0" :color="color" text-color="white">
      {{ this.name }}
    </v-chip>
  </div>
</template>

<script>
export default {
  props: {
    typeData: Object
  },
  computed: {
    color() {
      switch (this.name) {
        case "Grass":
          return "green";
        case "Poison":
          return "purple";
        case "Fire":
          return "red";
        case "Water":
          return "blue";
        case "Bug":
          return "light-green";
        case "Flying":
          return "sky";
        default:
          return "grey";
      }
    },
    name() {
      const { name } = this.typeData.type;
      return name?.charAt(0).toUpperCase() + name?.slice(1);
    }
  }
};
</script>
