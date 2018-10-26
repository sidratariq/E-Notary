  <template >

  <div >
    <div class="container-fluid px-0"  >
      <router-view/>
    </div>
  </div>
  </template>

  <script>
 
  import register from './components/register.vue' 
  

  export default {
    name: 'App',
    components:{
     register,
     
  }
  }
  </script>

  <style>
    
  body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  /* justify-items: center; */
}
body, html {
  margin: 0;
  height: 100%;
}



  
  </style>

