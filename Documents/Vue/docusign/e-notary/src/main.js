  import Vue from 'vue'
  import App from './App.vue'
  import VueRouter from 'vue-router'
  import {routes} from './routes.js'
  import 'bootstrap'
  import 'bootstrap/dist/css/bootstrap.min.css'
  import Vuelidate from 'vuelidate'
  import vueSignature from "vue-signature"
  import {store} from './store/store'
  




  Vue.use(Vuelidate)
  Vue.use(vueSignature)


  Vue.config.productionTip = false

  //Vue-Router import and usage
  Vue.use(VueRouter);



  const router = new VueRouter( 
    {
      routes,
      mode:'history'
    }
  );

  router.beforeEach((to,from,next)=>{
    // console.log("beforeEach Global");
    next();
  });

  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')

  