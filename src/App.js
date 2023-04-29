import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
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
import OurPartner from "./components/OurPartner";
import Playbook from "./components/Playbook";
import Kickiz from "./components/Kickiz";
import DigitalMarketing from "./components/DigitalMarketing";
import Uiux from "./components/Uiux";
import HireTeam from "./components/HireTeam";
import Error from "./components/Error";
import Portfolio from "./components/Portfolio";
import './index2.css';
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/staff" element={<StafArgu />} />
          <Route path="/service" element={<Services />} />
          <Route path="/mobileApp" element={<MobileApp />} />
          <Route path="/website" element={<WebsiteDev />} />
          <Route path="/digitalmarket" element={<DigitalMarketing />} />
          <Route path="/uiux" element={<Uiux />} />
          <Route path="/hire" element={<HireTeam />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/nda" element={<Nda />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/partner" element={<OurPartner />} />
          <Route path="/playbook" element={<Playbook />} />
          <Route path="/kick" element={<Kickiz />} />
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
