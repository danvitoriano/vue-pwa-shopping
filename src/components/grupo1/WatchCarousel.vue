<template>
  <div class="componente">
    <v-carousel @change="setImage">
      <v-carousel-item
        v-for="(item, i) in variants"
        :key="i"
        :src="require('../../assets/' + variants[i].variantImage)"
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
    //   this.variants[index].variantImage = require("../../assets/" +   this.variants[index].variantImage);
      console.log("Carousel Event Change: " + index);
      this.$emit('change', index);  
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
