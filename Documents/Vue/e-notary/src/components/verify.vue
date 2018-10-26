<template>
  <div >
  <head_head></head_head>
  <div class="row">
  <sidebar class="col-lg-3 col-md-2"></sidebar>
  <div class="col-lg-9 col-md-9 col-sm-12 col-sm-12" >
    <bar></bar>
  </div>
  </div>
  </div>
</template>

<script>
import head_head from "./header.vue"
import sidebar from "./sidebar.vue"
import bar from "./automanual.vue"


export default {
  components:{
    head_head,
    sidebar,
    bar
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
