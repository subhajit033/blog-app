
import BlogCard from "@/shared/cards/blog-card";
import { getAllBlogs } from "@/globalApi/api";
export default async function Home() {
  const res = await getAllBlogs();
  // console.log(res?.data);
  if(res?.data.length === 0){
    return <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <h1 className="text-2xl font-semibold text-gray-500">No Blog found</h1>
    </div>
  }
  return (
    <div className="flex justify-center items-start flex-wrap gap-10">
      {
        res?.data?.map((blog:any)=>{
            return <BlogCard key={blog?.id} {...blog} isAdmin={false}/>
        })
      }
      
    </div>
  );
}
