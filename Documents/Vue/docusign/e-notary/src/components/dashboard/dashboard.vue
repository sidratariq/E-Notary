                        <template>
                        <div  class="main" :class="{modalavalible:showModal}" >
                        <head_head></head_head>

                        <modal v-if="showModal" :showModal="showModal" @gotclicked="showModal = $event"></modal>
                        <uploadphoto v-if="uploadphoto" :uploadphoto="uploadphoto" @gotclicked="uploadphoto = $event" ></uploadphoto>


                                <div class="outer-container">
                                <div class="container-flex">
                                <ul class="first">
                            
                                    <span  @click="uploadphoto=!uploadphoto" class="OliveReact-Avatar" style="background-image: url(&quot;https://docucdn-a.akamaihd.net/olive/18.21.0/img/avatar-placeholder-white.png&quot;);"></span>
                                    
                                    <li class="signature">

                                    <div @click="showModal=!showModal" class="signatureChrome signatureChrome-inverse">
                                        <span>E-Notarized by:</span>
                                        <img src="../../assets/icons/signature.gif" class="signatureChrome_signature"  alt="Signature">
                                        <span>AE9DB71A4A854B1...</span>
                                    </div>

                                    </li>

                            </ul>
                            
                                <ul class="second">
                                <li @click="routechange()"> <a class="userAction"  href=""><span class="userAction_number">0</span>
                                <span class="userAction_status">Action Required</span></a></li>
                                <li @click="routechange()"><a class="userAction" href=""> <span class="userAction_number">1</span><span class="userAction_status">Waiting for Others</span></a></li>
                                <li @click="routechange()"><a class="userAction" href=""><span class="userAction_number">0</span><span class="userAction_status">Expiring Soon</span></a></li>
                                </ul>


                                        </div>

                                <div class="container-flex drag_drop" >
                                <div class="panel-fileDrop">
                            
                                <dragdrop></dragdrop>
                                </div>
                                </div>


                                

                        


                        </div>        
                        </div>


                        </template>

            <script>
                        import head_head from "../header/header.vue";
                        import dragdrop from "../dragdrop/dragdrop.vue";
                        import modal from "../modals/modal.vue";
                        import uploadphoto from "../modals/photoupload.vue"


            export default {
            data: function() {
                return {
                quotes: ["Just a Quote to see something"],
                maxQuotes: 10,
                showModal: false,
                uploadphoto:false
                };
            },

            methods: {
                newQuote(quote) {
                if (this.quotes.length >= this.maxQuotes) {
                    return alert("Please delete Quotes first!");
                }
                this.quotes.push(quote);
                },

                deleteQuote(index) {
                this.quotes.splice(index, 1);
                },

                escapeKeyListener: function(evt) {
                    if (evt.keyCode === 27 && this.showModal) {
                this.showModal = false;
                }
                },

                routechange(){
                    console.log("redirecting");
                },

                
            },

            components: {
                head_head,
                dragdrop,
                modal,
                uploadphoto
            },
            
            created() {
            document.addEventListener('keyup', this.escapeKeyListener);
            },
            destroyed() {
            document.removeEventListener('keyup', this.escapeKeyListener);
            }
            };
            </script>


            <style scoped>
            @import url("https://fonts.googleapis.com/css?family=Roboto");

            * {
            position: relative;
            font-family: "Roboto", sans-serif;
            /* background-color: #f4f4f4; */
            }

            ul {
            padding: 0;
            list-style: none;
            display: flex;
            flex-flow: row;
            }

            a {
            cursor: pointer;
            }

            ul li {
            list-style: none;
            width: 150px;
            height: 100px;
            margin:8px;
            }

            .container-flex {
            width: 85%;
            display: flex;
            padding-top: 30px;
            }

            .first {
            justify-content: flex-start;
            width: 50%;
            flex-wrap: wrap;

            }

            .second {
            justify-content: flex-end;
            width: 50%;
            min-width: 150px;
            }

            .second li {
            border-radius: 5%;
            }

            .second li a:hover{
            opacity: 0.75;

            }

            .outer-container {
            display: flex;
            width: 100%;
            flex-flow: row wrap;
            justify-content: center;
            background: url(../../assets/icons/background.jpg) repeat top left,
            linear-gradient(to right, #4b9aaf 51%, #4b9aaf 100%);
            position: relative;
            }


            .signatureChrome::before {
            border-bottom: 2px solid #005cb9;
            border-left: 2px solid #005cb9;
            border-radius: 5px 0 0 5px;
            border-top: 2px solid #005cb9;
            content: "";
            display: block;
            height: 50px;
            left: 0;
            position: absolute;
            top: 4px;
            width: 20px;
            }

            

            .signatureChrome_signature {
            height: 52px;
            left: -12px;
            margin: -8px 0;
            max-width: 244px;
            position: relative;
            }

            .main {
            background-color: rgb(244, 244, 244);
            height: 100vh;
            }

            .signatureChrome-inverse::before {
            border-color: #fff;
            }

            .signatureChrome-inverse {
            color: #fff;
            }

            .signatureChrome {
            background: 0 0;
            border: none;
            font-size: 11px;
            font-weight: 700;
            line-height: 11px;
            min-width: 140px;
            padding: 0 0 0 25px;
            position: relative;
            text-align: left;
            }

            .sizeXlarge {
            font-size: 22px;
            height: 72px;
            line-height: 72px;
            width: 72px;
            }

            .OliveReact-Avatar {
            background-color: #e8edf7;
            background-position: 50%;
            background-repeat: no-repeat;
            background-size: cover;
            border: none;
            border-radius: 50%;
            color: #555;
            display: inline-block;
            font-size: inherit;
            font-weight: 700;
            height: 66px;
            letter-spacing: 0.5px;
            line-height: 66px;
            padding-right: 0;
            text-align: center;
            vertical-align: middle;
            width: 66px;
            }

            .userAction {
            background: rgba(255, 255, 255, 0);
            border: none;
            border-radius: 3px;
            color: #fff;
            min-width: 150px;
            text-align: left;
            text-decoration: none;
            }

            .userAction_number {
            display: block;
            font-size: 35px;
            line-height: 40px;
            padding: 0px 32px;
            }

            .userAction_status {
            color: #fff;
            text-align: left;
            line-height: 16px;
            font-size: 15px;
            }

            .userActions .userAction + .userAction {
            margin-left: 24px;
            }

            .userAction::before {
            background: #fff;

            bottom: 0;
            content: "";
            display: block;
            left: -12px;
            margin: 8px 0;
            position: absolute;
            top: 0;
            width: 1px;
            }

            .userAction[data-v-6492da79]::before {
            background: #fff;
            bottom: 0;
            display: none;
            left: -12px;
            margin: 8px 0;
            position: absolute;
            top: 0;
            width: 1px;
            }

            .container-flex .drop_drop {
            position: relative;
            width: 100%;
            }

            .panel-fileDrop {
            border: 1px solid #d9d9d9;
            -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
            background: #fff;
            padding: 16px;
            position: absolute;
            top: -10px;
            width: 100%;
            padding: 2%;
            }

            .invalid-checkbox {
            color: red;
            }

            .modalavalible{
                background: rgba(38, 38, 38, 0.3);
                overflow: hidden;
            }


            @media screen and (max-width: 358px) {
            .container-flex {
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

        

            ul li {
                margin: 0px;
                margin-bottom: 8px;
                padding: 0px;
            }

            ul {
                padding: 0px;
            }
            }
            </style>
