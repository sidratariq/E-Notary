<template>
<div>
     <head_head></head_head>

  <div class="wrapper" v-bind:class="compClasses">
        <!-- sidebar -->
                   <div id="sidebar-wrapper">
                        <ul class="sidebar-nav">
                        
                          <li><span><img   class="img-responsive" src="../assets/icons/folder.png" alt="" srcset=""></span><span  @click="inbox"   class="span-dist">Doc's</span></li>
                         
                          <li><span><img   class="img-responsive" src="../assets/icons/inbox.png" alt="" srcset=""></span><span  @click="inbox"   class="span-dist">Inbox</span></li>
                          <li> <span><img  class="img-responsive" src="../assets/icons/ethereum-wallet.png" alt="" srcset=""></span><span @click="wallet" class="span-dist">Wallet</span></li>
                          <li> <span><img  class="img-responsive" src="../assets/icons/verify.png" alt="" srcset=""></span><span @click="verify" class="span-dist">Verify</span></li>
                          <li> <span><img  class="img-responsive" src="../assets/icons/verify.png" alt="" srcset=""></span><span @click="wallet" class="span-dist">Invite</span></li>
                          <li> <span><img  class="img-responsive"  src="../assets/icons/verify.png" alt="" srcset=""></span><span @click="verify" class="span-dist">FAQ's</span></li>
                          <li> <span><img  class="img-responsive" alt="" srcset=""></span><span @click="wallet" class="span-dist"></span></li>

                        </ul>
                   </div>


          <div id="page-content-wrapper">
                <div class="container-fluid">
                    <div class="row">
                            <div  class="col-lg-12">
                                  
                                <a v-show="!available" v-on:click="available = !available"  id="menu-toggle"> 
                                  <div class="check"></div>
                                  <div class="check"></div>
                                  <div class="check"></div>

                                </a>
                                 <!-- <div class="row"> -->
                                 <!-- <sidebar class="col-lg-3 col-md-2"></sidebar> -->
                                 <dragdrop ></dragdrop>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
            </div>

</template>



<script>
import head_head from "./header.vue";
import sidebar from "./sidebar.vue";
import dragdrop from "./Dragdrop.vue";

export default {
  components: {
    head_head,
    sidebar,
    dragdrop
  },
  data() {
    return {
      available: false
    };
  },
     methods: {
      inbox(){
        this.$router.push('/inbox');
      },
      mydocs(){
        this.$router.push('/mydocs');
      },
      sent(){
        this.$router.push('/sent');
      },
      draft(){
        this.$router.push('/draft')
      },
      deletee(){
        this.$router.push('/delete')

      },
      wallet(){
        this.$router.push('/wallet')

      },
      verify(){
        this.$router.push('/verify')

      },


    },

  computed: {
    compClasses: function() {
      return {
        available: this.available
      };
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
      font-family: "Roboto", sans-serif;
      font-size: 17px;
    }

#sidebar-wrapper {
  z-index: 1;
  position: absolute;
  width: 0;
  height: 100%;
  overflow-y: hidden;
  background: #2B3D4F;
  opacity: 0.9;
}

/* Main content */

#page-content-wrapper {
  width: 100%;
  position: absolute;
  padding: 15px;
}

.check{
   width: 30px;
    height: 4px;
    background-color: #2B3D4F;
    margin: 6px 0;
}

/* sidebar styling*/
.sidebar-nav {
  padding: 0;

}

.sidebar-nav li {
  text-indent: 20px;
  line-height: 40px;
}

.sidebar-nav li  {
  display: block;
  text-decoration: none;
  color: #ddd;
}

.sidebar-nav li a:hover {
  background: #16a085;
}


/* change the width of sidebar to display */
/* fasad */
.available #sidebar-wrapper {
  width: 250px;
}

.available #page-content-wrapper {
  padding-left: 250px;
}

.page-content-wrapper a{
    visibility: hidden;
}


      /* main-content */


   ul li {
    list-style: none;
    padding: 2.5% 4%;
  }

  li:hover {
    color: #fdbb2d;
    cursor:pointer;
  }

  #sidebar{
           color: #ffffff;
            background-color: #484848;
            height: 100%;
  }

  .span-dist {
    margin-left: 2%;
  }
  li span img {
    padding-left: 1%;
    height: 17%;
    width: 17%;
  }
  .logo-img{
    width: auto;
    height: auto;  
    object-fit: cover;
}
/* fasad */
</style>
