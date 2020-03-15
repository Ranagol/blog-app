import { HTTP } from './baseService';

class PostService {
  //GET
  async getAllPosts(){
    const response = await HTTP.get('/posts?filter={"include":["comments"]}');
    return response.data;
  }

  //POST
  async createPost(body){
    await HTTP.post("/posts", body);
  }

  //SHOW
  async getSinglePost(id){
    const response = await HTTP.get(`/posts/${id}?filter={"include":["comments"]}`);
    return response.data;
  }

  //EDIT
  async editPost(body, id) {
    await HTTP.put(`/posts/${id}`, body);
  }

  //DELETE
  async deletePost(id) {
    await HTTP.delete(`/posts/${id}`);
  }

  //ADD COMMENT
  async addComent(comment, postId){
    const response = await HTTP.post(`/posts/${postId}/comments`, { text: comment });
    return response.data
  }

}

const postService = new PostService();
export default postService;