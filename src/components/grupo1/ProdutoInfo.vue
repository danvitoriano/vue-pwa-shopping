<template>
  <div class="text-center">
    <h2>Informações do Produto</h2>
    <p>Vários detalhes...</p>
    <p>
      Produto: <strong>{{ product }}</strong>
    </p>
    <p>
      Marca: <strong>{{ brand }}</strong>
    </p>
    <v-bottom-sheet v-model="sheet" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="green" dark v-bind="attrs" v-on="on">
          Reservar
        </v-btn>
      </template>
      <v-sheet class="text-center" height="200px">
        <FormComprar @resultFormEvent="closeSheet" />
        <v-btn class="mt-6" text color="green" @click="sheet = !sheet">
          Concluir
        </v-btn>
        <div class="py-3">
          This is a bottom sheet using the persistent prop
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
  <!-- <div class="componente">
    <h2>Informações do Produto</h2>
    <p>Vários detalhes...</p>
    <p>
      Produto: <strong>{{ product }}</strong>
    </p>
    <p>
      Marca: <strong>{{ brand }}</strong>
    </p>
    <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="blue-grey"
      class="ma-2 white--text"
      @click="loader = 'loading3'"
    >
      Comprar
      <v-icon right dark>
        mdi-cart-plus
      </v-icon>
    </v-btn>
  </div>  -->
</template>

<script>
import FormComprar from "./FormComprar.vue";
export default {
  components: { FormComprar },
  props: {
    product: {
      type: String,
      default: "Anônimo",
    },
    brand: String,
  },
  data: () => ({
    sheet: false,
    dataForm: {},
  }),
  methods: {
    closeSheet(data) {
      if (data.valid) {
        this.dataForm = data;
      }
      this.sheet = !this.sheet;
    },
    // inverterNome() {
    //     return this.nome.split('').reverse().join('')
    // },
    // reiniciarNome() {
    //     // this.nome = 'Pedro'
    //     this.$emit('nomeMudou', 'Pedro')
    // }
  },
  created() {
    // barramento.quandoIdadeMudar(idade => {
    //     this.idade = idade
    // })
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
