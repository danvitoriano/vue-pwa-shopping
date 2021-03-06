<template>
  <v-card>
    <v-card-title>
      <span class="headline">{{ modalTitle }}</span>
    </v-card-title>
    <v-card-text>
      <v-container class="px-0" fluid>
        <v-form
          class="user-form"
          ref="form"
          @submit.prevent="onSubmit"
          v-model="valid"
        >
          <img v-if="form.avatar" class="img-responsive" :src="form.avatar" />
          <div class="mb-6">
            <v-text-field
              label="First Name"
              id="first_name"
              v-model="form.first_name"
              required
            />
          </div>
          <div class="mb-6">
            <v-text-field
              label="Last Name"
              id="last_name"
              v-model="form.last_name"
              required
            />
          </div>
          <div class="mb-6">
            <v-text-field
              label="Email"
              id="email"
              v-model="form.email"
              :rules="emailRegex"
              required
            />
          </div>
          <div class="mb-6">
            <v-text-field
              label="Avatar URL"
              id="avatar"
              v-model="form.avatar"
              required
            />
          </div>
          <v-btn
            class="mr-4"
            id="btn-submit"
            @click="onSubmit"
            value="Submit"
            :disabled="!valid"
          >
            Submit
          </v-btn>
          <v-btn class="mr-4" @click="clear">
            Clear
          </v-btn>
          <v-btn class="mr-4" text @click="close">
            Close
          </v-btn>
        </v-form>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "user-modal",
  props: {
    form: Object,
    index: Number
  },
  data() {
    return {
      emailRegex: [v => /.+@.+/.test(v)],
      itemError: "Item is required!",
      valid: false
    };
  },
  computed: {
    modalTitle() {
      return this.index === -1 ? "New User" : "Edit User";
    }
  },
  methods: {
    onSubmit() {
      this.$emit("output", this.form);
    },
    close() {
      this.$emit("close");
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style>
.img-responsive {
  width: 50%;
  border-radius: 50%;
}
.user-form {
  text-align: center;
}
input {
  margin-bottom: 5px;
}
</style>
