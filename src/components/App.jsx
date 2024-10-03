import React from 'react';
import {Route, Routes} from "react-router-dom";
import Initial from "./Initial.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

const App = () => {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Initial/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </div>
  )
}

export default App
