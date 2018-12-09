<template>
    <div class="container-fluid mx-auto">

        <div class="row text-center">
            <!-- <span class="circle"></span> -->
            <span class="msg">COMING SOON</span>
            <span class="notifymsg"> GET NOtified when ready</span>

             <div class="field">
                <input type="email" name="" id="" placeholder="ENTER YOUR EMAIL">
                <button>NOTIFY ME</button>
            </div>
        <img src="../../assets/icons/commingsoon.svg" class="rounded mx-auto d-block" height="100%" width="100%" alt="">
           
            <!-- <span class="circle circle2"></span> -->

        </div>


    </div>

</template>

<script>
export default {

}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Black+Han+Sans');

*{
    border: 1px solid black;
}
    .container-fluid{
        /* background-color: #FFD843; */
        background-color: #ffe3e1;
        /* background-color: #005cb9; */
        /* background-color: #00376f; */

        height: 100vh;
    }

    img{
        z-index: 1;
        max-width: 548px;
    }


     
     .msg{
    font-family: 'Black Han Sans', sans-serif;
    font-size: 50px;
    font-weight: bolder;
    /* color: black; */
    color: white;
    letter-spacing: 2rem;
    position: absolute;
    top: 20%;
    left: 48%;
    transform: translate(-50%,-50%);
    z-index: 111;
    /* border: 2px solid white; */
    width: 70%;
    }

      .notifymsg{
        font-family: sans-serif;
        font-size: 23px;
        color: rgb(189, 25, 58);
        letter-spacing: 2px;
        position: absolute;
        bottom: 30%;
        left: 50%;
        transform: translate(-50%,50%);
        text-transform: uppercase;
        min-width: 40vh;
        z-index: 111;

    }

    .field{
        position: absolute;
        bottom: 18%;
        left: 54%;
        transform: translateX(-50%);
        min-width: 62vh;
        z-index: 111;



    }

    .field input{
        height: 35px;
        width: 300px;
        background-color: #101113;
        outline: none;
        border: none;
        border-radius: 35px;
        font-family: sans-serif;
        font-size:10px;
        color: white;
        letter-spacing:1px;
        padding-left: 15px;
        z-index: 111;


    }

    .field button{
        height: 35px;
        width: 100px;
        background-color: #2E2D33;
        font-size: 11px;
        color: white;
        letter-spacing: 1px;
        border: none;
        border-radius: 35px;
        position: relative;
        left: -100px;
        z-index: 999;

    }
    


        @media only screen and (max-width: 358px)  {
            
           
    }

    @media (min-width: 234px) and (max-width: 400px) {
             .msg{
                font-size: 20px;
                letter-spacing: 1rem;
                
            }

            .notifymsg{
                font-size: 25px;

            }

            .field{
                bottom:35px;
                padding-left: 26px; 
            }

            .field input{
                width: 250px;
                margin-left:1px;
            }

            .field button{
                   left: -65px;

            }


    }




</style>
