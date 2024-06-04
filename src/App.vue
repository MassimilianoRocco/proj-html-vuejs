<!-- SCRIPT -->
<script>
import AppHeader from './components/AppHeader.vue';
import AppCoursesShop from './components/AppCoursesShop.vue';

import store from './data/store.js'


export default {
  components: {
    AppHeader,
    AppCoursesShop,

  },
  data() {
    return {
      store,
      
    }
  },
  methods: {
   
  },
  created() {
    
  },
  mounted() {

  }
}
</script>


<!-- TEMPLATE -->
<template>
  <AppHeader/>
  <AppCoursesShop/>
</template>


<!-- STYLE -->
<style scoped>

</style>
