import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  // name 은 동일한 값 불가함.
  // app.js는 아래와 같은 코딩으로 작성하면 들어감.
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // webpackChunkName -> 소스에 보여지는 about.js 파일
    // webPackPrefetch -> size : prefetch cache, status: 200, 이름 똑같이 써도된다.
    // prefetch -> 로딩되자마자 등록된 리소스는 당장은 쓰지않지만
    // 이후에 사용가능성이 높은것들을 등록하면 브라우저 캐시에 등록한다.

    // 빌드하게 되면 about.[hash].js 로 보여진다.
    component: () =>
      import(
        /* webpackChunkName: "about", webPackPrefetch: true */ '../views/AboutView.vue'
      )
  },
  {
    path: '/databinding/string',
    name: 'databindingStrinView',
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingStringView.vue'
      )
  },
  {
    path: '/databinding/html',
    name: 'databindingHtmlView',
    component: () => import('../views/1_databinding/DataBindingHtmlView.vue')
  },
  {
    path: '/databinding/input',
    name: 'databindingInputView',
    component: () => import('../views/1_databinding/DataBindingInputView.vue')
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelectView',
    component: () => import('../views/1_databinding/DataBindingSelectView.vue')
  },
  {
    path: '/databinding/check',
    name: 'DataBindingCheckBoxView',
    component: () =>
      import('../views/1_databinding/DataBindingCheckBoxView.vue')
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadioView',
    component: () => import('../views/1_databinding/DataBindingRadioView.vue')
  },
  {
    path: '/databinding/att',
    name: 'DataBindingAttributeView',
    component: () =>
      import('../views/1_databinding/DataBindingAttributeView.vue')
  },
  {
    path: '/databinding/list',
    name: 'DataBindingListView',
    component: () => import('../views/1_databinding/DataBindingListView.vue')
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClassView.vue',
    component: () => import('../views/1_databinding/DataBindingClassView.vue')
  },
  {
    path: '/event/click',
    name: 'EventClickView.vue.vue',
    component: () => import('../views/event/EventClickView.vue')
  },
  {
    path: '/event/change',
    name: 'EventChangeView.vue.vue',
    component: () => import('../views/event/EventChangeView.vue')
  },
  {
    path: '/event/key',
    name: 'EventKeyView.vue.vue',
    component: () => import('../views/event/EventKeyView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
