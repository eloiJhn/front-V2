import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navigation/Navbar.js";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom"
import Home from "./components/Home";
import Champions from "./components/Champions";
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
    <Navbar>
      <Link to ="/">Home</Link> <br />
      <Link to ="/champions">Champions</Link> <br />
    </Navbar>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/champions" element={<Champions />}/>
   </Routes>
   <Footer></Footer>
   </BrowserRouter>


);
};

export default App;