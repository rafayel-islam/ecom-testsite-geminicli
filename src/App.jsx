
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";

function App() {
  

  return (
    <>
      <Navbar />
      <div className="pt-0">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
