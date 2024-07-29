import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { atom } from "jotai";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (dateVal: any) => {
    
  const date = new Date(dateVal);

  
  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }

  
  const formattedDate = date.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });

 
  return formattedDate;
};

type Status = {
  value: string;
  label: string;
};

export const statuses: Status[] = [
  {
    value: 'technology',
    label: 'Technology',
  },
  {
    value: 'lifestyle',
    label: 'Lifestyle',
  },
  {
    value: 'travel',
    label: 'Travel',
  },
  {
    value: 'food',
    label: 'Food',
  },
  {
    value: 'education',
    label: 'Education',
  },
  {
    value: 'health',
    label: 'Health',
  },
  {
    value: 'finance',
    label: 'Finance',
  },
  {
    value: 'business',
    label: 'Business',
  },
  {
    value: 'entertainment',
    label: 'Entertainment',
  },
  {
    value: 'sports',
    label: 'Sports',
  },
];

export const activeNav = atom<string>('All');
export const admin = atom<boolean>(false);