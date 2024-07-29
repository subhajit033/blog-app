import React from 'react'
import { Loader } from 'lucide-react'

const loader = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
     <Loader />
    </div>
  )
}

export default loader