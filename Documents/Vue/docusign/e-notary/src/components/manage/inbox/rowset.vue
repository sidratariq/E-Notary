<template>
     <tr  :class="{'clicked':checked}" >
                                        <td style="text-align:center; padding:5px">
                                            <input type="checkbox" id="checkbox" v-model="checked" class="checkbox">
                                            <!-- (0,92,185) -->
                                        </td>
                                        <td><i class="far fa-clock" style="color:rgb(0,92,185)"></i></td>
                                        <td class="setpadding">
                                            <ul ><li class="setfont ">
                                                <strong>
                                                Please Sign: SubjectName

                                                </strong>
                                            </li>
                                            <li>
                                            <small class="text-muted">From: usman fazil</small>
                                            </li></ul>
                                        </td>
                                        <td>
                                            <p style="font-size:13px">
                                            Need to Sign

                                            </p>
                                            </td>
                                        
                                        <td >
                                            <ul style="padding-left:0px" >
                                                <li>
                                                  11/29/2018
                                                </li>
                                                <li>
                                                    <small class="text-muted">12:21:23 pm</small>
                                                </li>
                                            </ul>
                                        </td>
                                        <td>
                                       <div class="btn-group" >
                                         <button class="btn btn-primary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                           Sign
                                         </button>
                                         <div class="dropdown-menu">
                                              <a class="dropdown-item" href="#">Move</a>
                                              <a class="dropdown-item" href="#">Export As CSV</a>
                                              <a class="dropdown-item" href="#">Delete</a>
                                         </div>
                                       </div>
                                        </td>

                                    </tr>
</template>

<script>
export default {

}
</script>

<style scoped>



</style>
