import axios from 'axios';


const axiosClient = axios.create({
  baseURL: 'https://66a5e3bb23b29e17a1a1327b.mockapi.io/api/v1',
  headers: {
    'Content-Type': 'application/json',
    
  },
});


const getAllBlogs = ()=>{
    return axiosClient.get('/blogs')
}

const postBlog = (data:any)=>{
  return axiosClient.post('/blogs', {
    ...data,
  })
}

const getSingleBlog = (id:string)=>{
  return axiosClient.get(`/blogs/${id}`);
}

export {getAllBlogs, postBlog, getSingleBlog}

