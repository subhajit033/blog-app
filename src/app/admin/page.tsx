'use client'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Home from '../page'
import useAdmin from '@/shared/hooks/useAdmin'


const AdminHome = () => {
  const pathname = usePathname();
  const {isAdmin, setIsAdmin}= useAdmin()

  useEffect(()=>{
    setIsAdmin(true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
  
  return (
    <Home />
  )
}

export default AdminHome