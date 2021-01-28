<template>
    <div class="container" >
        <span v-for="size in sizes" :key="size">
            {{size}}
        </span>
    </div>
</template>

<script>
export default {
   name: "shirt-size",
   data() {
    return {
        sizes:[
            'P',
            'M',
            'G',
            'XG'
        ]
    };
  }
}
</script>

<style>
.container {
    margin-top: 20px;
    display: flex;
    width: 250px;
    justify-content: space-between;
}

.container > span {
    width: 20px;
    text-align: center;
    padding: 15px;
    border: solid 1px #999;

}

</style>