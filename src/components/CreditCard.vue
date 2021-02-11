<template>
  <div class="grupo3-form">
    <h1>{{ "Cartão de Crédito" }}</h1>

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="creditNumber"
        label="Número do Cartão"
        v-mask="'#### #### #### ####'"
        required
      ></v-text-field>

      <v-text-field
        v-model="name"
        label="Nome no Cartão"
        required
      ></v-text-field>

      <v-text-field
        v-model="date"
        v-mask="'##/####'"
        label="Data de validade"
        required
      ></v-text-field>

      <v-text-field
        v-model="securityCode"
        v-mask="'###'"
        label="Código de segurança"
        required
      ></v-text-field>

      <v-btn
        block
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Cadastrar Cartão
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    creditNumber: "",
    name: "",
    date: "",
    securityCode: "",
  }),
};
</script>


<style>
.grupo3-form {
  margin: auto;
  max-width: 500px;
  padding: 40px;
}

.mr4 {
  flex: 1;
}
</style>