  <template>
        

            <div class="row mx-0" >

              <div class="col-lg-6 col-md-6 col-sm-12 col-sm-12 "  >

                      <div class=" rounded background text-center"     >
                        <div class="mid" >
                            <span class="text-uppercase" id="change">  DRAG FILE HERE </span> 
                            
                            <img   class="img-responsive mx-auto d-block " src="../assets/icons/Drag_file.png" alt="" srcset="" height="auto" width="auto">
                           	<div class="box">
			                    		<input type="file" name="file-3[]" id="file-3" class="inputfile inputfile-3" data-multiple-caption="{count} files selected" multiple />
			                    		<label for="file-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> <span>Choose a file&hellip;</span></label>
			                    	</div>
                            <button @click="addrecipient"> Start</button>
                        </div>
                      </div>
               </div>
                
            

              <div class="col-lg-6 col-md-6 col-sm-12 col-sm-12  ">

              <div class="rounded background text-center"> 

                  <div class="row set"  >
                      <div class="col-lg-12 "  >
                    
                          <span  class=" text-uppercase">USE TEMPLATE</span>
                          <img @click="usetemplate" class="img-responsive mx-auto d-block" src="../assets/icons/template.png" alt="" srcset="">
                    
                      </div>
                  </div>

                  <hr/>

                  <div class="row set" >
                    
                      <div class="col-lg-12"  >
                    
                            <span class="text-uppercase  ">create TEMPLATE</span>
                            <img  @click="createtemplate" class="img-responsive mx-auto d-block" src="../assets/icons/create_temp.png" alt="" srcset="">
                    
                      </div>
                  </div>

              </div>  
                  
                  
                
              </div>

            </div>
        
        
          
          

            </template>

          <script>
export default {
  selectedFile: null,
  methods: {
    usetemplate() {
      this.$router.push("/usetemplate");
    },
    createtemplate() {
      this.$router.push("/createtemplate");
    },
    addrecipient(){
      this.$router.push("/addrecipient");

    },
    onFileSelected(event) {
      console.log(event);
    }
    // onupload(){
    //   this.selectedFile = event.target.files[0];
    // }
  }
};
</script>
    

            <!-- Add "scoped" attribute to limit CSS to this component only -->
            <style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans%7CRoboto");

.text-center {
  color: #fdbb2d;
  font-size: 150%;
  font-weight: 700;
  font-style: italic;
  text-align: justify;
}

.rounded {
  border-radius: 50%;
}

.background {
  margin: 1.7%;
  background-color: white;
  height: 70vh;
}

#change:hover {
  background-color: #ffffff;
}

.text {
  color: #ffffff;
  font-style: italic;
  text-align: justify;
}

.set {
  padding-top: 10%;
}

#set {
  width: 70%;
}

.mid {
  padding-top: 25%;
}

hr {
  border: none;
  height: 0.2%;
  color: #f4c2c2;
  background-color: #f4c2c2;
  width: 89%;
}

button:hover {
  cursor: pointer;

  box-shadow: 0 9px white;
}

img:hover {
  background-color: #f4c2c2;
  cursor: pointer;
}


.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.inputfile + label {
  max-width: 80%;
  font-size: 1.25rem;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: 0.625rem 1.25rem;
}

.no-js .inputfile + label {
  display: none;
}

.inputfile:focus + label,
.inputfile.has-focus + label {
  outline: 1px dotted #000;
  outline: -webkit-focus-ring-color auto 5px;
}

.inputfile + label svg {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  fill: currentColor;
  margin-top: -0.25em;
  margin-right: 0.25em;
}

/* style 3 */

.inputfile-3 + label {
  color: #d3394c;
}

.inputfile-3:focus + label,
.inputfile-3.has-focus + label,
.inputfile-3 + label:hover {
  color: #722040;
}


 button {
  display: inline-block;
  padding: 15px 25px;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #2b3d4f;
  border-radius: 15px;
  border: none;
  box-shadow: 0 9px #151f28;
  /* margin-left: 20%;
  margin-top: 30px; */
  margin:0px 40px;
}

button:hover{
  cursor:pointer;
 
  box-shadow: 0 9px white;

}


@media screen and (max-width: 50em) {
  .inputfile-6 + label strong {
    display: block;
  }
}
</style>



