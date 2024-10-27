import {createMemoryHistory, createRouter} from 'vue-router'
import AboutMeView from "../components/body/AboutMeView.vue";
import BlogPostView from "../components/body/BlogPostView.vue";
import BookListView from "../components/body/BookListView.vue";
import MainView from "../components/body/MainView.vue";

const routes = [
    {path: '/', component: MainView},
    {path: '/me', component: AboutMeView},
    {path: '/book', component: BookListView},
    {path: '/blog', component: BlogPostView},
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})