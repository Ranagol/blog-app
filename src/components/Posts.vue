<template>
  <div>
    <p>posts.vue</p>
    <table class="table">
      <tr>
        <th>id</th>
        <th>title</th>
        <th>text</th>
      </tr>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.text }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data(){
    return {
      posts: [],
    }
  }
  
}
</script>

<style>

</style>