import Home from "./Components/Home/Home";
import NavBar from "./Components/Navbar/NavBar";
import './styles.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Solution from "./Components/Solution/Solution";
import Vision from "./Components/Vision/Vision";
import Blog from "./Components/Blog/Blog";
import NotFound from "./Components/NotFound";


export default function App() {
  return (
    <div className='app'>
      <Router>
      <NavBar/>    
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/Solution" element={<Solution/>}/>
      <Route exact path="/Vision" element={<Vision/>}/>
      <Route exact path="/Blog" element={<Blog/>}/>
      <Route exact  element={<NotFound/>}/>
      
      </Routes>
  </Router>
    </div>
  );
}
