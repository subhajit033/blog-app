'use client'
import React, { useState } from 'react';

const Header = () => {
  const category: string[] = [
    'All',
    'category 1',
    'category 2',
    'category 3',
    'category 4',
  ];
  const [active, setActive] = useState('All')
  return (
    <div className='w-full flex justify-center my-6'>
      <div className='w-[36rem] rounded-full border border-gray-400 flex justify-between'>
        {category.map((cat, i) => {
          return (
            <p onClick={()=> setActive(cat)} key={i} className={`px-4 py-2 ${active === cat ? 'bg-gray-300': ''} rounded-full cursor-pointer`}>
              {cat}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
