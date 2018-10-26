        <template>
        <div>
           <div class="limiter"  >
		<div class="container-login100"  >
			<div class="wrap-login100" >
				<form class="login100-form validate-form"   >
					<div style="padding-left: 5%; "  >
						<img src="../assets/logo.png" alt="" srcset="" class="img-responsive text-center"  >
					</div>
					
				

					<div class="wrap-input100 validate-input" data-validate = "First Name">
						<input class="input100" type="text" name="username" placeholder="First Name">
					</div>

					<div class="wrap-input100 validate-input" data-validate = "First Name">
						<input class="input100" type="text" name="username" placeholder="Last Name">
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Email">
						<input class="input100" type="text" name="username" placeholder="Email">
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<input class="input100" type="password" name="pass" placeholder="Password">
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Confirm Password">
						<input class="input100" type="text" name="username" placeholder="Confirm Password">
					</div>

						

					<div class="container-login100-form-btn">
						<button class="login100-form-btn" @click="gologin">
							Register
						</button>
					</div>


					
				</form>
			</div>
		</div>

	</div>
	<div id="dropDownSelect1"></div>
</div>
	

        </template>

        <script>
export default {
  methods: {
    addUser: function() {
      alert("do nothing");
    },
    gologin(){
        this.$router.push('/login');
    }
  }
};
</script>

       
<style src="./css/main.css" scoped>

</style>


