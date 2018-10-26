  <template>
        <div class="container-fluid">

            <head_head></head_head>
           
            <div class="row bow" >
              <label class="text-center"> Add Recepient</label>

           </div>

            <div class="row">
               

                  <div class="col-lg-6 col-md-6 col-sm-12 col-sm-12 "  >

                      <div class=" rounded text-center dot " >
                        <div  class="set-left ">
                            <span class="text-uppercase mx-auto d-block" >  Only me </span> 
                            <button class="btn btn-warning"> Sign</button>
                        </div>
                      </div>

                
                   </div>

   

                   <div class="col-lg-6 col-md-6 col-sm-12 col-sm-12  "  >

                      <div class="rounded   dot  " style="padding:0px 40px" >
                        <div>
                        <div class="text-center dot"  style=" width:65%; margin-top:10%; margin-left:20%; margin-right:20%; " >

                            <label for="email">Name:</label>
                            <input type="email" name="" id="email">

                             <label for="email">Email:</label>
                            <input type="email" name="" id="email">
                        </div>

                      <button class=" btn btn-warning"> Add Another</button>
                      <button class=" btn btn-warning" style="  margin-bottom:19%;"> Done</button>


                        </div>

                        
                      </div>

                   </div>
              
               </div>

           <div class="progress">
              <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%">
                  70% Complete (danger)
              </div>
           </div>
         </div>
        


            </template>

          <script>
    import head_head from "./header.vue";

export default {
  selectedFile: null,
  methods: {
    usetemplate() {
      this.$router.push("/usetemplate");
    },
    createtemplate() {
      this.$router.push("/createtemplate");
    },
    onFileSelected(event) {
      console.log(event);
    }

  },
  components:{
      head_head
  }
};
</script>
    

<style scoped>

.dot{
   border: 5px dashed gray;
    margin-left: 4%;
}

.dot label{
  width: 20%;
}

.dot input{
  width: 75%;
}

.bow{
  margin:0.5% 40%;
}


.text-center {
  color: #fdbb2d;
  font-size: 130%;
  font-weight: 700;
  font-style: italic;
  text-align: justify;
 
}

.dot > .dot{
   border: 5px dotted #fdbb2d;
   border-radius: 20%; 

}

.dot:hover{
   border: 5px dotted #fdbb2d;
}

button[data-v-76e962a8] {
    margin: 2% 40%;
    /* background-color: #2B3D4F; */
    color: white;
}

.set-left{
  width:65%; margin:22% 20%;
}

.progress-bar-danger{
  background-color: #e60000;
  color: #ffffff;
 

}

.progress{
  margin: 2%; 
  line-height: 30px;
  
  height: 45px;
}




.background {
  margin-top: 5%;
  background-color: white;
  height: 70vh;
}


.text {
  color: #ffffff;
  font-style: italic;
  text-align: justify;
}

.set {
  padding-top: 10%;
}


button:hover{
  cursor:pointer;
 

}

</style>


            
