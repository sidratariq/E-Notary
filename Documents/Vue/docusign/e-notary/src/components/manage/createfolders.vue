  <template>
        
                <div class="envelopclass"  >

                       <div>
                    <ul  style="padding:0px 24px">
                    <li id="mylist" >
                      <span @click="avalible = !avalible" ><i class="fas fa-caret-down menuicon"></i></span>
                     FOLDERS
                    <span class="setright" data-toggle="modal" data-target="#myModal"><i class="fas fa-plus foldericon"></i></span>
                        <ul style="padding:0px 3px 0px 24px" :class="{hide:avalible}">
                        <li class="whenhover" id="subfolder"><i class="fas fa-folder menuicon" ></i>F1 <span class="" @click="subfolder($event)"><i class="fas fa-ellipsis-v setright foldericon setdropdown">
                            <div class="dropdown">
                            <ul>
                              <li>Rename</li>
                              <li>Move</li>
                              <li @click="rename($event)">Delete</li>
                              <li @click="subfolder($event)">NewSubfolder</li>
                            </ul>
                        </div>

                        </i>
                      
                        </span></li>
                        <li class="whenhover" id="subfolder"><i class="fas fa-folder menuicon"></i>F1 <span class="setdropdown" @click="subfolder($event)" > <i class="fas fa-ellipsis-v setright foldericon"></i> 
                        </span>  
                        </li>
                        </ul>   
                        </li>
                    </ul>
            
                     </div>    

  <div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <h4 >New Folder</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>

      </div>
      <form @submit.prevent="">
  <div class="form-group" style="padding-left: 10px; padding-right: 10px;">
    <label for="foldername">Folder name</label>
    <input type="text" class="form-control"  v-model="foldername" id="foldername" aria-describedby="emailHelp" placeholder="Enter email">
  
  </div>

    <div class="modal-footer">
        <button type="button" @click="chalo()" class="btn btn-primary" data-dismiss="modal">Create</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>

      </div>

</form>
      
    </div>

  </div>
</div> 



           <!--okok  -->

           </div>
  </template>

  <script>

 

  export default {
    name: "HelloWorld",
    data() {
      return {
        avalible:false,
        foldername:'',
        subfoldername:'ok',
        newname:'chalrhaahai'
      };
    },

    components:{
     


    },
      methods:{
                    chalo(){
                        let newfolder = document.createElement('li')
                        let t = document.createTextNode(this.foldername)
                        newfolder.appendChild(t)
                        newfolder.className ='fas fa-folder'
                       

                        document.getElementById('mylist').appendChild(newfolder)

                    },
                     subfolder($event){
                let parent = $event.currentTarget.parentElement.id;
                let newfolder = document.createElement('li')
                let name = document.createTextNode(this.subfoldername)
                newfolder.appendChild(name)
                newfolder.className = 'fas fa-folder'
                // parent.appendChild(newfolder)
                        document.getElementById(parent).appendChild(newfolder)

                },

                rename($event){
                 console.log($event.currentTarget.parentElement) 
                },
                delete($event){

                }
                
                }
  };  
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  .envelopclass{
    margin-top:20px;
  }

  ul{
      padding: 0%
  }

   ul li{
       list-style: none;
       
   }

   .setright{
       float: right;
   }

    .menuicon{
    color: #868686;
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



  .dropdown{
    height:200px; width:100px;
    border:1px solid black; 
    position:absolute;
    z-index:200;
    right:-1px;
    top: 525px;
    left: 74px;

        background-color: #fff;
    border: 1px solid #ccc;
    color: #333;
    float: none;
    cursor: pointer;
  }
 


  </style>
