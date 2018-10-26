  <template>
            <div class="container-fluid" >
    <head_head></head_head>
    <div class="row"  >
    <sidebar class="col-lg-3 col-md-2"></sidebar>
    

    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12 set-padding" >
              <div class="set-background" >
                <div class="row title"  >
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" >

                  <label >Wallet Info</label>
                </div>
                </div>


                  <div class="row bal-addr-set"  >
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 " >

                  <label class="">public address</label>
                </div>
                <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                  <div class="row" >
                  <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                  <label>0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B</label>
                  
                  </div>
                    <div class=" col-lg-1 col-md-1 col-sm-1"></div>
                        <button class="btn btn-primary bouton-image monBouton"></button>
                  </div>


                  </div>

                  </div>

                    <div class="row bal-addr-set"  >
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 " >

                  <label >Balance</label>
                </div>
                <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                  <div class="row" >
                  <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                  <label>0.11228052628856924 Ether</label>
                  
                  </div>
                    <div class=" col-lg-1 col-md-1 col-sm-1"></div>
                        <button class="btn btn-primary bouton-image monBouton"></button>
                  </div>


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

export default {
  components: {
    head_head,
    sidebar
  },
  data() {
    return {
      template: {
        subject: "NDA Document",
        date: "12/12/18",
       
      }
    };
  }
};
</script>

    <style>
    .title{
      height: 20%;
      color: #fdbb2d;
      font-size: 150%;
      font-weight: 700;
      text-align: center;

    }

    .set-padding{
        padding:5%;
    }

    .set-background{
        height:98%;  background-color:white;  padding:0px 40px;
    }


    .bouton-image:before {
      content: "";
      width: 16px;
      height: 16px;
      display: inline-block;
      margin-right: 5px;
      vertical-align: text-top;
      background-color: transparent;
      background-position : center center;
      background-repeat:no-repeat;
     }

      .text-center {
      font-style: italic;
      text-transform: uppercase;
       }
    
      .monBouton:before{
          background-image : url(http://icons.iconarchive.com/icons/fatcow/farm-fresh/16/accept-icon.png);
      }

      .bal-addr-set{
        height:15%;
        font-size: 120%;
        font-weight: 300;
           }
    </style>
                  