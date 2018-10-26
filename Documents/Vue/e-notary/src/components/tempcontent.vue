<template>
    <div class="col-md-9 col-lg-9 " >

<div class="row align-items-center" >
    <div class="col-lg-12">
    {{name}}
    </div>

 <div class="col-lg-12 col-md-2 col-sm-0 col-xs-0 justify-content-center"   >
                    
                    <div class="template text-center" >
                        {{name}}
                    </div>
                      <div class="scrollbar scrollbar-primary" >
                        <ul style="width:100%;">
                          <!-- <li v-for="(data, index) in skills" :key='index' ><a href="#">{{ data.skill }}</a>  
                          <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
                          </li> -->
                       
                     

                          
                        </ul>
                      

                    </div>

                    </div>  


    </div>

</div>


   
</template>


<script>
export default {
    data(){
        return{
            name:'NDA Agreement',
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
}
}

</script>


<style scoped>
* {
          font-family: "Roboto", sans-serif;
          font-size: 24px;
        }

        /* #sidebar {
          height: 520px;
          color: #ffffff;
        } */

        /* // hahdadkadah */

        .scrollbar {
          float: left;
          height: 450px;
          width: 100%;
          overflow-y: scroll;
        }

        button {
          background-color: #2b3d4f;
          color: #fdbb2d;
          font-size: 98%;
          font-weight: 700;
          font-style: italic;
          border: none;
          width:87%;
          margin-left: 13%;
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
</style>
