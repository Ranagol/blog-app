import Posts from './components/Posts';
//import Header from './components/Header';

export const routes = [
  { path: '', name: 'redirect', component: Posts },
  { path: '/posts', name: 'posts', component: Posts },
]