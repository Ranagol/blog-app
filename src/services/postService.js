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

  //SHOW
  async getSinglePost(id){
    const response = await HTTP.get(`/posts/${id}`);
    return response.data;
  }


}

const postService = new PostService();
export default postService;