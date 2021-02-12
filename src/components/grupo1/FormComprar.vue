<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-btn class="mt-6" text color="green" @click="validateForm">
      Concluir
    </v-btn>
    <v-btn class="mt-6" text color="red" @click="cancelarForm">
      Cancelar
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [(v) => !!v || "Nome é obrigatório"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail é obrigatório",
      (v) => /.+@.+/.test(v) || "E-mail deve ser válido",
    ],
  }),
  methods: {
    cancelarForm() {
        this.$emit("resultFormEvent", {
          valid: this.valid
        });
    },
    validateForm() {
      //   this.$emit("resultFormEvent", {
      //     firstname: this.firstname,
      //     lastname: this.lastname,
      //     email: this.email,
      //     valid: this.valid,
      //   });
      if (
        this.firstname.length > 0 &&
        this.firstname.length <= 10 &&
        this.lastname.length > 0 &&
        this.lastname.length <= 12 &&
        this.email.length > 0
      ) {
        this.valid = true;
        this.$emit("resultFormEvent", {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          valid: this.valid,
        });
      } else {
        alert("Campos devem ser preenchido corretamente!!");
      }
    },
  },
};
</script>

<style></style>
