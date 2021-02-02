<template>
  <div>
    <div>
      <label>CEP:</label>
      <input type="text" class="cep-input" v-model="cep" maxlength="8" @keyup.enter="searchCep" />
      <button type="button" class="cep-button" v-on:click="searchCep">Ok</button>
    </div>

    <div v-if="!isError">
      {{ returnCep() }}
    </div>
    <div v-if="isError" class="alert-error">
      Preencha um CEP válido.
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "cepsearch",
  data() {
    return {
      cep: "",
      dataCep: {},
      status: Number,
      isError: false,
      alt: "procura do cep",
    };
  },
  methods: {
      searchCep: function() {
        if(this.cep.length == 8) {
          this.isError = false
          axios.get(`https://viacep.com.br/ws/${ this.cep }/json/`)
          .then( 
            response => {
              this.status = response.status
              this.isError = (response.data.erro != undefined) ? response.data.erro : false
              this.dataCep = response.data
            }
          )
          .catch(
            error => {
              console.log(error)
              this.isError = true
            }
          )
        }
      },
      returnCep: function() {
        if (!this.isError && this.status == 200) {
          return this.dataCep.logradouro + ',' + this.dataCep.bairro + '-' + this.dataCep.localidade + '/' + this.dataCep.uf
        }
      }
  }
};
</script>

<style scoped>
body {
  font-family: tahoma;
  color: #282828;
  margin: 0px;
}

.cep-input {
    display: inline-block;
    width: auto;
}

.cep-button {
    display: inline-block;
    height: 31px;
    width: auto;
}

.alert-error {
  color: red;
}

button {
  margin-top: 30px;
  border: none;
  background-color: #1e95ea;
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;
}

.disabledButton {
  background-color: #d8d8d8;
}

input {
  width: 100%;
  height: 25px;
  margin-bottom: 20px;
}

</style>