      <template>
       
          
      <div class="container-fluid "   >
        
       <heade_head ></heade_head>  
      

         
      <div class="row">  

       <tempside></tempside>
   
        <tempcontent></tempcontent>
      
      </div>
      </div>
      </template>

      <script>
        import tempside  from "./templside.vue";
        import heade_head  from "./header.vue";
        import tempcontent from "./tempcontent.vue"




      export default {
        components:{
        tempside,
            heade_head,
            tempcontent
        },
        methods:{
            godashboard(){
        this.$router.push('/homepage');
    }
        }
      }
      </script>

      <style  scoped>
      

      </style>
