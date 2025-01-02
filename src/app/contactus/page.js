import React from 'react'
import ContactSection from '../componets/ContactSection'
import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer'
function page() {
  return (
    <div>
      <Navbar />
      <div className='my-5 py-1'></div>
        <ContactSection />
        <Footer />
    </div>
  )
}

export default page
