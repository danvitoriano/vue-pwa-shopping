<template>
  <div class="corpo">
    <h1 class="centralizado">{{ msg }}</h1>
    <!-- aplicando um filtro para transformar algo -->
    <h2>{{ titulo | capitalize }}</h2>
    <!-- uma forma de não usar v-model é o evento especial input que permite atribuir a uma propriedade o valor do campo alvo -->
    <input
      type="search"
      @input="filtro = $event.target.value"
      class="filtro"
      placeholder="filtre pelo título da foto"
    />
    <!-- o que for digitado em filtro aparece imediatamente aqui -->
    {{ filtro }}

    <ul class="lista-fotos">
      <!-- o v-for percorre o resultado de computed properties fotosComFiltro -->
      <li
        v-for="foto of fotosComFiltro"
        v-bind:key="foto.id"
        class="lista-fotos-item"
      >
        <!-- meu-painel é um slot que encapsula a imagem dentro de um componente personalizado  -->
        <meu-painel :titulo="foto.first_name">
          <img
            class="imagem-responsiva"
            :src="foto.avatar"
            :title="foto.email"
          />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Painel from "./shared/painel/Painel";

export default {
  name: "FiltrarFotos",
  components: {
    "meu-painel": Painel
  },
  data() {
    return {
      filtro: "",
      titulo: "filtrando fotos",
      fotos: [],
      erros: []
    };
  },
  props: {
    msg: String
  },
  created() {
    // ciclo de vida ativado qdo já há uma instancia Vue Criada, pode haver o mounted(), destroyed(), etc..
    // mais infos sobre lifecycle hooks: https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
    axios
      .get("https://reqres.in/api/users") // faz um get com axios
      .then(response => {
        this.fotos = response.data.data; // se houver respostas, preenche em fotos
      })
      .catch(e => {
        this.erros.push(e); // se der erro na promise adiciona no erros
      });
  },
  computed: {
    fotosComFiltro() {
      // função que retornará depois que que houverem as fotos e quando algo for preenchido no filtro
      if (this.filtro) {
        // se algo foi preenchido no campo filtro
        let expressao = new RegExp(this.filtro.trim(), "i"); // expressão regular que remove espaços em brancos nas pontas da string, e não é case-sensitive
        return this.fotos.filter(foto => expressao.test(foto.first_name)); // metodo funcional filter retorna caso o nome de alguma das fotos passe na expressão regular
      } else {
        return this.fotos; // se não houver nada preenchido, mostra todas as fotos
      }
    }
  },
  filters: {
    // filtro personalizado que coloca a primeira letra em maiuscula
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style scoped>
.centralizado {
  text-align: center;
}

.corpo {
  font-family: Helvetica, Arial, sans-serif;
  margin: 0 auto;
  width: 96%;
  color: gray;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
  display: block;
  width: 100%;
}
</style>
