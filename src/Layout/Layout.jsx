// src/Layout/Layout.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className=""> {/* Add top padding to avoid overlap */}
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
