
<template>
  <div >
  <head_head></head_head>
  <div class="row">
  <sidebar class="col-lg-3 col-md-2"></sidebar>

  <div class="col-lg-9 col-md-10 col-sm-12 col-xs-12 "  >
             <div class="set">
           <div class="row"  >
              <label class="text-center"> inbox</label>
            </div>
            <div class="row ">
              <table style="width:100%">
                   <tr class="bor">
                     <th>Subject</th>
                     <th>Status</th> 
                     <th>Date</th>
                   </tr>
                   <tr>
                     <td>NDA Document</td>
                     <td>Pending</td> 
                     <td>23/Oct/2018</td>
                   </tr>
                   <tr>
                     <td>Car Contract Deal</td>
                     <td>Signed</td> 
                     <td>23/Oct/2018</td>
                  
                   </tr>
                 <tr>
                     <td>Legal signed</td>
                     <td>Pending</td> 
                     <td>23/Oct/2018</td>
                 </tr>
                 <tr>
                     <td>NDA Document</td>
                     <td>Pending</td> 
                     <td>23/Oct/2018</td>
                   </tr>
                   <tr>
                     <td>Car Contract Deal</td>
                     <td>Signed</td> 
                     <td>23/Oct/2018</td>
                  
                   </tr>
                 <tr>
                     <td>Legal signed</td>
                     <td>Pending</td> 
                     <td>23/Oct/2018</td>
                 </tr>
                 <tr>
                     <td>NDA Document</td>
                     <td>Pending</td> 
                     <td>23/Oct/2018</td>
                   </tr>
                   <tr>
                     <td>Car Contract Deal</td>
                     <td>Signed</td> 
                     <td>23/Oct/2018</td>
                  
                   </tr>
                 <tr>
                     <td>Legal signed</td>
                     <td>Pending</td> 
                     <td>23/Oct/2018</td>
                 </tr>
              
             </table>
          </div>
         </div>
               
               
             
          </div>
           </div>
        
        
          
       </div>
  
</template>

<script>
import head_head from "./header.vue"
import sidebar from "./sidebar.vue"

export default {
  components:{
    head_head,
    sidebar
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.text-center {
  color: #fdbb2d;
  font-size: 130%;
  font-weight: 700;
  font-style: italic;
  text-align: center;
  text-transform: uppercase;
}

.set {
  padding: 1.5%;
}

table {
  padding: 2%;
}

tr {
  border-bottom: 1px dotted #2b3d4f;
}



tr > td {
  padding-bottom: 1em;
  /* color: white; */
   font-size: 100%;
  font-weight: 300;
}
</style>
