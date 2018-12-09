<template>
        <button @click="$router.push('/adddocs')" class="btn-main btn-large">Start Now</button>
    
</template>

<script>
export default {

}
</script>

<style scoped>
button{
border-radius: 0 2px 2px 0;
border: none;
margin:28px 20px 20px 20px;
width: 170px;
text-align: center;
}

button:hover{
    cursor: pointer;
}

.btn-main{
    background-color: #ffce00;
    /* border-color: #ffce00; */
    color: #1e1e1e;
    
}

.btn-large{
    font-size: 13px;
    min-height: 34px;
    /* padding: 7px 18px; */
    font-weight: bolder;
}
</style>
