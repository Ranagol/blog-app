<template>
  <div>
    <p>posts.vue</p>
    <table class="table">
      <tr>
        <th>id</th>
        <th>title</th>
        <th>text</th>
        <th>View</th>
      </tr>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.text }}</td>
        <td><router-link :to="`/posts/${post.id}`" class="btn btn-warning">View</router-link></td>
      </tr>
    </table>
  </div>
</template>

<script>
import postService from '../services/postService'
//import { postService } from '../services/postService';
export default {
  data(){
    return {
      posts: [],
    }
  },
  methods: {

  },
  async created(){
    this.posts = await postService.getAllPosts();
    console.log(this.cars);
  }
  
}
</script>

<style>

</style>