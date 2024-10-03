import React from 'react';
import {Route, Routes} from "react-router-dom";
import Initial from "./Initial.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import ResetPassword from "./ResetPassword.jsx";
import OTPCode from "./OTPCode.jsx";
import NewPassword from "./NewPassword.jsx";

const App = () => {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Initial/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/new-password" element={<NewPassword/>}/>
          <Route path="/reset-password" element={<ResetPassword/>}/>
          <Route path="/otp" element={<OTPCode/>}/>
        </Routes>
      </div>
  )
}

export default App
