import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import PropTypes from 'prop-types'
import Home from '../../pages/Auth/Home/Home'

export default function MainLayout({ children }) {
  return (
    <div>
        
      <Header />   
      <Home /> 
      {children}
      <Footer />
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}