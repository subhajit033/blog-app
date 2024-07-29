import { Loader } from 'lucide-react';
import React from 'react';

const Spinner = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
     <Loader className='animate-spin' />
    </div>
  );
};

export default Spinner;
