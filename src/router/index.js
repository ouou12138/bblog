import {createMemoryHistory, createRouter} from 'vue-router'
import AboutMeView from "../components/other/AboutMeView.vue";
import BlogPostView from "../components/other/BlogPostView.vue";
import BookListView from "../components/other/BookListView.vue";
import AbView from "../components/other/AbView.vue";

const routes = [
    {path: '/', component: AbView},
    {path: '/me', component: AboutMeView},
    {path: '/book', component: BlogPostView},
    {path: '/blog', component: BookListView},
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})