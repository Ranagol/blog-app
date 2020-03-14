<template>
  <div>
    <h3>SinglePost</h3>
    <p>Post id number: {{ post.id }}</p>
    <p>Post title: {{ post.title }}</p>
    <p>Post text: {{ post.text }}</p>
  </div>
</template>

<script>
import postService from '../services/postService';
export default {
  data(){
    return {
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