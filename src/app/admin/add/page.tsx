'use client';
import React, { useState } from 'react';

import Form from '@/shared/forms/form';


interface blogSchema{
    title: string;
    content: string;
    category: string;
    blogUrl: string;
    summary: string;
    authorName: string;
    avatar: string;
}

const AddBlog = () => {
  const [formData, setFormData] = useState<blogSchema>({
    title: '',
    content: '',
    category: '',
    blogUrl: '',
    summary: '',
    authorName: '',
    avatar: '',
  });
  return <Form formData={formData} setFormData={setFormData} />;
};

export default AddBlog;
