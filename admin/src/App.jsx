
import { useEffect } from 'react';
import {Routes, Route, useNavigate } from 'react-router-dom';

import Dash from "./Components/AllServices.jsx"
import Login from "./Components/Login.jsx"
import Edit from "./Components/EditProfile.jsx"
import { createContext, useState } from 'react';

function App() {
 
  
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Edit/>}></Route>
      </Routes>
      </div>
      
)}
export default App