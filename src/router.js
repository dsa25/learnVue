import { createRouter, createWebHistory } from "vue-router"

import Main from "@/pages/Main.vue"
import PostPage from "@/pages/PostPage.vue"
import PostItemPage from "@/pages/PostItemPage.vue"
import About from "@/pages/About.vue"

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/post/:id",
    component: PostItemPage,
  },
  {
    path: "/about",
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
