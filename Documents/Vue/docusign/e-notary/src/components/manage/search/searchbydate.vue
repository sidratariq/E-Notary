<template>
       <div class="form-group" style="padding-left: 0px;">
                      <label for="exampleFormControlSelect1">Date</label>
                      <!--  -->
                      <select class="form-control" style="max-height:30px" id="exampleFormControlSelect1">
                        <option>All</option>
                        <option>Last 12 Months</option>
                        <option>Last 6 Months</option>
                        <option>Last 30 days</option>
                        <option>Last Week</option>
                        <option>Last 24 Hours</option>
                        <option @click="custom = !custom">Custom</option>

                      </select>
                    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
