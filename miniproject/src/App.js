import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Route/Login";
import SignUp from "./Route/Signup";
import Logout from "./Route/Logout/index";

import ListEmployee from "./Route/ListEmployee";
import ViewEmployee from "./Route/ViewEmployee";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/employees" element={<ListEmployee />} />
            <Route path="/employee/:id" element={<ViewEmployee />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
