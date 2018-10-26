<template>
  <div >
  <head_head></head_head>
  <div class="row">
  <sidebar class="col-lg-3 col-md-2"></sidebar>
  <dragdrop class="col-lg-9 col-md-10"></dragdrop>
  </div>

  </div>
</template>

<script>
import head_head from "./header.vue"
import sidebar from "./sidebar.vue"
import dragdrop from "./Dragdrop.vue"

export default {
  components:{
    head_head,
    sidebar,
    dragdrop
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
