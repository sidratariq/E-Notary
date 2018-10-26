
import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login.vue'
import register from '@/components/register.vue'
import home from '@/components/HomePage.vue'
import usetemp from '@/components/usetemplate.vue'
import createtemplate from '@/components/createtemplate.vue'
import addrecipient from '@/components/addrecipient.vue'
import inbox from '@/components/inbox.vue'
import mydocs from '@/components/mydocs.vue'
import sent from '@/components/sent.vue'
import deletee from '@/components/delete.vue'
import verify from '@/components/verify.vue'
import wallet from '@/components/wallet.vue'
import draft from '@/components/draft.vue'










Vue.use(Router)

export default new Router({
  routes: [


    {
      path: '/',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/homepage',
      name: 'home',
      component: home
    },
    {
      path: '/usetemplate',
      name: '/usetemplate',
      component: usetemp
    },
    {
      path: '/createtemplate',
      name: '/createtemplate',
      component: createtemplate
    },
    {
      path: '/addrecipient',
      name: '/addrecipient',
      component: addrecipient
    },
    {
      path: '/inbox',
      name: '/inbox',
      component: inbox
    },
    {
      path: '/mydocs',
      name: '/mydocs',
      component: mydocs
    },
    {
      path: '/sent',
      name: '/sent',
      component: sent
    }, 
    {
      path: '/delete',
      name: '/delete',
      component: deletee
    },
     {
      path: '/verify',
      name: '/verify',
      component: verify
    },
    {
      path: '/wallet',
      name: '/wallet',
      component: wallet
    },
    {
      path:'/draft',
      name:'/draft',
      component:draft
    }

  ]
})

