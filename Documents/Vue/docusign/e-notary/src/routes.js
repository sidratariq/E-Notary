/* eslint-disable */
import manage_inbox from './components/manage/manage_inbox.vue'
import home from './components/auth/start.vue'
import template from './components/template/template.vue'
import forget from './components/auth/forget.vue'
import signup from './components/auth/signup.vue'
import adddocs from './components/dragdrop/adddocs.vue'
import commingsoon from './components/commingsoon/comming.vue'
import detail from './components/manage/detail.vue'


// make a bundle of dashoard

import dashboard from './components/dashboard/dashboard.vue'

const inbox = resolve =>{
        require.ensure(['./components/manage/inbox/inbox.vue'],()=>{
            resolve(require('./components/manage/inbox/inbox.vue'));
        },'manage');
};

const sent = resolve =>{
    require.ensure(['./components/manage/sent/sent.vue'],()=>{
        resolve(require('./components/manage/sent/sent.vue'));
    },'manage');
};

const deletee = resolve =>{
    require.ensure(['./components/manage/delete/delete.vue'],()=>{
        resolve(require('./components/manage/delete/delete.vue'));
    },'manage');
};

const draft  = resolve =>{
    require.ensure(['./components/manage/draft/draft.vue'],()=>{
        resolve(require('./components/manage/draft/draft.vue'));
    },'manage');
};


export const routes = [

    
    {
        path:'/dashboard',
        component:dashboard,
        name:dashboard
    },

    {
        path:'/manage_inbox',
        component: manage_inbox,
        children:[
            {   path:'/inbox',component: inbox,
            children:[{
                path:'/detail',
                component:detail
            }]
        },
            {   path:'/sent',component: sent},        
            {   path:'/delete', component: deletee },         
            {   path:'/draft',component: draft,  },      
            {   path:'/home:id', component: home,  },  
        ]
    },   

    {
        path:'/home',
        component:home,
     
    },
      {
        path:'/signup',
        component:signup,
     
    },
 
    {
        path:'/template',
        component: template
    },

    {
        path:'/redirect-me',
        redirect:'/home'
    },

    {
        path:'*',
        redirect:'/home'
    },

    {
        path:'/forget/:email',
        component:forget,
        name:forget
    },

    {
        path:'/adddocs',
        component:adddocs,
        name:adddocs

    },

    {
        path:'/commingsoon',
        component:commingsoon,
        name:commingsoon
    }

];
