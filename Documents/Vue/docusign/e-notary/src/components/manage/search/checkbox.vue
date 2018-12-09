<template>
        <div class="  form-check " >
                <span  style="min-height:25px; max-height:25px; max-width:25px; min-width:25px;color:rgb(0,92,185); border:1px solid gray;border-radius:2px;">
                  <i :class="{'fas fa-check':check}" @click="check!=check" ></i>
                  </span>
                  <!-- <input type="check"> -->
                  <label class="form-check-label checkbox-label " for="exampleCheck1">Include envelope custom fields
                  </label>
        </div>
</template>

<script>
export default {
data() {
          return {
          check:true
          };
        },
}
</script>

<style scoped>


          

    .checkbox-label{
      display: inline-block;
        min-height: 18px;
        min-width: 18px;
        padding-left: 28px;
        position: relative;
        font-size: 15px;       

    }

      .checkbox{
                color: rgba(8, 123, 238)
            }

            .checkbox:checked{
                box-shadow:0 1px 4px rgba(8, 123, 238,0.3), 0 0 40px rgba(0,92,185, 0.1) inset;
                zoom: 1;
            }

</style>
