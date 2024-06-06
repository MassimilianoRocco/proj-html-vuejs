<script>
 export default {
  // ***PROPS IMPORTATE DAL PADRE***
   props: {
     image: String,
     title: String,
     description: String
   }
 }
</script>

<template>
 <div class="card border-0">
    <img class="z-3" :src="image" alt="Card image" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
 </div>
</template>

<style scoped>
.card {
  padding: 10px;
  max-width: 300px;
}
.card img {
  width: 50%;
}
</style>
