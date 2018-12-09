              <template >
                <div class="text-center"  >

                  <div class="row" style="margin-top:10%">
                    <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12" >
                      
                    </div>
                    <div  class="col-md-4 col-lg-4 col-sm-4 col-xs-12" >
                      
                      <img src="../../assets/icons/esnotary.png"  >
                      <!-- <img  v-if="!flag" src="../../assets/icons/ednotary.png" width="170" height="72" alt=""> -->
                      <h4>Please log in to your account</h4>
                        
                      <login v-if="flag" :flag="flag" @gotclicked="flag = $event"> </login>                  
      
                    <p>
                    </p>
                      <!--Login password  -->
                    <div v-show="!flag">                
                      
                        <p>{{email}}</p>


                      <!-- ddnandadadbadba -->

        


                      <!-- asdkjbhbalhbafh -->
                        <form class="btn-set">
                          <div class="form-group" > 
                            <input type="password" v-model="password" class="form-control" style="width:90%"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password">
                          </div>
                        <button class="bbutton btn-width" @click.prevent="login"> Log IN</button>
                        </form>
                        <button class="btn btn-link"   @click="forgetpassword"><small>Forgot password</small></button>
                      </div>

                      <hr>
                  
                      <!-- for email -->
                      <div v-if="!flag" @click="change" >
                          <button class="btn btn-link"><small> Sign in as a different user</small></button>
                      </div>

                      <!--for password  -->
                      <div v-if="flag" style="margin-top:10%;">
                        <h6>Or log in via:</h6>
                        <img @click="commingsoon()" class="commingsoon" src="../../assets/icons/socialsupport.png" alt="">
                      </div>

                    </div>

                    <div  class="col-md-4 col-lg-4 col-sm-6 col-xs-12">     </div>

                  </div>

                <foot_footer></foot_footer>
                
                </div>

              </template> 

  <script>

        // import { required, email,} from "vuelidate/lib/validators";
        import login from "./login.vue"
        import foot_footer from "../footer/footer.vue"
              
          export default {
            data() {
              return {
                flag:true,
                email:'sidratariq48@gmail.com',
                password:''
              
              };
            },  
            components:{
              login,
              foot_footer
            }, 
            methods:{
              // use logic to disable and enable the button
              enteremail:function(){
                this.flag=!this.flag;
              },
              forgetpassword:function(){
                this.$router.push('/forget/sidratariq48@gmail.com')
              },

              login:function(){ 
                this.$router.push('/dashboard')

              },

              change:function(){
                this.email = '';
                this.flag = !this.flag;
              },

              commingsoon(){
                this.$router.push('/commingsoon');
              }

            

            },
          
          };
          </script>

              <style >
              @import url('https://fonts.googleapis.com/css?family=Roboto');

              

            
              

              .text-center{
                height: 100vh;
                overflow:hidden
              }
            

            
              .disable{
                  cursor: not-allowed;
                  pointer-events: none;
                  color:#c0c0c0;
                  background-color: #ffffff;
              }



          
              
              h5{
                font-family: 'Roboto', sans-serif;
                font-weight: bold;
              }

              img + h4,h4 + div{
                margin-top: 5%;
              }

              .form-group:first-child{
                padding-left:10%;
              }

                  .bbutton{
                  background-color:  #ffc820;
                  color: #333;
                  font-family: "Maven Pro","Helvetica Neue","HelveticaNeue",Helvetica,Arial,sans-serif;
                  font-size: 13px;
                  font-weight: bold;
                  letter-spacing: .66px;
                  line-height: 20px;
                  text-decoration: none;
                  text-transform: uppercase;
                  padding: 6px 18px;
                    border: none;
                }


                .btn-width{
                width: 80%;
              }

              .form-group:first-child{
                padding-left:10%;
              }

          
            .commingsoon:hover{
              box-shadow:0 1px 4px rgba(0, 91, 201, 0.3), 0 0 40px rgba(0, 92, 201, 0.1) inset;

            }

          </style>
