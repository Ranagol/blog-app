<template>
  <div>
    <p>AddPost.vue</p>
    <form>
      <label for="title">title</label>
      <input type="text" name="title" v-model="title" class="form-control">
      <label for="text">text</label>
      <input type="text" name="text" v-model="text" class="form-control">
      <button @click.prevent="onSubmit" class="btn btn-success">Submit</button>
    </form>

  </div>
</template>

<script>
import  postService  from "../services/postService";
export default {
  data(){
    return {
      title: '',
      text: '',
    }
  },
  methods: {
    async onSubmit(){
      const body = {
        title: this.title,
        text: this.text,
      }
      await postService.createPost(body);
      alert("Uspesno kreiran post");
      this.$router.push('/posts');
    }
  }
}
</script>

<style></style>

