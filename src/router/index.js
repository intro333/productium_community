import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function lazyLoad(view) {
  return() => import(`@/views/${view}.vue`)
}

const routes = [
  {
    path: '/',
    component: lazyLoad('Main'),
    children: [
      {
        path: '',
        name: 'community-pages',
        component: lazyLoad('CommunityPages'),
        children: [
          {
            path: '',
            name: 'home',
            component: lazyLoad('Home')
          },
          {
            path: 'user-agreement',
            name: 'user-agreement',
            component: lazyLoad('user-agreement/UserAgreement'),
            children: [
              {
                path: '',
                name: 'terms-of-use',
                component: lazyLoad('user-agreement/TermsOfUse')
              },
              {
                path: 'privacy-policy',
                name: 'privacy-policy',
                component: lazyLoad('user-agreement/PrivacyPolicy')
              },
            ]
          },
        ]
      },
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
