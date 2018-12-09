<template>
  <div class="container-fluid  mx-0" id="app">
   
      <router-view></router-view>
      <footer_footer ></footer_footer >
  </div>
</template>

<script>
import footer_footer from "./components/footer/footer.vue"
export default {
  props: {
    msg: String
  },
  components:{
    footer_footer
  }
  
}
</script>

<style scoped >
  *{
    margin: 0%;
  }

  #app{
    padding: 0;
  }

</style>
