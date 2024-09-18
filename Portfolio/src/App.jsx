import Navigation from './components/Navigation.jsx'
import { Outlet } from 'react-router-dom'
import Header from './components/header.jsx'

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
