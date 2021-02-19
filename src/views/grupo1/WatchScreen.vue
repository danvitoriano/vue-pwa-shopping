<template>
  <div id="divG1" class="componente">
    <Produto></Produto>
  </div>
</template>

<script>
import Produto from "../../components/grupo1/Produto.vue";

export default {
  components: { Produto }
};
</script>

<style>
#divG1 {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
    margin: 20px 10px;
	font-size: 1.7rem;
}

h1, h2, p {
	margin: 10px;
	padding: 0px;
}

button {
	font-size: 1.5rem;
	padding: 5px 15px;
	border-radius: 4px;
	margin: 10px;
}
</style>