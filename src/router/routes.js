import TopNews from '@/views/TopNews.vue';
import CommentsView from '@/views/CommentsView.vue';

const routes = [
  { path: '/', name: 'top-news', component: TopNews },
  { path: '/item/:id', name: 'item', component: CommentsView }
]

export default routes;
