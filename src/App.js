import  React from "react"
import Register from "./usercomponents/Registration";
import UserDetatils from "./usercomponents/Userinfo";
import regsucess from "./usercomponents/Registrationpass";
import { Routes, Route,  } from "react-router-dom";

function App() {
  <Routes>
        <Route exact path="/Regsucess" element={<regsucess />} />
       </Routes>
  return (
    <div>  
    <Register />
    </div>
  );
}

export default App;
