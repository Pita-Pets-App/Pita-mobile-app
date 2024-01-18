
import { useEffect } from 'react';
import {Routes, Route, useNavigate } from 'react-router-dom';

import Dash from "./Components/AllServices.jsx"
import Login from "./Components/Login.jsx"
import { createContext, useState } from 'react';

function App() {
 
  
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Dash/>}></Route>
      </Routes>
      </div>
      
)}
export default App