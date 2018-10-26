      <template>
       
          
      <div class="container-fluid mx-0 "   >
        
       <heade_head ></heade_head>  
      

         
      <div class="row">  

   
        <tempcontent></tempcontent>
        <playground></playground>
      </div>
      </div>
      </template>

      <script>
        import heade_head  from "./header.vue";
        import tempcontent from "./createtempside.vue";
        import playground from "./createcontent.vue";






      export default {
        components:{
        // tempside,
            heade_head,
            tempcontent,
            playground
        },
        methods:{
            godashboard(){
        this.$router.push('/homepage');
    }
        }
      }
      </script>

      <style  scoped>
      *{
         background-color:#23BA9C;
         /* padding: 1%; */
      }

      </style>
