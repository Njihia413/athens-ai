import React from 'react';
import {Route, Routes} from "react-router-dom";
import Initial from "./Initial.jsx";
import Login from "./Login.jsx";

const App = () => {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Initial/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
  )
}

export default App
