                    <template>
                        
                            <div>

                <head_head></head_head>

                                <div class="row row-set">
                                    <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                    </div>
                                    <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12"  >


                                        <div>
                                            <!-- <img src="../../assets/icons/esnotary.png"  > -->
                                            <!-- <img src="../../assets/icons/docusig.png" alt=""> -->
                                            <h3>Sign Up</h3>
                                                  <form @submit.prevent="onSubmit">

                                                  <div class="row">
                                                  <div class="col-6">
                                                    
                                                    <input type="text" class="form-control" @blur="$v.firstname.$touch()"  v-model="firstname" placeholder="First Name" id="firstname"> 
                                                    <small v-if="!$v.firstname.alpha" :class="{invalid:!$v.firstname.alpha}">Please Enter a valid first name </small>
                                                    </div>

                                                  <div class="col-6">
                                                    <input type="text" class="form-control" @blur="$v.lastname.$touch()"  v-model="lastname" placeholder="Last Name"> 
                                                    <small v-if="!$v.lastname.alpha" :class="{invalid:!$v.lastname.alpha}">Please Enter a valid lastname </small>

                                                  </div>

                                                  <div class="col-12">  

                                                    <input type="email" id="email" 
                                                    v-model="email" 
                                                    @blur="$v.email.$touch()"
                                                    class="form-control" placeholder="Email"> 
                                                         <small v-if="flag" class="invalid"> Spaces are not allowed</small>
                                                         <small   :class="{invalid: true}" v-if="!$v.email.required">This field must not be empty.</small>
                                                         <small v-if="!$v.email.email"  :class="{invalid:true}">Provide a valid email like johndoe@domain.com</small>
                                                  </div>

                                                  <div class="col-12">
                                                    <input type="text" @blur="$v.company.$touch()" v-model="company" id="company" class="form-control" placeholder="Company">
                                                    <small v-if="!$v.company.minLen" :class="{invalid: !$v.company.minLen}">Company name must be 3 character long</small>
                                                  </div>

                                                  <div class="col-12">
                                                    <input type="text" class="form-control" @blur="$v.number.$touch()" v-model="number" placeholder="Phone no">
                                                    <small v-if="!$v.number.minLen" :class="{invalid:true}">Phone number must be 11 digit long</small>
                                                  </div>

                                                  <div class="col-12"> 
                                                    <input class="form-control" v-model="password" @blur="$v.password.$touch()" type="password" placeholder="Enter new password">
                                                    <small class="UI-info" v-if="!$v.password.minLen" :class="{invalid:true}">The password must be 6 character long</small>
                                                  </div>

                                                  <div class="col-12">
                                                    <input type="password" v-model="confirmPassword" @blur="$v.confirmPassword.$touch()" class="form-control" placeholder="Confirm password">
                                                    <small v-if="!$v.confirmPassword.sameAs && $v.confirmPassword.$invalid" :class="{invalid:true}">The password does not match</small>

                                                  </div>

                                                  <div class="col-12 form-check" :class="{termcondition:!$v.terms.$model}" >
                                                    <input type="checkbox" id="terms" v-model="terms" @change="$v.terms.$touch()"   class="form-check-input">Accept Terms and Conditions
                                                  </div>

                                                  
                                                  <!-- <small>{{$v.$invalid}}</small> -->
                                                  <!-- <small>{{$v.lastname.$invalid}}</small> -->
                                                  <!-- <small>{{$v.email}}</small> -->
                                                  <!-- <small>{{$v.company.$invalid}}</small> -->
                                                  <!-- <small>{{$v.number.$invalid}}</small> -->
                                                  <!-- <small>{{$v.password.$invalid}}</small> -->
                                                  <!-- <small>{{$v.confirmPassword.$invalid}}</small> -->
                                                  <!-- <small>{{$v.terms}}</small> -->









                                                </div>
                                                <button type="submit" :disabled="$v.$invalid" @click="loginEnter">Create Your account</button>
                                            </form>
                                                                    
                                            

                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                        
                                    </div>

                                </div>


                            
                            </div>
                    </template>

                    <script>
    import {
      required,
      email,
      numeric,
      minValue,
      minLength,
      sameAs,
      requiredUnless,
      helpers,
      maxLength,
      alpha,
      alphaNum
      
    } from "vuelidate/lib/validators";

    import head_head from '../header/header.vue'


    export default {
      data() {
        return {
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          confirmPassword: "",
          company: "",
          terms:false,
          number:''

        };
      },

      validations: {
        email: {
          required,
          email,
          
        },

        password: {
        required,
        minLen: minLength(6)
        },

        company:{
            required,
            minLen:minLength(3)
        },

        confirmPassword: {
        sameAs: sameAs(vm => {
        return vm.password
        })
        },

        terms: {
        required
        },

        number: {
            required,
            numeric,
            minLen: minLength(11),
            maxLen: maxLength(15)
            
          },

        firstname:{
          required,
          alpha
        },

        lastname:{
          required,
          alpha
        }
      },

        components:{
            head_head
        },
      methods: {
        loginEnter() {
            // if(this.$v.invalid){}

            console.log(this.$v.invalid);
            // this.flag = true;

          this.$router.push("/home");
        },
        onSubmit() {
          const formData = {
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword,
            terms: this.terms
          };
          console.log(formData);
        }
      },
      computed:{
        flag:function(){
          if (/\s/.test(this.$v.email.$model)) {
            return true
            }
          else{
            return false
          }
          
        }
      }
    };
    </script>

                    <style scoped>
    @import url("https://fonts.googleapis.com/css?family=Noto+Sans+SC");

    *{
      scroll-behavior: unset;
    }

    .row {
      text-align: center;
      overflow: hidden;
      margin: 0%;
    }

    h3 {
      text-transform: uppercase;
      font-family: "Noto Sans SC", sans-serif;
    }

    .container-fluid{
      height: 100vh;
      padding-top: 5%;
    }


    button {
      background-color: #ffce00;
      border: #ffce00;
      height: 3rem;
      width: 15rem;
      border-radius: 4px;
      font-weight: bolder;
      text-transform: uppercase;
    }

    form img,
    form h3 {
      text-align: center;
    }

    .termcondition{
      color: #d03238;
    }

    .invalid {
      text-align: left;
      color: #d03238;
      font-size: 12px;
      display: block;
    }

    .disabled{
        cursor: not-allowed;
        background-color: #cccccc;
    }

    .inline{
      text-align: left;
      margin-left: 10%;

    }

    form div{
      margin-top: 7px;
      margin-bottom: 7px;

    }

    .invalid_checkbox{
      color: red;
    }

    .row-set{
     margin: 10px;
    }

    </style>