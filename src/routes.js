import Posts from './components/Posts';
import AddPost from './components/AddPost';
import SinglePost from './components/SinglePost';
//import Header from './components/Header';

export const routes = [
  { path: '', name: 'redirect', component: Posts },
  { path: '/posts', name: 'posts', component: Posts },
  { path: '/add', name: 'add', component: AddPost },
  { path: '/posts/:id', name: 'singlePost', component: SinglePost },
]