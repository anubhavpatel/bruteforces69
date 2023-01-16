import Header from "./components/Header";
import "./styles/App.css"
import { BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Testing from "./components/Testing";
import "./styles/Mediaquery.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function App(){
  return  <Router>
    <Header/>

<Routes>
  <Route path="/" element={<Home/>}/>
  
  <Route path="/about" element={<About/>}/>
  {/* <Route path="/contact" element={<Contact/>}/> */}
  <Route path="/contact" element={<Testing/>}/>
  <Route path="/services" element={<Services/>}/>
  <Route path="*" element={<Home/>}/>
</Routes>
<Footer/>
  </Router>;
}
export default App; 