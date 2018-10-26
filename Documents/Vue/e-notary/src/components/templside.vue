                  
                          <template>                  
                              
                    <div class="col-lg-3 col-md-2 col-sm-0 col-xs-0 justify-content-center" id="sidebar"  >
                    
                    <div class="template text-center" >
                      
                      <button style="" >Templates</button>
                
                      <div class="scrollbar scrollbar-primary" >
                        <ul style="width:100%;">
                          <li v-for="(data, index) in skills" :key='index' >
                            <a href="#">
                    {{ data.skill }}

                            </a>
                    <i class="fa fa-minus-circle" ></i>
                  </li>
                        </ul>
                      </div>

                    </div>

                    </div>  
                          </template>
                
                
                
                
                <script>
        export default {
        data() {
            return {
              skill: '',
              skills: [
                { "skill": "Vue.js"},
                { "skill": "Frontend Developer"},
                        { "skill": "Vue.js"},
                { "skill": "Frontend Developer"},
                        { "skill": "Vue.js"},
                { "skill": "Frontend Developer"},
                        { "skill": "Vue.js"},
                { "skill": "Frontend Developer"},
                        { "skill": "Vue.js"},
                { "skill": "Frontend Developer"},
                { "skill": "Vue.js"},
                { "skill": "Frontend Developer"},
                        { "skill": "Vue.js"},
                { "skill": "Frontend Developer"},
                        { "skill": "Vue.js"},
                { "skill": "Frontend Developer"},
                        { "skill": "Vue.js"},
                { "skill": "Frontend Developer"},
                        { "skill": "Vue.js"},
                { "skill": "Frontend Developer"},
                { "skill": "Vue.js"},
                { "skill": "Frontend Developer"},
                        { "skill": "Vue.js"},
                { "skill": "Frontend Developer"},
                        { "skill": "Vue.js"},
                { "skill": "Frontend Developer"},
                        { "skill": "Vue.js"},
                { "skill": "Frontend Developer"},
                        { "skill": "Vue.js"},
                { "skill": "Frontend Developer"},

              ]
            }
          },
          methods: {}
        };
        </script>   

                  <!-- Add "scoped" attribute to limit CSS to this component only -->
        <style scoped>
        * {
          font-family: "Roboto", sans-serif;
          font-size: 24px;
        }

        #sidebar {
          
          height: 520px;
            color: #ffffff;
            padding: 0.5%;
        }

        /* // hahdadkadah */

        .scrollbar {
          float: left;
          height: 450px;
          width: 100%;
          background:  #23BA9C;
          overflow-y: scroll;
        }

        button {
          background-color: #2b3d4f;
          color: #fdbb2d;
          font-size: 98%;
          font-weight: 700;
          font-style: italic;
          border: none;
          width:100%;
          /* margin-left: 13%; */
        }

        .scrollbar-primary::-webkit-scrollbar {
          width: 12px;
          background-color: white;
        }

        li a{
          font-size: 70%;
          color: #ffffff;font-weight: 450;
          font-style: bold;
       }


            ul{
                    padding: 0%;
            }
                

        

        ul li{
          list-style: none;
          line-height:initial;
          
          border-left: 1px solid #2b3d4f;
          border-bottom: 1px solid #2b3d4f;

          padding:2%;
          margin:0;
        background-color: rgb(201, 76, 76); 

        }

        /* ul a { padding: 5px; display: block; } */
        .scrollbar-primary::-webkit-scrollbar-thumb {
          background-color: #fdbb2d;
        }

        a:hover{
          text-decoration: underline;
        }

        i {
  float:right;
  cursor:pointer;
}


        /* !important */
        @media screen and (max-width: 992px) and (min-width: 390px)  {
          ul{
            visibility: hidden;
            display: none;
            /* color: #23BA9C; */
            /* background-color: red; */
          }
          }
        </style>
