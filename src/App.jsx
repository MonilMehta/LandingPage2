import './App.css'
import Landing from './components/Landing.jsx'
import Navbar from './components/Navbar.jsx'
import Services from './components/Services.jsx'
import University from './components/Universities.jsx'
import Enquiry from './components/Enquiry.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <div>
        <Navbar/>
        <Landing/>
        <Services/>
        <University/>
        <Enquiry/>
        <Footer/>
    </div>
  )
}

export default App
