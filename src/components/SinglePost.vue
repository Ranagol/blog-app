<template>
  <div>
    <h3>SinglePost</h3>
    <table class="table">
      <tr>
        <th>id</th>
        <th>title</th>
        <th>text</th>
      </tr>
      <tr>
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.text }}</td>
      </tr>
    </table>
  
  </div>
</template>

<script>
import postService from '../services/postService';
export default {
  data(){
    return {
      //id: this.$route.params.id,
      post: ''
    }
  },
  methods: {

  },
  async created(){
    const post = await postService.getSinglePost(this.$route.params.id);
    this.post = post;
  }
  

  
}
</script>