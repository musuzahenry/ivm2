
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



function App() {
  return (
    <>
    <Navbar />
      <Outlet />{/* the children in the routers will display here */}
    <Footer />
    </>
  )
}

export default App
