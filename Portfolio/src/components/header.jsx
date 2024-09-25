import React from 'react'
import Navigation from './Navigation'
import '../styles/Header.css'

const Header = ({children}) => {
  return (
    <header>
      <h1>Cyrus Esfahani</h1>
      {children}
    </header>
  )
}

export default Header;