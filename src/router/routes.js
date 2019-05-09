import TopNews from '@/views/TopNews.vue';
import NewNews from '@/views/NewNews.vue';
import CommentsView from '@/views/CommentsView.vue';

const routes = [
  { path: '/', name: 'top-news', component: TopNews },
  { path: '/new', name: 'new-news', component: NewNews },
  { path: '/item/:id', name: 'item', component: CommentsView }
]

export default routes;
