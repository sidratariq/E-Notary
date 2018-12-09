          <template>
          <transition name="modal">
          <div class="modal" style=" ">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
              <div>
                  <h1 class="modal_title">Profile Photo </h1>
                  <span class="btn-cross" @click="close()" >x</span>
                  
              </div>
              <hr>
                 
                  <form v-if="!flag" class="set-height" enctype="multipart/form-data"  >
                      <input type="file" class="drag_input" id="file-select" @change="showImage($event),clicked()"  accept="image/*">
                      <label for="file-select" class="effect6 text-center" style="height:98%; width:98%;  border:1px solid #005cb9; position:relative; border-radius:2px;">
                      <img src="../../assets/icons/emptyuser.svg" width="150px" height="150px" style="position:absolute; top:50px; left:130px;" alt="=Upload your picture">
                      <img src="../../assets/icons/mask.svg" width="70px" height="70px"  style=" position:absolute; top:98px; left:168px" >

                      <span class="snap" >Drag &amp; drop
                        <h6 >your photo here,or<span class="snapblue"> browser</span></h6></span>  
                      
                      <span v-if="flag" class="snap" >Drag &amp; drop
                        <h6 >your photo here,or<span class="snapblue"> browser</span></h6></span>  
                      </label>              
                  </form>

                  <div  v-if="flag" class="set-height" >
                      <input type="file" id="changepic" accept="image/*"  @change="showImage($event)" class="drag_input">
                      <label for="changepic" class="btn btn-primary changepic"> CHANGE PHOTO</label>
                      <img src="" id="image" width="100%" height="80%" alt="">
                      <!-- <button @click="showImage"></button> -->
                  </div>
                
                <hr>


                
                <div class="modal-footer" >
                    <button type="button" class="btn btn-outline-info" @click="close()" > Done </button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal"  @click="clicked()" >Cancel</button>
                </div>
              </div>
            </div>
          </div>
          </transition> 
          </template>

          <script>

          export default {
            data(){
              return {
                name:'sidra tariq',
                hash:'AE9DB71A4A854B1...',
                flag:false,
                selectedfiles:null,
                viewimage:''
              }
            },
              props:['uploadphoto'],
              methods:{
                  clicked(){
                      this.flag= !this.flag;
                   

                  },
                  close(){
                      this.uploadphoto= !this.uploadphoto;
                      this.$emit('gotclicked',this.uploadphoto);

                  },
                  showImage(event){
                      // this.flag= !this.flag;

                        let input = event.target;

                      if(event.target.files.length > 0){

                        let reader = new FileReader();
                        reader.onload = function(){
                          var dataURL = reader.result;
                          document.getElementById('image').src = dataURL;
                        }
                        reader.readAsDataURL(input.files[0])
                      }
                     

                      


                      // if(event.target.files && event.files[0]){
                      //   obj = new FileReader();
                      //   obj.onload= function(data){
                      //     image = document.getElementById("image");
                      //     image.src = data.target.result;
                      //     image.style.display ="block";

                      //   }
                      //   obj.readAsDataURL(event.files[0]); 
                      // }
                      // this.selectedfiles = event.target.files[0]
                  },
                  





                

            
              },
              components:{
               

              }


              

          }
          </script>

          <style scoped>

          @import url('https://fonts.googleapis.com/css?family=Herr+Von+Muellerhoff|Mrs+Saint+Delafield|Qwigley');
          @import url('https://fonts.googleapis.com/css?family=Allura');

          .modal{
            display: block;
            background: rgba(30, 30, 30, 0.5);
            padding-left:20%; padding-right:20%; padding-top:2%;

          }

          hr {
              border: 0;
              border-top: 1px solid rgba(0,0,0,.1);

              margin-top: 0%;
              margin-bottom:0%; 
          }

          .modal-content{
            width:470px; 
          }

          .changepic{
                background-color: #f9f9f9;
                border-color: #ccc;
                color: #1e1e1e;
                font-size: 13px;
                font-weight: bold;
          }



          .modal-header h3 {
            margin-top: 0;
            color: #42b983;
          }

          .set-margin{
              margin-right:5px;
              background-color: #f6f6f6;
          }

          .set-height{
            height: 350px;
            padding: 1%;
            padding-left:2.5%; 
            position: relative;
          }


      .btn-cross{
            position:absolute;
            top:6px;
            right:6px;
            height:16px;
            width: 16px;
            cursor:pointer;
            color: #868686;
          }

          .btn-cross:hover{
            color: #005cb9;
          }

          .modal-body {
            margin: 20px 10px;
          }

          .modal-default-button {
            float: right;
          }

          .modal-enter {
            opacity: 0;
          }

          .modal-leave-active {
            opacity: 0;
          }
     


          .modal-dialog{
            margin-left:20%; 
            margin-top:2%;
          }

          .modal_title{
              font-size: 25px;
              line-height: 24px;
              border-bottom: 1px solid #e9e9e9;
              overflow: hidden;
              padding: 20px 24px;
              position: relative;
          }

          input{
          border-radius: 2px; 
          }

          .first-input{
            padding-left:1%;
            width:40%; 
            float:left
          }

          .second-input{
            width:50%;
            float:right;
          }

          input:focus{
            border: blue;
          }

          .snapblue{
            color: #005cb9;
            font-size: 15px;
          }
                                  
          .heightset{
              height: 18px;
          }

          .displayset{
           display: block;
           min-height: 18px;
           min-width: 18px;
           position: relative;
          }

          .displayset input{
            margin-left: 50px;
          }

          .sign-container{
            border-left: 2px solid #005cb9;
            border-radius: 8px;
            display: block;
            height: 55px;
            margin: 4px 0;
            overflow: visible;
            position: relative;
          }
          
          .sign-container::before{
            border-top-left-radius: 8px;
            border-top-width: 2px;
            top: -2px;
          }

         
                  
          .effect6:hover{
              box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
          }
                

          .effect6:active{
                box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
            
          }

                
                
          .effect6:before, .effect6:after
          {
              content:"";
              position:absolute; 
              z-index:-1;
              box-shadow:0 0 20px rgba(0,0,0,0.8);
              top:50%;
              bottom:0;
              left:10px;
              right:10px;
              border-radius:100px / 10px;
          }
    

          .modal-footer{
                justify-content: start;
          }

          .snap{
            font-size:2rem;
             position:absolute;
              bottom:50px;
               left:110px;
            color: #4c4c4c;
          }

     
           .snap:hover{
            text-decoration-line: underline;
            color: #005cb9;
          }

              .drag_input{
                  border: 0;
                  clip: rect(0 0 0 0);
                  height: 1px;
                  margin: -1px;
                  overflow: hidden;
                  padding: 0;
                  position: absolute;
                  white-space: nowrap;
                  width: 1px;
              }



      
          </style>


