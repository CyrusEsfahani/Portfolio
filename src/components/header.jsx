import React from 'react'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Cyrus Esfahani</h1>
        <Navigation />
      </div>
    </header>
  )
}

export default Header