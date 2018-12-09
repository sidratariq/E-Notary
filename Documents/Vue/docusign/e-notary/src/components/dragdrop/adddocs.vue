    <template>
    
        <div>
            <head_head></head_head>
            <div class="container">
            <h1 style="margin:2%;">Add Documents</h1>

                <dragdrop></dragdrop>

            </div>
        </div>
    </template>

    <script>
    
    import head_head from '../header/header.vue'
    import dragdrop from './dragdrop.vue'

    export default {
    components:{
        head_head,
        dragdrop
    },
    props:{
        
    }
    }
    </script>

    <style scoped>
    *{
                background-color: rgb(244, 244, 244);

    }

    
    </style>
