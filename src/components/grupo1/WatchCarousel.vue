<template>
  <!-- <v-carousel v-model="model">
    <v-carousel-item
      v-for="(color, i) in colors"
      :key="color"
    >
      <v-sheet
        :color="color"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">
            Slide {{ i + 1 }}
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel> -->
  <div class="componente">
    <v-carousel @change="setImage">
      <v-carousel-item
        v-for="(item, i) in variants"
        :key="i"
        :src="item.variantImage"
        style="width:500px;height:auto;"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  props: {
    variants: [Array, String],
  },

  data: () => ({}),

  methods: {
    setImage: function(index) {
      // this.selectedVariant = index;
      // this.selectedImage = require('../../assets/' + this.variants[this.selectedVariant].variantImage)
      console.log("../../assets/" + this.variants[index].variantImage);
      this.variants[index].variantImage = require("../../assets/" +
        this.variants[index].variantImage);
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #fff;
  color: #fff;
}
</style>
