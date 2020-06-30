import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _241754e6 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _55050548 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _274336a7 = () => interopDefault(import('../pages/logout.vue' /* webpackChunkName: "pages/logout" */))
const _0bd5da45 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/inspire",
    component: _241754e6,
    name: "inspire"
  }, {
    path: "/login",
    component: _55050548,
    name: "login"
  }, {
    path: "/logout",
    component: _274336a7,
    name: "logout"
  }, {
    path: "/",
    component: _0bd5da45,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
