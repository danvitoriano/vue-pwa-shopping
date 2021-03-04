<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          {{ title }}
        </v-card-title>

        <v-card-text> {{ text }} </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">{{
            okButtonMessage
          }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: this.showDialog,
    };
  },
  props: {
    showDialog: Boolean,
    title: String,
    text: String,
    okButtonMessage: String,
  },
};
</script>