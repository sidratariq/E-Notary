  <template>

      <div class="container-fluid" style="" >
        <div class="row">
        <head_head></head_head>
        <div class="col-2 col-xs-0  content-bar" >
          <btn_btn></btn_btn>
          <div>

            <h6 class="text-centerr">ENVELOPES</h6>
            <!-- <menu-icon style=" fill-color:#868686; padding-right:4px"></menu-icon> -->
          <router-link class="nav-link menuitem"  active-class="active" to="/inbox" exact tag="li">
          <i class="fas fa-box-open menuicon"></i>
          <a>Inbox </a></router-link>
          <router-link class="nav-link menuitem"  active-class="active" to="/sent" exact tag="li"><img src="../../assets/icons/sent.png" width="17px" height="18px" alt=""><a>Sent</a></router-link>
          <router-link class="nav-link menuitem"  active-class="active" tag="li" exact   to="/draft"><i class="far fa-edit menuicon"></i><a>Draft</a></router-link>
          <router-link class="nav-link menuitem"  active-class="active" tag="li" exact   to="/delete"><i class="fas fa-trash menuicon"></i><a>Delete</a></router-link>

          </div>

          <div class="envelopclass">

            <h6 class="text-centerr">quick views</h6>
          <router-link class="nav-link menuitem"  active-class="active" to="/inbox" exact tag="li"><a ><i class="fas fa-exclamation-circle menuicon"></i>   Actions Required </a></router-link>
          <router-link class="nav-link menuitem"   active-class="active" to="/sent" exact tag="li"><a ><i class="far fa-clock menuicon" ></i>    Waiting for Others</a></router-link>
          <router-link class="nav-link menuitem"  active-class="active" tag="li" exact to="/draft"><a ><i class="fas fa-exclamation-triangle menuicon"></i>  Expiring Soon</a></router-link>
          <router-link class="nav-link menuitem"  active-class="active" tag="li" exact to="/delete"><a><i class="fas fa-check menuicon"></i> Completed</a></router-link>
           </div>


           <folders></folders>

        </div>
      <div class="col-10 col-lg-10 col-md-10 col-xs-12 content-area " > 
        <!-- <inner_header></inner_header> -->

        <router-view></router-view></div>

        </div>
      </div>
  </template>

  <script>

  import head_head from '../header/header.vue';
  import btn_btn from './button.vue';
  // import inner_header from "./inbox/inbox_header.vue"
  import folders from "./createfolders.vue"

  export default {
    name: "HelloWorld",
    data() {
      return {
        id: this.$route.params.id,
        foldername:''
      };
    },

    components:{
        head_head,
        btn_btn,
        // inner_header,
        folders
    },
      methods:{
                  
                },
               
  };
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  *{
    overflow: hidden;
    /* border:1px solid green */
  }

  .container-fluid{
    height: 100vh;
  }

  .row{
    height: auto;
  }

  .content-bar{
    background-color: #f4f4f4;
    width: 100%;
    padding: 0px;
  }

  .text-centerr{

    height: auto;
    padding-left: 22px; 
    font-weight: 600;  
    font-family: "Maven Pro","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 13px;
    line-height: 18px;
    text-transform: uppercase;

  }

  .nav-link{
    line-height: 10px;
    margin: 4px 0px 4px 0px;
    padding-left: 20px; 



  }

  .envelopclass{
    margin-top:20px;
  }

  li a{
    color: #1e1e1e;
    font-weight: normal;
    font-size: 15px;
      padding: 5px 0px 5px 0px;
  margin-left:4px;

    
  }

  .nav-link:hover{
    background: #e9e9e9;
  }

  .haha::before{
    content: '\EA4F'
  }

  .seconddiv li a{
  padding-top: 5px;
  cursor: pointer;
  padding-bottom: 5px;
  }



  .menuitem {
    padding-top: 7px; 
  }

  a:hover{
    text-decoration: none;

  }

  a:focus{
                font-weight: bolder;
  }

  a:active{
                font-weight: bolder;

  }

  .menuitem:focus{
    box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

  }

  .content-area{
    background-color: white;
    padding: 0;
  }

  .setright{
       float: right;
   }

  .foldericon,.menuicon{
    color: #868686;
  }

  .hide{
    display: none;
  }

  .foldericon:hover{
    color: #2463d1;
    

  }

  .active{
    background: #e9e9e9;

  }

    @media screen and (max-width: 631px) {
       .content-bar{
         display: none;
       }
        }

  </style>
