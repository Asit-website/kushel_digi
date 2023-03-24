import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Home from './components/Home'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StafArgu from "./components/StafArgu";
import Services from "./components/Services";
import MobileApp from "./components/MobileApp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/staff" element={<StafArgu/>}/>
           <Route path="/service" element={<Services/>}/>
           <Route path="/mobileApp" element={<MobileApp/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
