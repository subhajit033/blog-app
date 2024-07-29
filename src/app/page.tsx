'use client';
import BlogCard from '@/shared/cards/blog-card';
import { getAllBlogs } from '@/globalApi/api';
import { useEffect, useState } from 'react';
import { activeNav } from '@/lib/utils';
import useNavbarChange from '@/shared/hooks/useNavbarChange';
export default function Home({ isAdmin }: { isAdmin: boolean }) {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { active, setActive } = useNavbarChange();
  useEffect(() => {
    handleCategoryChange(active)
  }, [active]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await getAllBlogs();
      setBlogs(res?.data || []);
    };

    fetchBlogs();
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredBlogs =
    selectedCategory === 'All'
      ? blogs
      : blogs.filter((blog: any) => blog.category === selectedCategory);

  return (
    <div className='flex justify-center items-start flex-wrap gap-10'>
      {filteredBlogs.length === 0 ? (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
          <h1 className='text-2xl font-semibold text-gray-500'>
            No Blog found
          </h1>
        </div>
      ) : (
        <div className='flex justify-center items-start flex-wrap gap-10'>
          {filteredBlogs.map((blog: any) => (
            <BlogCard key={blog?.id} {...blog} isAdmin={isAdmin} />
          ))}
        </div>
      )}
    </div>
  );
}
