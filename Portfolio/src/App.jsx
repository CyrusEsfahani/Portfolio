import Navigation from './components/Navigation.jsx'
import { Outlet } from 'react-router-dom'
import Header from './components/header.jsx'
import Footer from './components/Footer.jsx'
import contact from './components/Contact.jsx'
import './App.css'


function App() {


  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>
        <Outlet />
      </main>
    
    </>
  )
}

export default App
