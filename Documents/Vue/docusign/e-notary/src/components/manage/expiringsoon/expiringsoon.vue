            <template>

                    <div class="container-fluid mx-0">

                        <div class="row setborder setpadding"  v-if="checked">
                        
                                <div class="col-lg-8 sethidden topset" style="padding-top:18px">

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

                        <div class="row setborder setpadding"  v-if="!checked">
                        

                                <div class="col-lg-8 sethidden">
                                    <span class="setinbox set" style="" >Inbox</span>
                                </div>
                                <div class="col-lg-4 searchbar">
                                <search></search>
                                </div>           
                        </div>  

                            <div class="row makescroll">
                                    <table style="width:100%;">
                                
                                        <tr>
                                        <th style="width:5%; "><span></span></th>
                                        <th style="width:2%; "><span></span></th>
                                        <th style="width:50%;" ><span >Subject</span></th>
                                        <th style="width:20%; padding-left:0px;" ><span >Status</span></th>
                                        <th style="width:14.5%; padding-left:0px;"><span >Last change</span></th>
                                        <th style="width:16.5%; "><span></span></th> 
                                        </tr>

                                        <!-- <rowset v-for="(key,index) in 10" :key="index"></rowset> -->
                                        <tr v-for="(key,index) in 1" :key="index" class="setborder" :class="{'clicked':checked}" >
                                            <td style="text-align:center; padding:5px">
                                                <input type="checkbox" id="checkbox" v-model="checked" class="checkbox">
                                                <!-- (0,92,185) -->
                                            </td>
                                            <td><i class="fas fa-check" style="color:rgb(0,92,185)"></i></td>
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
                                    </table>

                            </div>



                            
                    </div>

            </template>

            <script>

            import search from '../search.vue'

            export default {
                data(){
                    return{
                    checked:false,
                    nooffilesselected:5
                        }
                },
                
                methods:{
                    navigateToHome(){
                        this.$router.push('/helloworld')
                    }
                },
                computed:{
            
                },
                components:{
                    search
                }
            }
            </script>


            <style scoped>

                .sethidden{
                    height: 54px;
                }


            .makescroll{
                overflow-y: auto;

            }

            .apply{
                color: #000000;
                background-color: #f9f9f9;
                border-color: #ccc;

            }

            #checkbox{
                margin-right: 5px; 
            } 
            

            .container-fluid{
                padding: 0;
            }

            .setborder{
            border-bottom: 1px solid rgba(0,0,0,.1);
            }

            .row{
                margin-left: 0px;
                margin-right:0px; 
            }

            .setpadding{
                /* padding-top:1%; */
                padding-left: 1%;
            }

            .setinbox{
                font-family: "Maven Pro","Helvetica Neue",Helvetica,Arial,sans-serif;
                font-size: 20px;
                font-weight: 600;
                margin: 0%;
                bottom:4px; position:absolute;
            }

            .setfont{
                font-weight: 700px;
                color: #1e1e1e;
                font-size: 15px;
            }

            .setrelative{
            position:relative;
            }

            th{
                border-bottom: 1px solid #e9e9e9;
                font-size: 12px;
                font-weight: 900;
                line-height: 16px;
                padding: 8px 12px;
                text-align: left;
            }


        
            td ul li{
                list-style: none;
            }

            ul{
                padding: 0%;

            }

            input[type="checkbox"]{
    width: 17px; /*Desired width*/
    height: 17px; /*Desired height*/
    cursor: pointer;
    /* -webkit-appearance: none; */
    /* appearance: none; */
    }

    .dropdown-menu{
        min-width: 10rem;
    }

    .searchbar{
        padding-left:0px;
        padding-right: 0px; 
    }

    .dropdown-item{
            width: 120px;
    }

    .clicked{
    background-color:  rgb(216, 237, 250);
    border-left: 4px solid rgb(8, 123, 238)
    }



            #checkbox{
                margin-right: 5px; 
            } 

            .checkbox{
                color: rgba(8, 123, 238)
            }

            .checkbox:checked{
                box-shadow:0 1px 4px rgba(8, 123, 238,0.3), 0 0 40px rgba(0,92,185, 0.1) inset;
                zoom: 1;
            }



            .topset{
                padding-top:7px; 
            }

            </style>
