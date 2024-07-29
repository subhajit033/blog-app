'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Home from '../page'

const AdminHome = () => {
  const pathname = usePathname();
  
  return (
    <Home isAdmin={true} />
  )
}

export default AdminHome