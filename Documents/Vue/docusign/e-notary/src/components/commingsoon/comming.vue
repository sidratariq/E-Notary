        <template>
            <div class="commingsoon">

                <head_head></head_head>
                <div class="row rowset ">
                       
                    <div class="col-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <img src="../../assets/icons/commingsoon.svg" class="rounded mx-auto d-block"  height="100%" width="100%" alt="">

                    </div>

                    <div class="col-4 col-lg-6 col-md-6 col-sm-6 col-xs-8 settitle">
                        <p>
                        We will update our service soon.

                        </p>
                    </div>
                
                    
                

                </div>


            </div>

        </template>

        <script>
        import head_head from '../header/header.vue'
        export default {
            components:{
            head_head
            }

        }
        </script>

        <style scoped>

        @import url('https://fonts.googleapis.com/css?family=Black+Han+Sans');

        *{
            overflow: hidden;
            /* border: 1px solid black; */

        }
            .commingsoon{
                background-color: #ffe3e1;
                overflow: hidden;
                height: 100vh;
            }

            .settitle{
                padding-top:15%; 
                font-weight: 200;
                font-size: 50px;
                font-family: sans-serif;
            }

            img{
                z-index: 1;
            }

            .rowset{
                height: 100vh;
            }

                @media only screen and (max-width: 811px)  {
                    .settitle{
                        font-weight: 100;
                        font-size: 30px;
                        font-family: sans-serif;
                        padding: 0px;

                    }

                       p{
                        margin-top:250px;

                    }
                    
            }

            @media (min-width: 234px) and (max-width: 529px) {
                  

                    .settitle{
                        font-weight: 100;
                        font-size: 27px;
                        font-family: sans-serif;
                        padding: 0px;
                    }

                    p{
                        margin-top:170px;

                    }
                    
                    img{
                        width: 200px;
                        height: 200px;
                        margin-top:150px;
                    }


            }




        </style>
