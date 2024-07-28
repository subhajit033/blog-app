'use client';

import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CldImage, CldUploadWidget } from 'next-cloudinary';
import { postBlog } from '@/globalApi/api';
import { Loader2 } from 'lucide-react';
type Status = {
  value: string;
  label: string;
};

const statuses: Status[] = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];

interface blogSchema {
  title: string;
  content: string;
  category: string;
  blogUrl: string;
  summary: string;
  authorName: string;
  avatar: string;
}

const Form = ({
  formData,
  setFormData,
}: {
  formData: blogSchema;
  setFormData: any;
}) => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
    null
  );

  const onInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const successHandler = (result: any, isBlog: boolean) => {
    const url = result?.info?.secure_url || '';
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      ...(isBlog ? { blogUrl: url } : { avatar: url }),
    }));
  };
  const onError = () => {};

  useEffect(() => {
    setFormData({ ...formData, category: selectedStatus?.label });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStatus]);

  //   useEffect(() => {
  //     console.log(formData);
  //   }, [formData]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await postBlog(formData);
      console.log(res);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  return (
    <div className='flex justify-center w-full gap-10'>
      <form onSubmit={handleSubmit} className='w-[50vw] space-y-4'>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label htmlFor='title'>Title of blog</Label>
          <Input
            onChange={onInputChange}
            name='title'
            value={formData?.title}
            required
            type='text'
            id='title'
            placeholder='title..'
          />
        </div>
        <div className='grid w-full gap-1.5'>
          <Label htmlFor='message'>Blog content</Label>
          <Textarea
            onChange={onInputChange}
            name='content'
            value={formData?.content}
            placeholder='type your content here'
            id='message'
          />
        </div>
        <div className='flex items-center gap-10'>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant='outline' className='w-[150px] justify-start'>
                {selectedStatus ? (
                  <>{selectedStatus.label}</>
                ) : (
                  <>+ Set status</>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-[200px] p-0' align='start'>
              <StatusList
                setOpen={setOpen}
                setSelectedStatus={setSelectedStatus}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className='grid w-full gap-1.5'>
          <Label htmlFor='summary'>Blog Summary</Label>
          <Textarea
            onChange={onInputChange}
            name='summary'
            value={formData?.summary}
            placeholder='Type your summay here.'
            id='summary'
          />
        </div>
        <div className='flex items-center gap-10'>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='title'>Author Name</Label>
            <Input
              onChange={onInputChange}
              name='authorName'
              value={formData?.authorName}
              required
              type='text'
              id='title'
              placeholder='Name here'
            />
          </div>
        </div>

        <div className='flex justify-end my-4'>
          <Button type='submit'>
            {loading ? <Loader2 className='text-white' /> : 'Submit'}
          </Button>
        </div>
      </form>
      <div className='space-y-8'>
        <div className=' flex items-center gap-6'>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='picture'>Upload Image</Label>

            <CldUploadWidget
              onSuccess={(res) => successHandler(res, true)}
              onError={onError}
              uploadPreset='subha_imaginify'
            >
              {({ open }) => {
                return (
                  <button
                    className='bg-primary px-4 py-2 rounded-md text-white'
                    onClick={() => open()}
                  >
                    Upload an Image
                  </button>
                );
              }}
            </CldUploadWidget>
          </div>
          {formData?.blogUrl && (
            <CldImage
              width='80'
              height='80'
              src={formData?.blogUrl}
              sizes='100vw'
              alt='Description of my image'
            />
          )}
        </div>
        <div className='flex items-center gap-8'>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='avatar'>Author Image</Label>
            <CldUploadWidget
              onSuccess={(res) => successHandler(res, false)}
              onError={onError}
              uploadPreset='subha_imaginify'
            >
              {({ open }) => {
                return (
                  <button
                    className='bg-primary px-4 py-2 rounded-md text-white'
                    onClick={() => open()}
                  >
                    Upload an Image
                  </button>
                );
              }}
            </CldUploadWidget>
          </div>
          {formData.avatar && (
            <CldImage
              width='80'
              height='80'
              src={formData?.avatar}
              sizes='100vw'
              alt='Description of my image'
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;

function StatusList({
  setOpen,
  setSelectedStatus,
}: {
  setOpen: (open: boolean) => void;
  setSelectedStatus: (status: Status | null) => void;
}) {
  return (
    <Command>
      <CommandInput placeholder='Filter status...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {statuses.map((status) => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={(value) => {
                setSelectedStatus(
                  statuses.find((priority) => priority.value === value) || null
                );
                setOpen(false);
              }}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
