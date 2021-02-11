<template>
  <div class="painel">
    <h2 class="painel-titulo">{{ titulo }}</h2>
    <slot class="painel-corpo">
      <!-- o slot permite que outro componente seja renderizado dentro deste container que é o painel -->
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    // esta propriedade será enviada por quem importar o Painel
    titulo: String // já recebe direto o tipo da propriedade
  }
};
</script>

<style scoped>
.imagem-responsiva {
  width: 100%;
}

.painel {
  padding: 0 auto;
  border: solid 1px grey;
  display: inline-block;
  margin: 0 10px;
  box-shadow: 2px 2px 10px grey;
  width: 150px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.painel .painel-titulo {
  font-size: 14px;
  text-align: center;
  border-bottom: solid 1px grey;
  background: mediumspringgreen;
  margin: 0;
  padding: 10px;
  text-transform: uppercase;
}
</style>
