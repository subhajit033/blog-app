'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Edit, Loader, Trash } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { deleteBlog } from '@/globalApi/api';
import { toast } from 'sonner';
interface cardprops {
  createdAt: string;
  title: string;
  content?: string;
  blogUrl: string;
  summary: string;
  isAdmin: boolean,
  id: string,
  authorName: string,
  avatar: string,
  category: string
}

const BlogCard = ({
  createdAt,
  title,
  isAdmin,
  summary,
  blogUrl,
  avatar,
  authorName,
  category,
  id
}: cardprops) => {
  const[loading, setLoading] = useState(false);

  const handleBlogDelete = async ()=>{
    setLoading(true);
    try{
      const res = await deleteBlog(id);
      setLoading(false);
      toast('Blog Deleted successfully')
      setTimeout(()=>{
        location.reload()
      }, 500)
    }catch(e){
      setLoading(false);
      console.log(e);
    }
  }
  
  return (
    <div className='max-w-sm lg:max-w-[36rem] lg:flex rounded-xl'>
      <div
        className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-'
        style={{
          backgroundImage: `url(${blogUrl})`,
        }}
        title='Blog Image'
      ></div>
      <div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
        <div className='mb-8'>
          <div className='text-gray-900 w-80 whitespace-nowrap overflow-hidden text-ellipsis font-bold text-xl mb-2'>
            {title}
          </div>
          <p className='text-gray-600 w-[22rem] h-32 overflow-hidden text-ellipsis text-base tracking-tighter'>
            {summary}
          </p>
        </div>
        <div className='flex items-center'>
          <Image
            className='w-10 h-10 rounded-full mr-4'
            src={avatar}
            alt='Avatar'
            width={40}
            height={40}
          />
          <div className='w-72 text-sm flex justify-between items-center'>
            <div>
              <p className='text-gray-900 leading-none'>{authorName}</p>
              <p className='text-gray-600'>{formatDate(createdAt)}</p>
              <p className='relative top-6'>{`#${category}`}</p>
            </div>
            <Link href={`/blog/${id}`}>
            <Button size='sm'>Details</Button>
            </Link>
          </div>
        </div>
        {isAdmin &&<div className='flex items-center justify-end gap-5 mt-4'>
         <Link href={`/admin/edit/${id}`}> <Edit /></Link>
          {loading? <Loader className='animate-spin' />: <Trash onClick={handleBlogDelete} className='text-red-600 cursor-pointer' />}
        </div>}
      </div>
    </div>
  );
};

export default BlogCard;
