import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./Index.jsx";

import './css/App.css'
import LeetCode from './LeetCode.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="leetcode" element={<LeetCode />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App