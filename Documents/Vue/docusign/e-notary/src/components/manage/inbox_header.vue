<template>
        <div class=""  >



                             <div class="row sethidden"  v-if="!checked">
                    

                            <div class="col-lg-7 ">
                                <span class="setinbox set" style="" >Inbox</span>
                            </div>

                            <div class="col-lg-5 searchbar">
                             <search></search>
                            </div> 
                            
                                      
                           </div>
                    
                             <div class=" sethidden topset" style="padding-top:18px" v-if="checked">
                                <div class="row" >    
                                    <div class="col-1 topset">
                                     <input type="checkbox" id="checkbox" v-model="checked" class="checkbox">
                                    </div>
                                    <div class="col-2 topset">
                                     <span class="">{{nooffilesselected}}  Selected</span>
                                    </div>
                                    <div class="col-2">
                                        <button class="btn  btn-sm apply " type="button" >
                                           MOVE
                                        </button>
                                    </div>
                                    <div class="btn-group" >
                                      <button class="btn  btn-sm dropdown-toggle apply" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        MORE
                                      </button>
                                      <div class="dropdown-menu">
                                           <a class="dropdown-item" href="#">Export As CSV</a>
                                           <a class="dropdown-item" href="#">Delete</a>
                                      </div>
                                    </div>
                                </div>         
                    </div>   

                     
        </div>
     
</template>

<script>
        import search from './search/search.vue'

export default {
    props:[
        'checked','nooffilesselected'
    ],
  components:{
                search
            }
}
</script>

<style scoped>
        
        .setpadding{
            padding-left: 1%;
        }

        .setborder{
        border-bottom: 1px solid rgba(0,0,0,.1);
        }

           .sethidden{
              max-height: 64px;
           }

             .topset{
            padding-top:7px; 
        }


        .apply{
              color: #000000;
              background-color: #f9f9f9;
              border-color: #ccc;
        }

         .setinbox{
            font-family: "Maven Pro","Helvetica Neue",Helvetica,Arial,sans-serif;
            font-size: 20px;
            font-weight: 600;
            margin: 0%;
            bottom:4px; position:absolute;
        }

        


        
</style>
