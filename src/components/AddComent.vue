<template>
  <div>
    <h4>Add comment</h4>
    <form @submit.prevent="onSubmit">
      <label for="comment">Add comment</label>
      <input v-model="comment" name="comment" id="comment" class="form-control" type="text">
      <button type="submit" class="btn btn-secondary">Add comment</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddComment',
  data(){
    return {
      comment: '',

    }
  },
  methods: {
    onSubmit(){
      console.log('onSubmit called');
      this.handleSubmit(this.comment);
      this.comment = '';
    }
  },
  props: {
    handleSubmit: {
      type: Function,
      required: true
    }
  }
}
</script>