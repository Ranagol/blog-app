import { HTTP } from './baseService';

class PostService {
  //GET
  async getAllPosts(){
    const response = await HTTP.get("/posts");
    return response.data;
  }

  //POST
  async createPost(body){
    await HTTP.post("/posts", body);
  }
}

const postService = new PostService();
export default postService;