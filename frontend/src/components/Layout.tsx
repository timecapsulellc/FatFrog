import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'FatFrog Kingdom Quest' }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-green-100">
      <Head>
        <title>{title}</title>
        <meta name="description" content="FatFrog Kingdom Quest - A Web3 Gaming Ecosystem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
