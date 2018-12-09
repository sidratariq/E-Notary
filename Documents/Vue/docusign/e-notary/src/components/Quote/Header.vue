<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="progress">
                <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                        :style="{width: (quoteCount / maxQuotes) * 100 + '%'}">
                        {{ quoteCount }} / {{ maxQuotes}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['quoteCount', 'maxQuotes']
    }
</script>
<span data-qa="profile-photo-label" class="OliveReact-Avatar OliveReact-Avatar--sizeXlarge" style="background-image: url(&quot;https://docucdn-a.akamaihd.net/olive/18.21.0/img/avatar-placeholder-white.png&quot;);"></span>
// background-color: #e8edf7;
<style scoped>
/* background: url(../img/ndse/home-hero-bg.svg) no-repeat top left,linear-gradient(to right,#4b9aaf 51%,#4b9aaf 100%); */
</style>

