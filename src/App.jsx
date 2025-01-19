import { useEffect,useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { onAuthStateChanged } from "firebase/auth";
//import { auth } from "./firebase";
//import Login from "./login.jsx"
import Index from "./Index.jsx";

import './css/App.css'
import LeetCode from './LeetCode.jsx';
//import Login from './logintest.jsx'
//import GoogleSignIn from "./auth.jsx"

function App() {
  const [count, setCount, setUser ] = useState(0);

  


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="leetcode" element={<LeetCode />}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

//  <Route path="login-test" element={<Login/>}></Route>

export default App