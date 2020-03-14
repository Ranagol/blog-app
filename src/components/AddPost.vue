<template>
  <div>
    <p>AddPost.vue</p>
    <form @submit.prevent="onSubmit">
      <label for="title">title</label>
      <input type="text" name="title" v-model="title" class="form-control" required minlength="2">

      <label for="text">text</label>
      <input type="text" name="text" v-model="text" class="form-control" required maxlength="300">
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
    <button @click="reset" class="btn btn-danger">Reset</button>

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

      if (this.$route.params.id) {
        await postService.editPost(body, this.$route.params.id);
        alert("Uspesno editovan post");
      } else {
        await postService.createPost(body);
        alert("Uspesno kreiran post");
      }
      this.$router.push('/posts');
    },

    reset(){
      this.title = '';
      this.text = '';
    }
  },

  async created(){
    const id = this.$route.params.id;
    if (id) {
      const post2edit = await postService.getSinglePost(id);
      this.title = post2edit.title;
      this.text = post2edit.text;
    }
  }
}
</script>

<style></style>

