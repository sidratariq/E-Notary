                <template>
                    
                        <!-- <div class="container-fluid"> -->


                            <div class="row ">
                                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">

                                </div>
                                <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12"  >

                                    

                                    <div class="center">
                                        <img src="../../assets/icons/docusig.png" alt="">
                                        <h3>Sign Up</h3>
                                        <div class="row">
                                          <div class="col-sm-12">
                                            <form @submit.prevent="">

                                              <div class="row">
                                              <div class="col-6">
                                                <input type="text" class="form-control" placeholder="First Name" id="firstname" @blur="$v.firstname.$touch()"> 
                                              </div>
                                              <div class="col-6">
                                                <input type="text" class="form-control" placeholder="Last Name"> 
                                              </div>
                                              <div class="col-12">
                                                <input type="text" class="form-control" placeholder="Last Name"> 
                                              </div>
                                            </div>
                                        </form>                            

                                          </div>
                                        </div>                                                                              
                                            

                                            </div>

                                            <button @click.prevent="loginEnter" >Sign Up</button>
                                           
                                        
<!-- // :class="{disabled:$v.$invalid}"  -->
                                    </div>
                                </div>
                                <!-- <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12"> -->
                                    <!--  -->
                                <!-- </div> -->

                            <!-- </div> -->


                        
                        <!-- </div> -->
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
  helpers
} from "vuelidate/lib/validators";

const alpha = helpers.regex("alpha", /^[a-zA-Z]*$/);

export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      company: "",
      flag: false,
      terms: false
    };
  },

  validations: {
    email: {
      required,
      email
    },

    password: {
      required,
      minLen: minLength(6)
    },

    company: {
      required,
      minLen: minLength(3)
    },

    confirmPassword: {
      sameAs: sameAs(vm => {
        return vm.password;
      })
    },

    terms: {
      required
    },

    firstname: {
      required,
      alpha
    },

    lastname: {
      required,
      alpha
    }
  },

  components: {},
  methods: {
    loginEnter() {
      // if(this.$v.invalid){}

      // console.log(this.$v.invalid);
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
  }
};
</script>

                <style scoped>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+SC");

* {
  scroll-behavior: unset;
}

.row {
  background-color: rgb(244, 244, 244);
  height: 100vh;
  text-align: center;
}

h3 {
  text-transform: uppercase;
  font-family: "Noto Sans SC", sans-serif;
  margin: 10px 0px;
}

.center {
  margin-top: 10%;
}

label.half {
  vertical-align: top;
  width: 48%;
  padding-right: 5%;
  display: inline-block;
}

.full {
  width: 90%;
  display: inline-block;
  margin-left: 0%;
}

label {
  border-radius: 2px;
}

form label input {
  font-weight: 400;
  line-height: 32px;
  margin: 2px;
}

button {
  background-color: #ffce00;
  border: #ffce00;
  height: 3rem;
  width: 15rem;
  border-radius: 4px;
  font-weight: 400 bold;
}

form img,
form h3 {
  text-align: center;
}

label input {
  display: block;
  color: #4e4e4e;
  margin-bottom: 6px;
}

.field-label-empty {
  display: none;
}

.half half-second {
  width: 50%;
  margin-left: 2%;
  padding-right: 0%;
}

.full-input {
  border-radius: 2px;
  width: 100%;
}

.invalid {
  margin: 1px 0 2px;
  text-align: left;
  color: #d03238;
  font-size: 12px;
}

.UI-info {
  display: inline;
}

.disabled {
  cursor: not-allowed;
  background-color: #cccccc;
}

.inline {
  text-align: left;
  margin-left: 10%;
}

input[type="checkbox"] {
  margin: 0%;
}

.invalid_checkbox {
  color: red;
}
</style>




----------------------
<form action="">
                                        
                                            <div  >
                                        
                                            <label class="half">
                                            <div class="field-label-empty">&nbsp;</div>
                                            <input type="text"

                                            class="form-control" placeholder="First Name" id="firstname" @blur="$v.firstname.$touch()"> 
                                            <!-- <div :class="invalid">Please enter a valid firstname</div> -->
                                            <!-- <div> Please Enter your first name </div> -->
                                            </label>

                                            <label class="half half-second">
                                            <div class="field-label-empty">&nbsp;</div>
                                            <input type="text" class="form-control" placeholder="Last Name"> 
                                            <!-- <div :class="invalid">Please enter a valid lastname</div> -->
                                            <!-- <div> Please Enter your last name </div> -->


                                            </label>

                                            <label class="full">
                                            <div class="field-label-empty">&nbsp;</div>
                                            <input class="form-control" placeholder="Enter your email" 
                                            type="email"  id="email"
                                            @blur="$v.email.$touch()"
                                            v-model="email">

                                           <div class="UI-info" v-if="$v.email.$error" :class="{invalid: $v.email.$error}">Please enter an email</div>
                                            <span v-if="$v.email.$error">&nbsp; </span>
                                           <div class="UI-info" v-if="!$v.email.email" :class="{invalid: $v.email.$error}">Please provide a valid email</div>
                                            <span v-if="$v.email.$error">&nbsp; </span>
                                           
                                            <div class="UI-info" v-if="!$v.email.required && flag" :class="{invalid:true}">This field must not be empty</div>
                                            
                                            <!-- <p>{{!$v.email.email}}</p> -->
                                            </label>
                                        

                                            <label class="full">
                                            <div class="field-label-empty">&nbsp;</div>
                                            <input type="text" class="form-control"
                                            id="comany"
                                            @blur="$v.company.$touch"
                                            v-model="company"
                                            placeholder="Company"> 
                                            <div class="UI-info" v-if="!$v.company.minLen" :class="{invalid:true}" >The company must be 3 character long</div>


                                            </label>


                                            <label class="full">
                                            <div class="field-label-empty">&nbsp;</div>
                                            <input type="password" class="form-control"
                                            id="password"
                                            @blur="$v.password.touch()"
                                            v-model="password" placeholder="Password">
                                            <div class="UI-info" v-if="!$v.password.minLen" :class="{invalid:true}">The password must be 6 character long</div>
                                               </label>


                                            <label class="full">
                                            <div class="field-label-empty">&nbsp;</div>
                                            <input type="password"
                                            id="confirmpassword"
                                            @blur="$v.confirmPassword.$touch()"
                                            v-model="confirmPassword" class="form-control" placeholder="Confirm Password"> 
                                            <div v-if="!$v.confirmPassword.sameAs && $v.confirmPassword.$invalid" :class="{invalid:true}">The password does not match</div>
                                            </label>
                                        
                                            
                                              <div class="inline" >
                                                <input
                                                        type="checkbox"
                                                        id="terms"
                                                        @change="$v.terms.$touch()"
                                                        v-model="terms">
                                                      <span>&nbsp;</span>
                                                <label :class="{invalid_checkbox: !$v.terms.$model}" for="terms" >Accept Terms of Use</label>
                                              </div>                                  
                                            

                                            </div>

                                            <button @click.prevent="loginEnter" :class="{disabled:$v.$invalid}">Sign Up</button>
                                           
                                        </form>    