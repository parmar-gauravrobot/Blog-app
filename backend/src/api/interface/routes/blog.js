import { readAllBlogs } from "../controller/blog-controller.js"

const blogRouter = (router) =>{
  router.get("/blog/readAllBlogs",readAllBlogs)
}

export default blogRouter