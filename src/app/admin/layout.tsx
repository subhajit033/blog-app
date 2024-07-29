import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin | Blog App',
  description:
    'Dive into a world of thought-provoking articles and insights on technology, lifestyle, and creativity. Stay updated with the latest trends and ideas at Insightful Minds Blog.',
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
