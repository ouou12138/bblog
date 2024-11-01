import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/pages/MainView.vue") },
  { path: "/me", component: () => import("@/pages/AboutMeView.vue") },
  { path: "/book", component: () => import("@/pages/BookListView.vue") },
  { path: "/blog", component: () => import("@/pages/BlogPostView.vue") },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
