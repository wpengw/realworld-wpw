import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fea4bd5e = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _b8160e74 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _4a3b2f3c = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _f5deaf3c = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _a37716ec = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _74dec794 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _6bdaebaf = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

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
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _fea4bd5e,
    children: [{
      path: "",
      component: _b8160e74,
      name: "home"
    }, {
      path: "/login",
      component: _4a3b2f3c,
      name: "login"
    }, {
      path: "/register",
      component: _4a3b2f3c,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _f5deaf3c,
      name: "profile"
    }, {
      path: "/settings",
      component: _a37716ec,
      name: "settings"
    }, {
      path: "/editor",
      component: _74dec794,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _6bdaebaf,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
