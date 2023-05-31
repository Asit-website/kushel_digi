import "./App.css";
import { BrowserRouter as Router, Routes, Route, HashRouter} from "react-router-dom";
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
import Career from "./components/Career";
import About from "./components/About";
import Approach from "./components/Approach";
import ScrollToTop from "./components/Utils/ScrollToTop";
import Android from "./components/Android";
import Ios from "./components/Ios";
import Flutter from "./components/Flutter";
import Native from "./components/Native";
import Label  from "./components/Label";
import BigCommerce from "./components/BigCommerce";

function App() {
  return (
    <>
      <HashRouter>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/staff-augmentation" element={<StafArgu />} />
          <Route path="/ecommerce-solutions-usa" element={<Services />} />
          <Route path="/mobile-application-development-usa" element={<MobileApp />} />
          <Route path="/web-development-usa" element={<WebsiteDev />} />
          <Route path="/digital-marketing-agency-usa" element={<DigitalMarketing />} />
          <Route path="/ui-ux-designer-usa" element={<Uiux />} />
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
          <Route path="/carer" element={<Career/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/approach" element={<Approach/>}/>
          <Route path="/android" element={<Android/>}/>
          <Route path="/ios" element={<Ios/>}/>
          <Route path="/fluter" element={<Flutter/>}/>
          <Route path="/native" element={<Native/>}/>
          <Route path="/label" element={<Label/>}/>
          <Route path="/bigComm" element={<BigCommerce/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        </HashRouter>
    </>
  );
}

export default App;
