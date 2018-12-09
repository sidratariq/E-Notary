<template>
  <form @submit.prevent="onSubmit">
    <div class="row mx-0" style="">
      
      <div class="form-group col-lg-9">
        <input  
          class="setsearchborder"
          type="text"
          placeholder="Search Deleted" style="z-index:2; position:relative; margin-top:10px" @click="openfilter = !openfilter">

          <div v-if="openfilter" style="z-index:1; position:absolute;border:1px solid black;    background: #f9f9f9;
                                  border: 1px solid #ccc;top:0; left:1px; right:0; width: 400px;height:400px">

            <ul style="position:absolute; top:70px; list-style:none; width:85%">
              <li>
            <div class="form-check" >
               <input type="checkbox" class="form-check-input" id="exampleCheck1">
               <label class="form-check-label checkbox-label" for="exampleCheck1">Include envelope custom fields
              </label>
            </div>
              </li>


<!-- // status -->
              <li>
                <div class="form-group" style="
    padding-left: 0px;
">
    <label for="exampleFormControlSelect1">Status</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>All </option>
      <option>In Progess</option>
      <option>Completed</option>
      <option>Declined</option>
      <option>Voided</option>
    </select>
  </div>
              </li>

<!-- // sent by -->
             <li>
                <div class="form-group" style="padding-left: 0px;">
                  <label for="exampleFormControlSelect1">Sent</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>By Anyone</option>
                    <option>By Me</option>
                    <option>To Me</option>
                  </select>
                 </div>
              </li>


              <!-- Date set -->

               <li>
                <div class="form-group" style="padding-left: 0px;">
                  <label for="exampleFormControlSelect1">Date</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>All</option>
                    <option>Last 12 Months</option>
                    <option>Last 6 Months</option>
                    <option>Last 30 days</option>
                    <option>Last Week</option>
                    <option>Last 24 Hours</option>
                    <option @click="custom = !custom">Custom</option>

                  </select>
                </div>
              </li>


              <!-- Custom date -->
              <li v-if="custom">
                <input type="date"  name="" id="">
                <input type="date" name="" id="">
              </li>

              <li><hr></li>

              <!-- Apply and reset buttons -->
              <li><button type="submit" class="btn btn-primary">Apply</button>
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
export default {
 data() {
      return {
      openfilter: false,
      custom:false
      };
    }

};
</script>

<style scoped>



.setsearchborder {
  margin-top: 5%;
  width: 100;
}

.form-group {
  margin-bottom: 6px;
}

.form-control {
  margin-top: 0%;
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

.checkbox{
            color: rgba(8, 123, 238)
        }

        .checkbox:checked{
            box-shadow:0 1px 4px rgba(8, 123, 238,0.3), 0 0 40px rgba(0,92,185, 0.1) inset;
            zoom: 1;
        }

        input[type="checkbox"]{
        width: 15px; /*Desired width*/
        height: 15px; /*Desired height*/
        cursor: pointer;
        /* -webkit-appearance: none; */
        /* appearance: none; */
        }

.checkbox-label{
  display: inline-block;
    min-height: 18px;
    min-width: 18px;
    padding-left: 28px;
    position: relative;
    font-size: 15px;
    

}

</style>
