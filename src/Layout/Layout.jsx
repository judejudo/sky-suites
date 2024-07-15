import React, { useState } from 'react'
// import Dashboard from '../pages/dashboard.page'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({children}) => {

  return (
    <>
   <Header  />
   <main>
   {children}
   </main>
   <Footer />
    </>
  )
}

export default Layout