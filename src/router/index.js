import {createRouter, createWebHistory} from 'vue-router'
import BookListView from "../components/other/BookListView.vue";
import AboutMeView from "../components/other/AboutMeView.vue";
import BlogPostView from "../components/other/BlogPostView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/book',
            name: 'book',
            component: BookListView
        },
        {
            path: '/me',
            name: 'me',
            component: AboutMeView
        },
        {
            path: '/blog',
            name: 'blog',
            component: BlogPostView
        },
    ]
})
export default router