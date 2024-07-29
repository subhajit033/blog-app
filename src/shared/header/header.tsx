'use client';
import React, { useState } from 'react';
import { statuses } from '@/lib/utils';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useNavbarChange from '../hooks/useNavbarChange';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  // const [active, setActive] = useState('All');
  // statuses.unshift({label:'All', value: 'all'})

  const categories: { label: string; value: string }[] = [
    { label: 'All', value: 'all' },
    ...statuses,
  ];

  const { active, setActive } = useNavbarChange();
  const path = usePathname();

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='w-full flex justify-center my-6'>
      <div className='slider-container w-[36rem]  border border-gray-400 rounded-full'>
        <Slider {...settings}>
          {categories.map((cat, i) => {
            return (
              <p
                onClick={() => {
                  setActive(cat.label);
                }}
                key={i}
                className={`px-4 py-2 ${
                  active === cat.label ? 'bg-gray-300' : ''
                } rounded-full cursor-pointer`}
              >
                {cat.label}
              </p>
            );
          })}
        </Slider>
      </div>
      {path.startsWith('/admin') ? (
        <Link href={'/admin/add'}>
          <Button className='absolute top-6 right-6 z-20'>
            {' '}
            <Plus /> Add Blog
          </Button>
        </Link>
      ):(
        <Link href={'/admin'}>
          <Button className='absolute top-6 right-6 z-20'>
            {' '}
            Admin Panel
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
