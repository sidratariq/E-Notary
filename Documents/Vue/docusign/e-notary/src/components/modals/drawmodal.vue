      <template>
        <div class="outerdiv" onselectstart="return false">
                <div class="maindiv">
                  
                  
                  <div class="sig-panel first">
                      <span class="snap" @click="clear()">clear</span>
                      <vueSignature ref="signature"  :sigOption="option" ></vueSignature> 
                      <hr>

                      
                  </div>


                  <div class="sig-panel second ">
                                              <span class="snap1" @click="clear">clear</span>

                      <vueSignature ref="signature" :sigOption="option"  ></vueSignature> 
                      <hr>
                  </div>

                


          </div>
          <small class="text-muted">
            Accepted File Formats: GIF, JPG, PNG, BMP. Max file size 200KB.

                  </small>


        </div>
          

      </template>

      <script>

      export default {
          data:function(){
            return{
              option:{
                  penColor:"rgb(0, 0, 0)",
                  backgroundColor:"rgb(255,255,255)"
              }
            }
          },
          methods:{
         
        
          clear(){
              var _this = this;
              _this.$refs.signature.clear();
              // console.log(this.$refs.signature)
          },

          undo(){
              var _this = this;
              _this.$refs.signature.undo();
          },
        
         

          }
      }
      </script>

      <style scoped>

        #mysignature{
            height: 234px;
        }

        #myinitial{
            height: 234px;
            width: 336px;

            
        }
      .outerdiv{
        padding: 2%;
        background-color: #eaeaea;

      }

      

      .sig-panel {
          border: 1px dashed #ccc;
          cursor: default;
          height: 234px;
          position: relative;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
      }

      .maindiv{
        display:flex;
        width:100%; 
        background: #eaeaea; 
      }

      .first{
        width:60%;
        margin-right:3%;
        position: relative;

      }

      .second{
        width: 38%;
        position: relative;
      }

      .snap{
        position: absolute;
        top:1%;
        right:1%;
        color: #005cb9;
            z-index: 999;
      }

      .snap1:hover, .snap:hover{
        text-decoration: underline;
      }

      .snap1{
        position: absolute;
        right: 4%;
        color: #005cb9;
            z-index: 999;

      }






      </style>
