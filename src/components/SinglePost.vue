<template>
  <div>
    <h3>SinglePost</h3>
    <p>Post id number: {{ post.id }}</p>
    <p>Post title: {{ post.title }}</p>
    <p>Post text: {{ post.text }}</p>
    <h5>Below we are using the 'moment'</h5>
    <p>We have dates in form of string in our post object, under post.createdAt. We use moment to format this. we use moment as a filter. And, because we want this moment filtering to be avaliable for possible other components too, that is why we did all this in a mixin.</p>
    <p>Post created at {{post.createdAt | formatDate(post.cretedAd)}}</p>
    <p>Post created at {{post.createdAt | diffForHumans(post.cretedAd)}}</p>

    <hr>
    <app-add-comment :handleSubmit="createComment"></app-add-comment><!--sending the createComment() method from parent to child -->
    <h5>All comments on this topic</h5>
    <ul>
      <li v-for="comment in post.comments" :key="comment.id">{{ comment.text }}</li><!-- showing all the comments-->
    </ul>
  </div>
</template>

<script>
import postService from '../services/postService';
import AddComent from '../components/AddComent';
import DateMixin from '../mixins/DateMixin';
export default {
  data(){
    return {
      post: '',//this holds here a single post object.
    }
  },
  mixins: [
    DateMixin
  ],
  methods: {
    async createComment(comment){
      const createdComment = await postService.addComent(comment, this.post.id);//this.post.id is the single post object from data()
      this.post.comments.push(createdComment);//hmmm. Possibly we just created a comments key (array?) in our single post object, where we pushed our created comment. So, the comment is stored now in the post object.
    }
  },
  async created(){
    const post = await postService.getSinglePost(this.$route.params.id);//when the page is loaded, we request from the api this single post...
    this.post = post;//...and we are placing it into the post in the data()
  },
  components: {
    'app-add-comment': AddComent,
  }
}
</script>