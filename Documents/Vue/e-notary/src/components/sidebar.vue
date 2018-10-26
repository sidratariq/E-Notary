      
              <template>
                    
              <div id="sidebar"> 


                 <ul>    
                          <li> <span class="logo-img"><img  class="img-responsive"  src="../assets/icons/folder.png" alt="" srcset=""></span><span @click="mydocs" class="span-dist">My Documents</span></li>
                          <li><span><img  class="img-responsive" src="../assets/icons/inbox.png" alt="" srcset=""></span><span  @click="inbox"   class="span-dist">Inbox</span></li>
                          <li> <span><img class="img-responsive"  src="../assets/icons/sent.png" alt="" srcset=""></span><span  @click="sent" class="span-dist">Sent</span></li>
                          <li> <span><img class="img-responsive"  src="../assets/icons/saveas.png" alt="" srcset=""></span><span @click="draft" class="span-dist">Draft</span></li>
                          <li> <span><img class="img-responsive" src="../assets/icons/delete.png" alt="" srcset=""></span><span @click="deletee" class="span-dist">Delete</span></li>

                      </ul> 
  

    
                  
              </div>
                    
                  
                    


                
              </template>
    
    
    
    
    <script>
  export default {
   
 
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


    }
  };
  </script>   

      <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>


  * {
      font-family: "Roboto", sans-serif;
      font-size: 17px;
      background-color: #484848;
    }



      

      /* main-content */


   ul li {
    list-style: none;
    padding: 2.5% 4%;
   
  }
  li:hover {
    color: #fdbb2d;
    text-decoration: underline;
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
 /* !important */
         @media screen and (max-width: 992px) and (min-width: 390px)  {
        ul{
          visibility: hidden;
          display: none;
         
           }
        }
 
 
  </style>
