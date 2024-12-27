
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/home.jsx";
import BasicExample from "./component/initial";
import Display from "./component/display.jsx";
import Organistion from "./component/organistion.jsx"
import Milk from "./component/milk.jsx";
import LogIn from "./component/login.jsx";
import Shop from "./component/shop.jsx";






function App(){
  return(
    <>
    {/* <He/> */}
    <BrowserRouter>
    <BasicExample/>
    <Routes>
      <Route path="/" element={<Display/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/organistion" element={<Organistion/>}/>
      <Route path="/milk" element={<Milk/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/login" element={<LogIn/>}/>
    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App;
