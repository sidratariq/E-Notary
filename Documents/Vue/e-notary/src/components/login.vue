			<template>
			<!-- (35,186,156) -->
		<div class="limiter"  >
			<div class="container-login100 mx-0"  >
				<div class="wrap-login100" >
					<form class="login100-form validate-form"   >
						<div>
							<img src="../assets/logo.png" alt="" srcset="" class="img-responsive text-center"  >
							<span class="focus-input100" ><i class="fas fa-user"></i></span>
							
						</div>
						
						<span class="login100-form-title ">
							Login
						</span>

						<div class="wrap-input100 validate-input" data-validate = "username">
							<input class="input100" type="text" name="username" placeholder="username">
						</div>

					
						<div class="wrap-input100 validate-input" data-validate="Enter password">
							<input class="input100" type="password" name="pass" placeholder="Password">
						</div>

						<div class="contact100-form-checkbox">
							<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
							<label class="label-checkbox100" for="ckb1">
								Remember me
							</label>
						</div>

					

						<div class="container-login100-form-btn">
							<button class="login100-form-btn" @click="godashboard">
								Login
							</button>
						</div>

						<div class="text-center" style="margin: auto">
							<a class="txt1" href="#">
								Forgot Password?
							</a>
						</div>

						
					</form>
				<!-- </div> -->
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
		godashboard(){
			this.$router.push('/homepage');
		}
	}
	};
	</script scoped>
			@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
			<style src="./css/main.css" scoped>

	</style>
