import React from 'react';
import Image from 'next/image';
import { getSingleBlog } from '@/globalApi/api';
import { formatDate } from '@/lib/utils';

const page = async ({ params }: { params: { blogId: string } }) => {
  const res = await getSingleBlog(params?.blogId);
  const {title, content, category, authorName, createdAt} = res?.data;

  return (
    <article className='max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900'>
      <div className='w-full mx-auto space-y-4 text-center'>
        <p className='text-xs font-semibold tracking-wider uppercase'>
          #{category}
        </p>
        <h1 className='text-4xl font-bold leading-tight md:text-5xl'>
          {title}
        </h1>
        <p className='text-sm dark:text-gray-600'>
          by{'  '}
          <a
            rel='noopener noreferrer'
            href='#'
            target='_blank'
            className='underline dark:text-violet-600'
          >
            <span itemProp='name'>{authorName}</span>
          </a>
          {'   '}on{'   '}
          <time dateTime='2021-02-12 15:34:18-0200'>{formatDate(createdAt)}</time>
        </p>
      </div>
      <div className='dark:text-gray-800'>
        <p>{content}</p>
      </div>
      <div className='pt-12 border-t dark:border-gray-300'>
        <div className='flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row'>
          {/* <Image
            src='https://source.unsplash.com/75x75/?portrait'
            alt=''
            className='self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300'
            width={96}
            height={96}
          /> */}
          
        </div>
      
      </div>
    </article>
  );
};

export default page;
