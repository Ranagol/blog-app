<template>
  <div>
    <h3>SinglePost</h3>
    <p>Post id number: {{ post.id }}</p>
    <p>Post title: {{ post.title }}</p>
    <p>Post text: {{ post.text }}</p>
    <hr>
    <app-add-comment :handleSubmit="createComment"></app-add-comment>
    <h5>All comments on this topic</h5>
    <ul>
      <li v-for="comment in post.comments" :key="comment.id">{{ comment.text }}</li>
    </ul>
  </div>
</template>

<script>
import postService from '../services/postService';
import AddComent from '../components/AddComent';
export default {
  data(){
    return {
      post: '',//this holds here a single post object.
    }
  },
  methods: {
    async createComment(comment){
      const createdComment = await postService.addComent(comment, this.post.id);//this.post.id is the single post object from data()
      this.post.comments.push(createdComment);//hmmm. Possibly we just created a comments key (array?) in our single post object, where we pushed our created comment. So, the comment is stored now in the post object?
      console.log('All comments: ', this.post.comments);
    }
  },

  async created(){
    const post = await postService.getSinglePost(this.$route.params.id);
    this.post = post;
  },

  components: {
    'app-add-comment': AddComent,
  }
  

  
}
</script>