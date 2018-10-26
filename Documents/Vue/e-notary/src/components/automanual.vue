  <template>
  <div class="container-fluid "  >
  <div class="row" style="padding:2%" >
        <div class="col-lg-6" ><button class="btn-custom" @click="change()" style="" >Automatic</button></div>
        <div class="col-lg-6" ><button class="btn-custom"  @click="change()" >Manual</button> </div>
  </div> 

  
      <div  v-show="flag" >
        <div class="row">
            <div class="col-lg-6 set-margin" >
                <div class="set-color" >

                              <span class="text-uppercase" id="change">  DRAG FILE HERE </span> 
                              <img   class="img-responsive mx-auto d-block " src="../assets/icons/Drag_file.png" alt="" srcset="" height="auto" width="auto">
                              
                              <div class="box">
                                <input type="file" name="file-3[]" id="file-3" class="inputfile inputfile-3" data-multiple-caption="{count} files selected" multiple />
                                <label for="file-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> <span>Choose a file&hellip;</span></label>
                              </div>
                              </div>
              </div>   
            <div class="col-lg-6 set-margin" > 
                    <div class="set-color set-color1">
                              <span class="mx-auto d-block" id="change">  Select document from your library </span> 
                              <img   class="img-responsive mx-auto d-block "  alt="" srcset="" height="auto" width="auto">

                              <div class="btn-group">
                                    <button type="button" class="btn btn-danger">Your Document</button>
                                    <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div class="dropdown-menu">
                                      <a class="dropdown-item" href="#">Action</a>
                                      <a class="dropdown-item" href="#">Another action</a>
                                      <a class="dropdown-item" href="#">Something else here</a>
                                      <div class="dropdown-divider"></div>
                                      <a class="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>
                    </div>
            </div>
 
      </div>
                          <button  class="button2"> Verify</button>

      </div>

      
    <div v-show="!flag" class="row">
          
          <div class="col-lg-12 col-md-12 col-sm-12 col-sm-12 "  >

                <div class=" rounded background text-center"      >
                          <div class="mid" >
                              <span class="text-uppercase" id="change">  DRAG FILE HERE </span> 
                              
                              <img   class="img-responsive mx-auto d-block " src="../assets/icons/Drag_file.png" alt="" srcset="" height="auto" width="auto">
                              <div class="box">
                                <input type="file" name="file-3[]" id="file-3" class="inputfile inputfile-3" data-multiple-caption="{count} files selected" multiple />
                                <label for="file-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> <span>Choose a file&hellip;</span></label>
                              </div>
                          </div>
                          <button  class="button1"> Verify</button>
                        </div>
                              

                </div>
                
          
          </div>



      </div>

      
        
  </template>

  <script>
  export default {
    data() {
      return {
        flag: false
      };
    },

    methods: {
      change: function() {
        if (this.flag == true) {
          this.flag = false;
        } else {
          this.flag = true;
        }
      }
    }
  };
  </script>


  <style>

  *{
    text-align: center;
  }

    .set-margin{
    color: #fdbb2d;
    font-size: 130%;
    font-weight: 700;
    font-style: italic;
               }

  .set-color{
    background-color: #ffffff;
    border-radius: 2%;
    padding: 19%;
               }

  .btn-custom{
    width:100%; border:1px solid black;
             }

  .set-color1{
   padding: 26%;
  }

  .button2{
    margin:2% 45%; 
    display: inline-block;
    padding: 15px 25px;
    font-size: 14px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #2b3d4f;
    border-radius: 15px;
    border: none;
    box-shadow: 0 9px #151f28;
  }

  .button1 {
    display: inline-block;
    padding: 15px 25px;
    font-size: 18px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #2b3d4f;
    border-radius: 15px;
    border: none;
    box-shadow: 0 9px #151f28;
    margin-top: 30px;
  }

  .button1:hover {
    cursor: pointer;
    box-shadow: 0 9px white;
  }

  .background {
    background-color: white;
    }

  .text {
    color: #ffffff;
    font-style: italic;
    text-align: justify;
        }
        
  button:hover {
    cursor: pointer;
  }

  .mid {
    border: 3px dashed black;
  }

  .rounded {
    border-radius: 50%;
    padding: 8% 27%;
  }

  .rounded1 {
    padding: 8% 20%;
  }

  .text-center {
    color: #fdbb2d;
    font-size: 150%;
    font-weight: 700;
    font-style: italic;
    text-align: justify;
  }

  .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .inputfile + label {
    max-width: 80%;
    font-size: 1.25rem;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    padding: 0.625rem 1.25rem;
  }

  .no-js .inputfile + label {
    display: none;
  }

  .inputfile:focus + label,
  .inputfile.has-focus + label {
    outline: 1px dotted #000;
    outline: -webkit-focus-ring-color auto 5px;
  }

  .inputfile + label svg {
    width: 1em;
    height: 1em;
    vertical-align: middle;
    fill: currentColor;
    margin-top: -0.25em;
    margin-right: 0.25em;
  }

  /* style 3 */

  .inputfile-3 + label {
    color: #d3394c;
  }

  .inputfile-3:focus + label,
  .inputfile-3.has-focus + label,
  .inputfile-3 + label:hover {
    color: #722040;
  }

  @media screen and (max-width: 50em) {
    .inputfile-6 + label strong {
      display: block;
    }
  }
  </style>
