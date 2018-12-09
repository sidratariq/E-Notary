    <template>
      <form @submit.prevent="onSubmit">
        <div class="row mx-0 setheight" >
          
          <div class="setsearch col-lg-9">
            <input  
              class="setsearchborder"
              type="text"
              placeholder="Search inbox and Folders" @click="openfilter = !openfilter">
        
              <div v-if="openfilter" class="filter">
                  
                <ul class="setlist">
                  <li style="min-height:25px">
                    <checkbox></checkbox>
                  </li>


    <!-- // status -->
                  <li style="min-height:64px">
                    <!--  -->
                    <status></status>
                  </li>

    <!-- // sent by -->
                <li style="min-height:64px">
                  <!--  -->
                    <sent></sent>
                  </li>


                  <!-- Date set -->

                  <li style="min-height:64px">
                    <!--  -->
                  <setdate></setdate>
                  </li>


                  <!-- Custom date -->
                  <li v-if="custom" style="min-height:64px">
                    <input type="date"  name="" id="">
                    <input type="date" name="" id="">
                  </li>


                  <!-- Apply and reset buttons -->
                  <li style="min-height:64px"><button type="submit" class="btn btn-primary">Apply</button>
                  <span></span>
                  <button     type="submit" class="btn btn-link">Reset</button></li>



                </ul>

                



              </div>
          </div>
          <div class="col-3 setposition" style="margin-top:10px; z-index:1;">
            <div @click="openfilter = !openfilter">
              <i class="fas fa-sliders-h setposition setfont"> </i>
              <span class="setspan">FILTERS</span>
            </div>
          </div>
        </div>
      </form>
    </template>

    <script>

    import checkbox from './checkbox.vue';
    import status from './searchbystatus.vue'
    import sent from './searchbysent.vue'
    import setdate from './searchbydate.vue'

    export default {
    data() {
          return {
          openfilter: false,
          custom:false,
          check:true
          };
        },
    components:{
      checkbox,
      status,
      sent,
      setdate
    }

    };
    </script>

    <style scoped>

    *{
        box-sizing: border-box;
      }
    
   .setheight,form{
      max-height: 62px;
    }
    

    .setsearchborder {
      margin-top: 5%;
      width: 100%;
      width:100%;
      z-index:2; 
      position:relative;
      margin-top:10px
    }

    .setsearch{
       padding-left: 0px;
      margin-top: 2%;

    }

    .filter{
      z-index:1;
      position:absolute;
      background: #f9f9f9;
      border: 1px solid #ccc;
      top:0;
      left:1px;
      right:0;
      min-width: 453px;
      height:400px;
    }

    .setlist{
      position:absolute;
      top:70px;
        list-style:none;
        width:90%;
        /* padding-left:0px */
    }

   

    .setposition {
      padding: 0px;
      padding-top: 5px;
    }

    .setposition::after {
      content: " ";
      white-space: pre;
    }

    .setfont {
      font-weight: 700px;
      color: #1e1e1e;
      font-size: 15px;
      z-index:1
    }
    .setspan {
      font-size: 13px;
      font-weight: bold;
    }

    .backset{
      background: #f9f9f9
    }

    </style>
