                    
        <template>                  
                                
        <div class="col-lg-3 col-md-2 col-sm-12 col-xs-12 justify-content-center" id="sidebar"  >
                        
                <div class="template text-center"  >
                        
                            
                            <div class="btn-group "  >
                            
                            <button type="button"    class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Recipient
                                
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <div class="dropdown-menu" >
                            <a class="dropdown-item disabled" href="#">Disabled link</a>
                            <a class="dropdown-item disabled" href="#">Disabled link</a>
                            <a class="dropdown-item disabled" href="#">Disabled link</a>
                            <a class="dropdown-item disabled" href="#">Disabled link</a>

                            </div>
                            </div>
                            

                    <ul>  
                        <li> <span class="logo-img"><img height="100%;" class="img-responsive" style="box-sizing:border-box; "  src="../assets/icons/mydocuments.png" alt="" srcset=""></span><span class="span-dist">Signature</span></li>
                        <li> <span class="logo-img"><img height="100%;" class="img-responsive" style="box-sizing:border-box; "  src="../assets/icons/mydocuments.png" alt="" srcset=""></span><span class="span-dist">My Documents</span></li>
                        <li> <span class="logo-img"><img height="100%;" class="img-responsive" style="box-sizing:border-box; "  src="../assets/icons/mydocuments.png" alt="" srcset=""></span><span class="span-dist">My Documents</span></li>
                        <li> <span class="logo-img"><img height="100%;" class="img-responsive" style="box-sizing:border-box; "  src="../assets/icons/mydocuments.png" alt="" srcset=""></span><span class="span-dist">My Documents</span></li>

                        <li> <span class="logo-img"><img height="100%;" class="img-responsive" style="box-sizing:border-box; "  src="../assets/icons/mydocuments.png" alt="" srcset=""></span><span class="span-dist">My Documents</span></li>
                        <li> <span class="logo-img"><img height="100%;" class="img-responsive" style="box-sizing:border-box; "  src="../assets/icons/mydocuments.png" alt="" srcset=""></span><span class="span-dist">My Documents</span></li>
                        <li> <span class="logo-img"><img height="100%;" class="img-responsive" style="box-sizing:border-box; "  src="../assets/icons/mydocuments.png" alt="" srcset=""></span><span class="span-dist">My Documents</span></li>
                        <li> <span class="logo-img"><img height="100%;" class="img-responsive" style="box-sizing:border-box; "  src="../assets/icons/mydocuments.png" alt="" srcset=""></span><span class="span-dist">My Documents</span></li>


                    </ul>


                

                        </div>

        </div>  
                            </template>
                    
                    
                    
                    
                    <script>
export default {
  data() {
    return {
      skill: "",
      skills: [
        { skill: "Vue.js" },
        { skill: "Frontend Developer" },
        { skill: "Vue.js" },
        { skill: "Frontend Developer" },
        { skill: "Vue.js" },
        { skill: "Frontend Developer" },
        { skill: "Vue.js" },
        { skill: "Frontend Developer" },
        { skill: "Vue.js" },
        { skill: "Frontend Developer" },
        { skill: "Vue.js" },
        { skill: "Frontend Developer" },
        { skill: "Vue.js" },
        { skill: "Frontend Developer" },
        { skill: "Vue.js" },
        { skill: "Frontend Developer" },
        { skill: "Vue.js" },
        { skill: "Frontend Developer" },
        { skill: "Vue.js" },
        { skill: "Frontend Developer" },
        { skill: "Vue.js" },
        { skill: "Frontend Developer" },
        { skill: "Vue.js" }
      ]
    };
  },
  methods: {}
};
</script>   

                    <!-- Add "scoped" attribute to limit CSS to this component only -->
            <style scoped>
* {
  font-family: "Roboto", sans-serif;
  font-size: 17px;
}

ul li {
  list-style: none;
  padding: 2.5% 4%;
  border-bottom: 1px dotted #2b3d4f;
}

li:hover {
  color: #fdbb2d;
  text-decoration: underline;
  cursor: pointer;
}

#sidebar {
  /* height: 75vh; */
  color: #ffffff;
  width: 30%;
}



li span img {
  /* padding-left: 1%; */
  height: 17%;
  width: 17%;
}

#sidebar {
  color: #ffffff;
  padding: 0.5%;
}

.dropdown-item {
  font-size: 24px;
  font-weight: 100;
}
/* // hahdadkadah */

.btn-group {
  width: 40%;
}

.btn-group :nth-child(1) {
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-size: 34px;
}

button {
  background-color: #2b3d4f;
  color: #fdbb2d;
  border-radius: 5%;
  margin: 0%;
}

a:hover {
  text-decoration: underline;
}

.logo-img {
  width: auto;
  height: auto;
  object-fit: cover;
}
</style>
