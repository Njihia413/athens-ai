import React from 'react';
import {Route, Routes} from "react-router-dom";
import Initial from "./Initial.jsx";

const App = () => {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Initial/>}/>
        </Routes>
      </div>
  )
}

export default App
