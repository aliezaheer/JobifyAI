import React from 'react'
import Header from './_components/Header'

const DahsboardLayout = ({children}) => {
  return (
    
    <div>
        <Header />
        {children}
        </div>
  )
}

export default DahsboardLayout