import {createMemoryHistory, createRouter} from 'vue-router'
import AboutMeView from "../components/other/AboutMeView.vue";
import BlogPostView from "../components/other/BlogPostView.vue";
import BookListView from "../components/other/BookListView.vue";
// import HomeView from "../components/HomeView.vue";
import HomeView1 from "../components/HomeView1.vue";

const routes = [
    {path: '/', component: HomeView1},
    {path: '/me', component: AboutMeView},
    {path: '/book', component: BlogPostView},
    {path: '/blog', component: BookListView},
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})