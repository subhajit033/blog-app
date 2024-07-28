
import BlogCard from "@/shared/cards/blog-card";
import { getAllBlogs } from "@/globalApi/api";
export default async function Home() {
  const res = await getAllBlogs();
  // console.log(res?.data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-self-center gap-4">
      {
        Array(10).fill('_').map((blog:any)=>{
            return <BlogCard key={blog?.id} {...blog}/>
        })
      }
      
    </div>
  );
}
