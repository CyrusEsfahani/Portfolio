import React from 'react'


const Header = ({children}) => {
  return (
    <header>
      <h1>Cyrus Esfahani</h1>
      {children}
    </header>
  )
}

export default Header;