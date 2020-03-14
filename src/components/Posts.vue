<template>
  <div>
    <h2>POSTS</h2>
    <table class="table">
      <tr>
        <th>id</th>
        <th>title</th>
        <th>text</th>
        <th>View</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.text }}</td>
        <td><router-link :to="`/posts/${post.id}`" class="btn btn-warning">View</router-link></td>
        <td><router-link class="btn btn-info" :to="`/edit/${post.id}`">Edit</router-link></td>
        <td>For now, empty</td>
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