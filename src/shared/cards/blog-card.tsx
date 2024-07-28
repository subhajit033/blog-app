import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Edit, Trash } from 'lucide-react';

interface cardprops {
  createdAt: string;
  title: string;
  content: string;
  image: string;
  excerpt: string;
  userId: string;
  id: string
}

const BlogCard = ({
  createdAt,
  title,
  content,
  excerpt,
  image,
  userId,
  id
}: cardprops) => {
  return (
    <div className='max-w-sm lg:max-w-[36rem] lg:flex rounded-xl'>
      <div
        className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-'
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/cd4f/fe48/4959c85e418cc00a9e1d040ad8aa3da4?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iPV23dRe0rUlME2jvqqFPOCKHCM~FRgaYPEUnYzLfEqB23WhaZbCM4Eg8PfOD9UHTH-TJ2siUWbhc4P2g93grxJ1KYRnIt6EP1c9-pcHi4Sqqp72mZHO1NvIrGwJO1jIFBchx6WxGgtlIxsNtvTWKjBnNAgycV27KWRoKLiCpCP23KDf32nlz-HAphSpLzExO29GkhZwy3WP-hUFBjVFnCz2DGGc5RcR3IYdYecMCbWHU6v0DMR2PQf5mxC-AHQPWvUVFqVGOGfeTK7z62PQqmEqL1ONHJKrq7GaK0e7cVjMzZkr0LjE0TSoIUgPEDnu1TUNslvhJfakPbFAvJVqXg__')`,
        }}
        title='Blog Image'
      ></div>
      <div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
        <div className='mb-8'>
          <div className='text-gray-900 w-80 whitespace-nowrap overflow-hidden text-ellipsis font-bold text-xl mb-2'>
            {'title'}
          </div>
          <p className='text-gray-600 w-[22rem] h-32 overflow-hidden text-ellipsis text-base tracking-tighter'>
            {'excerpt'}
          </p>
        </div>
        <div className='flex items-center'>
          <Image
            className='w-10 h-10 rounded-full mr-4'
            src='/img/jonathan.jpg'
            alt='Avatar'
            width={40}
            height={40}
          />
          <div className='w-72 text-sm flex justify-between items-center'>
            <div>
              <p className='text-gray-900 leading-none'>Jonathan Reinink</p>
              <p className='text-gray-600'>{'createdAt'}</p>
            </div>
            <Link href={`/blog/${id}`}>
            <Button size='sm'>Details</Button>
            </Link>
          </div>
        </div>
        <div className='flex items-center justify-end gap-5 mt-4'>
          <Edit />
          <Trash className='text-red-600' />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
