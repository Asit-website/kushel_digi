import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Home from './components/Home'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StafArgu from "./components/StafArgu";
import Services from "./components/Services";
import MobileApp from "./components/MobileApp";
import WebsiteDev from "./components/WebsiteDev";
import Privacy from "./components/Privacy";
import Refund from "./components/Refund";
import Quality from "./components/Quality";
import Nda from "./components/Nda";
import Terms from "./components/Terms";

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
           <Route path="/website" element={<WebsiteDev/>}/>

           <Route path="/privacy" element={<Privacy/>}/>
           <Route path="/refund" element={<Refund/>}/>
           <Route path="/quality" element={<Quality/>}/>
           <Route path="/nda" element={<Nda/>}/>
           <Route path="/terms" element={<Terms/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
