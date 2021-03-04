<template>
  <div>
    <div>
      <label>CEP:</label>
      <!-- v-model faz um bind (link) entre o campo do formulário e os dados do componente  -->
      <input type="text" class="cep-input" v-model="cep" maxlength="8" />
      <button type="button" class="cep-button" v-on:click="searchCep">
        Ok
      </button>
    </div>
    <!-- se não há erro, chama a função que retorna o CEP -->
    <div v-if="!isError">
      {{ returnCep() }}
    </div>
    <!-- se há erro exibe mensagem -->
    <div v-if="isError" class="alert-error">
      Preencha um CEP válido.
    </div>
  </div>
</template>

<script>
import axios from "axios"; // biblioteca usada para fazer requisições HTTP, similar ao Fetch
export default {
  name: "cepsearch",
  data() {
    return {
      cep: "",
      dataCep: {},
      status: Number,
      isError: false
    };
  },
  methods: {
    searchCep: function() {
      if (this.cep.length === 8) {
        // sempre usar operadores strict
        this.isError = false; // erros
        axios
          .get(`https://viacep.com.br/ws/${this.cep}/json/`) // faz um get na API
          .then(
            // usa a Promise para transformar a requisição em assíncrona e capturar a resposta
            response => {
              this.status = response.status; // recebe o status da requisição
              this.isError =
                response.data.erro !== undefined ? response.data.erro : false; // recebe erro caso haja
              this.dataCep = response.data; // o resultado do CEP procurado
            }
          )
          .catch(
            // caso a Promise seja rejeitada cairá no catch
            error => {
              console.log(error);
              this.isError = true;
            }
          );
      }
    },
    returnCep: function() {
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
