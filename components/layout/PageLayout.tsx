import React from 'react'
import { Header } from '../Header';
import { Footer } from '../Footer';

interface PageLayoutProps{
    children: React.Node;
}

export default function PageLayout({children}: PageLayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />
        {children}
      <Footer />
    </div>
  )
}
