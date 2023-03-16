
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
     <>
       <Navbar/>
       <Contact/>
       <Footer/>
     </>
  );
}

export default App;
