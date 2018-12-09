<template>
<div>
            <form>
                    <div class="form-group" > 
                          <input type="email" v-model="email" class="form-control"  style="width:90%" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    
                    <button class="bbutton btn-width"  @click.prevent="clickhappened()">Continue</button>

            </form>

                    <button class="btn btn-link" @click="signup" ><small>No account? Sign up for free</small></button>
</div>
</template>

<script>
export default {
props:{
    
    flag:{

    },

    email:{

    }
},

methods:{

   clickhappened(){
        this.flag = !this.flag;
        this.$emit('gotclicked',this.flag,this.email)

    },
     signup(){
        this.$router.push('/signup');
    }
}

}

</script>

<style scoped>

       
</style>




