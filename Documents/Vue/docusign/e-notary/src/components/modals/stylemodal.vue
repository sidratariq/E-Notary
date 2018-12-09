<template>
       <div class="setheight">
              <table class="stylesign">
                <tr v-for="(key,index) in 10" :key="index" class="apply"  >
                  <td style="width:10%"><span class="heightset displayset">
                    <input type="radio" class="custom-control-input set-visibility"   id="defaultUnchecked" name="defaultExampleRadios">
                    <!-- <input type="radio" > -->
                    </span></td>
                    <td>
                        <div class="sign-container">
                          
                          <div class="signby">
                            Signed By
                          </div>


                          <span class="font font-style" :style="{'font-family': fontstyles[index]}"  >
                            {{fullname}}
                          </span>

                          <div class="bottom">{{hash}}</div>
                        </div>
              
                    </td>

                    <!-- Initials -->
                    <td style="width:45%; ">
                        <div class="sign-container">
                          
                          <div class="signby">
                            DS
                          </div>

                          <span class="font" :style="{'font-family': fontstyles[index]}">
                            {{initial}}
                          </span>

                          <!-- <div class="bottom"></div> -->
                        </div>
              
                    </td>

                </tr>

              </table>
            </div>
</template>

<script>
export default {
  props:['fullname'],
data(){
          return {
            display:1,
            hash:'AE9DB71A4A854B1...',
            fontstyles:[
              "'Ruthie', cursive",

            "'Great Vibes', cursive",
            "'Cookie', cursive",
            "'Sacramento', cursive",
            "'Charmonman', cursive",
           
            "'Alex Brush', cursive",
            "'Mr Dafoe', cursive",
            "'Condiment', cursive",
            "'Pacifico', cursive",
            "'Homemade Apple', cursive",
            
            ]
          }
        },

computed:{
        initial:function(){
          return  this.fullname.split(' ')[0].charAt(0) + this.fullname.split(' ')[1].charAt(0)
              }
            }
      
        
}
</script>

<style scoped>

       @import url('https://fonts.googleapis.com/css?family=Alex+Brush|Charmonman|Condiment|Cookie|Great+Vibes|Homemade+Apple|Mr+Dafoe|Pacifico|Ruthie|Sacramento');                   
            .stylesign{
              background: #eaeaea;
              border: 0;
              border-collapse: separate;
              border-spacing: 0 1px;
              color: #1e1e1e;
              width: 100%;
              overflow-y: auto;
            }

            .setheight{
              height:300px;  overflow:scroll; overflow-x:hidden;
            }

            tr{
            margin: 2%;
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

            .set-visibility{
              z-index: unset;
              opacity: 1;
              color: #005cb9;
              height: 15px;
              width: 23px;
            }


            .signby{
            font-weight: 600;
            top: -4px;
            font-size: 8px;
            left: 21px;
            position: absolute;
            }

      
            .bottom {
            font-size: 8px;
            font-weight: 600;

            left: 21px;
            position: absolute;
            bottom: 0px;
            }

            .font{
              font-size: 25px;
              position: absolute;
              left: 18px;
              top: 8px;
              /* font-family: 'Herr Von Muellerhoff', cursive;
              font-family: 'Qwigley', cursive; */
              /* // font-family: 'Allura', cursive; */
              font-family: 'Mrs Saint Delafield', cursive;

            }

   

  /* // global css */
        
             tr:hover{
               opacity: 0.75;
               background-color: #BBC2C2;
             }

       


</style>
