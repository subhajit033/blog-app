import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

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