'use client'

import React, { useState, useEffect } from 'react';
import Form from '@/shared/forms/form';
import Spinner from '@/app/loader';
import { getSingleBlog } from '@/globalApi/api';
interface blogSchema{
  title: string;
  content: string;
  category: string;
  blogUrl: string;
  summary: string;
  authorName: string;
  avatar: string;
  id?: string
}

const EditBlog =  ({ params }: { params: { blogId: string } }) => {
  
  const[loading, setLoading] = useState(true);

  const getBlogDetail = async ()=>{
    try{
      const res = await getSingleBlog(params?.blogId);
      console.log(res.data);
      setFormData({...res?.data})
      setLoading(false);
    }catch(e){
      setLoading(false);
      console.log(e);
    }
  }
  useEffect(()=>{
    getBlogDetail();
  }, [])

  
  const [formData, setFormData] = useState<blogSchema>({
    title: '',
    content: '',
    category: '',
    blogUrl: '',
    summary: '',
    authorName: '',
    avatar: '',
  });

  if(loading){
    return <Spinner />
  }

  return <Form formData={formData} setFormData={setFormData} edit={true} />;
};

export default EditBlog;
