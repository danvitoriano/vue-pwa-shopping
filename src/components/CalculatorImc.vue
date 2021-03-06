<template>
  <div>
    <alert-error v-show="isAlert">{{ message }}</alert-error>
    <v-alert v-show="isOverweight" type="warning">{{ imcResult }}</v-alert>
    <v-alert v-show="isObeseOrThinness" type="error">{{ imcResult }}</v-alert>
    <v-alert v-show="isNormal" type="success">{{ imcResult }}</v-alert>
    <v-alert v-show="isSuccess" type="success">{{ successResult }}</v-alert>
    <div class="grupo2-form">
      <h1>{{ "Calculadora de IMC" }}</h1>

      <v-form
        class="form"
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="calculateImc"
      >
        <v-text-field
          id="personName"
          v-model="valueFields.personName"
          label="Seu nome"
        ></v-text-field>

        <v-text-field
          id="personAge"
          v-model="valueFields.personAge"
          label="Idade"
          required
        ></v-text-field>

        <v-text-field
          id="personHeight"
          v-model="valueFields.personHeight"
          label="Altura (cm)"
          required
        ></v-text-field>

        <v-text-field
          id="personWeight"
          v-model="valueFields.personWeight"
          label="Peso (kg)"
          required
        ></v-text-field>

        <v-text-field
          id="personActivityLevel"
          v-model="valueFields.personActivityLevel"
          label="Nível de atividade física"
        ></v-text-field>

        <v-btn
          block
          id="calculateIMC"
          type="submit"
          color="success"
          class="mr-4"
          :disabled="!valid"
        >
          Calcular
        </v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AlertError from "./shared/AlertError.vue";

export default {
  data: () => ({
    valid: false,
    isAlert: false,
    isObeseOrThinness: false,
    isNormal: false,
    isOverweight: false,
    isSuccess: false,
    messagePeople: "",
    message: "",
    welcomeTitle: "",
    welcomeText: "",
    welcomeClickOk: "",
    showDialog: false,
    valueFields: {
      personName: "",
      personAge: "",
      personHeight: "",
      personWeight: "",
      personActivityLevel: "",
      personImc: ""
    },
    inputFields: {
      personName: "v-person-name",
      personAge: "v-person-age",
      personHeight: "v-person-height",
      personWeight: "v-person-weight",
      personActivityLevel: "v-person-activity-level",
    },
  }),
  computed: {
    imcResult() {
      return "Resultado IMC: " + " " + this.valueFields.personImc;
    },
    successResult() {
      return this.messagePeople;
    }
  },
  components: {
    AlertError
  },
  methods: {
    async validate() {
      if (!this.$refs.form.validate()) {
        this.isAlert = !this.$refs.form.validate();
        this.message = "Confira seus dados";
        return;
      }
      await this.calculateImc(this.valueFields);
    },
    async calculateImc() {
      let height = this.valueFields.personHeight / 100
      let weight = this.valueFields.personWeight
      let imc = weight / (height * height)

      this.isAlert = false;
      this.isObeseOrThinness = false;
      this.isNormal = false;
      this.isOverweight = false;
      this.isSuccess = false;

      if (isNaN(height) || isNaN(weight)) {
        this.isAlert = true;
        this.message = "dados inválidos";
        return
      }

      if (imc < 18.5) {
        this.valueFields.personImc = "Magreza"
        this.isObeseOrThinness = true;
      } else if(imc < 24.9) {
        this.valueFields.personImc = "Normal"
        this.isNormal = true;
      } else if(imc < 30) {
        this.valueFields.personImc = "Sobrepeso"
        this.isOverweight = true;
      } else {
        this.valueFields.personImc = "Obeso"
        this.isObeseOrThinness = true;
      }

      try {
        let data = await axios.get('https://run.mocky.io/v3/99c4fb47-cf3e-4dcf-9655-a81cb90a1ef9')
        let participants = data.data.participantes
        this.isSuccess = true
        this.messagePeople = `${data.data.grupo} - ${participants[0].nome} - ${participants[1].nome} - ${participants[2].nome} - ${participants[3].nome}`
      } catch (error) {
        this.isAlert = true;
        this.message = "erro ao recuperar os dados";
      }
    },
  },
};
</script>

<style>
.grupo2-form {
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