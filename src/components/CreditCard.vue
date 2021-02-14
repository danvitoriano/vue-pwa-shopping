<template>
  <div>
    <alert-error v-show="isAlert">{{ message }}</alert-error>
    <v-alert v-show="isSuccess" type="success"
      >Dados salvos com sucesso</v-alert
    >
    <div class="grupo3-form">
      <h1>{{ "Cartão de Crédito" }}</h1>

      <vue-paycard :labels="labels" :value-fields="valueFields" />
      <v-form class="form" ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="valueFields.cardNumber"
          :rules="cardNumberRules"
          v-mask="'#### #### #### ####'"
          label="Número do Cartão"
          required
        ></v-text-field>

        <v-text-field
          v-model="valueFields.cardName"
          :rules="valueFieldNameRules"
          label="Nome no Cartão"
          @keydown="validateInputName"
          required
        ></v-text-field>

        <v-text-field
          v-model="date"
          :rules="cardDateRules"
          v-mask="'##/####'"
          label="Data de validade"
          required
        ></v-text-field>
        <v-text-field
          :id="labels.cardCvv"
          v-model="valueFields.cardCvv"
          :rules="cardCvvRules"
          v-mask="'###'"
          label="Código de segurança"
          required
        ></v-text-field>

        <v-btn
          block
          color="success"
          class="mr-4"
          :disabled="!valid"
          @click="validate"
        >
          Cadastrar Cartão
        </v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { VuePaycard } from "vue-paycard";
import AlertError from "./shared/AlertError.vue";

const getDate = (value) => {
  const date = value.split("/");
  return {
    month: date[0],
    year: date[1],
  };
};

export default {
  data: () => ({
    date: "",
    valid: false,
    isAlert: false,
    isSuccess: false,
    message: "",
    cardNumberRules: [
      (v) => (v && v.length === 19) || "Insira um cartão valido",
    ],
    valueFieldNameRules: [
      (v) => (v && v.length > 7) || "Insira um cartão valido",
    ],
    cardDateRules: [
      (v) => {
        const d = getDate(v);

        const isDateValid =
          +d.month > 0 && +d.month <= 12 && +d.year >= new Date().getFullYear();

        if (isDateValid) {
          return true;
        }

        return "insira uma data valida";
      },
    ],
    cardCvvRules: [(v) => (v && v.length > 1) || ""],
    valueFields: {
      cardName: "",
      cardNumber: "",
      cardMonth: null,
      cardYear: null,
      cardCvv: null,
    },
    labels: {
      cardName: "Nome Completo",
      cardHolder: "Nome",
      cardMonth: "MM",
      cardYear: "YY",
      cardExpires: "Válido até",
      cardCvv: "CVV",
    },
    inputFields: {
      cardNumber: "v-card-number",
      cardName: "v-card-name",
      cardMonth: "v-card-month",
      cardYear: "v-card-year",
      cardCvv: "v-card-cvv",
    },
  }),
  created() {
    alert("Test");
  },
  watch: {
    date: function (value) {
      const date = value.split("/");
      this.valueFields.cardMonth = date[0];
      this.valueFields.cardYear = date[1];
    },
    "valueFields.cardName": function (value) {
      this.valueFields.cardName = value.match(/^[0-9]*$/) ? "" : value;
    },
  },
  components: {
    VuePaycard,
    AlertError,
  },
  methods: {
    async validate() {
      if (!this.$refs.form.validate()) {
        this.isAlert = !this.$refs.form.validate();
        this.message = "Confira seus dados";
        return;
      }

      await this.saveData(this.valueFields);
    },
    validateInputName(event) {
      const char = String.fromCharCode(event.keyCode);
      if (/[0-9]/.test(char)) {
        event.preventDefault();
      }
    },
    async saveData(body) {
      try {
        await axios.post(
          "https://5f90439ce0559c0016ad65ae.mockapi.io/api/v1/creditcardxpto",
          body
        );

        this.isSuccess = true;
      } catch (error) {
        this.isAlert = true;
        this.message = "erro ao salvar os dados";
      }
    },
  },
};
</script>

<style>
.grupo3-form {
  margin: auto;
  max-width: 500px;
  padding: 40px;
}

.form {
  margin-top: 40px;
}

img {
  margin: 0;
  border: 0;
  outline: 0;
  box-shadow: none;
}

.mr4 {
  flex: 1;
}
</style>
