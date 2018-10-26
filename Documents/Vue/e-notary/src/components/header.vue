<template>


              <nav class="navbar navbar-expand-lg bg-dark row" > 
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon" ><img src=" ../assets/icons/mydocuments.png" alt="" srcset=""> </span>
                </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav" >

                        <li class="nav-item active col-lg-12 col-md-4">
                        <div class=" " >
                                <img @click="dashboard" src="../assets/logo.png"  height=100px;>
                                <span class="caret"></span>
                        </div>
                        </li>
                    
                        
                    
                      <li class="nav-item col-lg-11 col-md-5">
            
                          </li>
                        
                      <li class="nav-item col-lg-6 col-md-5">
            
                      </li>
                        <li class="nav-item col-lg-4 col-md-4">
                            <div class="sign" >
                              
                            </div>
                      </li>
                  
                  <li class="nav-item col-lg- col-md-1 " >
                <div>   
                    <img src="../assets/icons/ijlal.jpeg" class="nav-link dropdown-toggle  set-image-person  img-resposive" id="navbarDropdownMenuLink" data-toggle="dropdown" width="100" height="100"   >
          
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">3ETH</a>
                  <a class="dropdown-item" href="#">Setting</a>
                  <a class="dropdown-item" href="#">Log out</a>
                </div></div>
          </li>
        </ul>
      </div>
    </nav>


    </template>

    <script>
    export default {
      methods:{
        dashboard:function(){
          this.$router.push('/homepage')
        }
      }
    };
    </script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style  scoped>

    *{
      background-color:  #2B3D4F;
      
    }

    .bg-light{
    padding:0;
    }

    .sign{
      height:60%; margin-top:13%; background-color:white;  border-radius:12%;
    }
    .set-image {
        margin:4% 4%;
    }  

    .set-image-person{
        border:3px solid transparent; 
        margin:4%;
        border-radius:50%; 
    }

    .navbar{
      background-color: #2B3D4F;

    }

    .set-image-person:hover{
      cursor: pointer;
    }

    .set-image-person:active{
      background-color: #2B3D4F;
    }

    .navbar-expand-lg{
      background-color: #2B3D4F;
    }
    
    .bg-light{
      background-color: #2B3D4F;
    }

  





    </style>