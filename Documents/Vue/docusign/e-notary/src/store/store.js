import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

export const store = new vuex.Store({
    state:{
        counter:0
    }
})