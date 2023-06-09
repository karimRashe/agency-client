import { Routes, Route} from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import OurPortfali from "./Pages/Home/OurPortfali";
import OurTeam from "./Pages/Home/OurTeam ";
import Login from "./Pages/Login/Login";
import Navbar from "./Pages/Shared/Navbar";


function App() {
  return (
    <div  className=''>
      <Navbar></Navbar>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/ourPortfali" element={<OurPortfali></OurPortfali>}></Route>
       <Route path="/ourTeam" element={<OurTeam></OurTeam>}></Route>
       <Route path="/about" element={<About></About>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>

     </Routes>
    </div>
  );
}

export default App;
