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
      <v-row>
        <v-col cols="8" md="2">
          <v-text-field
            v-model="cep"
            label="CEP"
            :counter="8"
            required
          ></v-text-field>
          <template v-if="!isError">
            <v-dialog v-model="dialog" persistent max-width="400">
              <v-card>
                <v-card-title class="headline">
                  Cep localizado com sucesso!!!
                </v-card-title>
                <v-card-text>{{ mountCepInformation() }}</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <!-- <v-btn color="green darken-1" text @click="dialog = false">
                    Disagree
                  </v-btn> -->
                  <v-btn color="green darken-1" text @click="dialog = false">
                    Ok
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>
        </v-col>
      </v-row>
      <v-row>
        <v-btn class="mt-6" text color="green" @click="searchCep">
          Consultar Cep
        </v-btn>
      </v-row>
      <v-btn class="mt-6" text color="green" @click="validateForm">
        Concluir
      </v-btn>
      <v-btn class="mt-6" text color="red" @click="cancelarForm">
        Cancelar
      </v-btn>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios"; // biblioteca usada para fazer requisições HTTP, similar ao Fetch

export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    cep: "",
    nameRules: [(v) => !!v || "Nome é obrigatório"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail é obrigatório",
      (v) => /.+@.+/.test(v) || "E-mail deve ser válido",
    ],
    status: Number,
    isError: false,
    dataCep: {},
    dialog: false,
    cepIsOk: false,
  }),
  methods: {
    cancelarForm() {
      this.$emit("resultFormEvent", {
        valid: this.valid,
      });
    },
    validateForm() {
      if (this.cep.length > 0 && this.cep.length <= 8) {
        if (!this.cepIsOk) {
          alert("Cep deve ser um válido!!!!");
          return
        }
      }

      if (
        this.firstname.length > 0 &&
        this.firstname.length <= 10 &&
        this.lastname.length > 0 &&
        this.lastname.length <= 12 &&
        this.cep.length > 0 &&
        this.cep.length <= 8 &&
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
    searchCep: function() {
      if (this.cep.length === 8) {
        // sempre usar operadores strict
        this.isError = false; // erros
        axios
          .get(`https://viacep.com.br/ws/${this.cep}/json/`) // faz um get na API
          .then(
            // usa a Promise para transformar a requisição em assíncrona e capturar a resposta
            (response) => {
              this.status = response.status; // recebe o status da requisição
              this.isError =
                response.data.erro !== undefined ? response.data.erro : false; // recebe erro caso haja
              this.dataCep = response.data; // o resultado do CEP procurado
              this.dialog = true;
              if (!this.isError && this.status == 200) {
                this.cepIsOk = true;
              }
            }
          )
          .catch(
            // caso a Promise seja rejeitada cairá no catch
            (error) => {
              console.log(error);
              this.isError = true;
            }
          );
      }
    },
    mountCepInformation: function() {
      // retorna o CEP
      if (!this.isError && this.status == 200) {
        // se não tem erro, e a resposta foi status 200
        return (
          this.dataCep.logradouro +
          "," +
          this.dataCep.bairro +
          "-" +
          this.dataCep.localidade +
          "/" +
          this.dataCep.uf
        ); // monta o retorno da informação
      }
    },
  },
};
</script>

<style></style>
