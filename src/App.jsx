import { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./Index.jsx";
import JobApp from './JobApp.jsx';
import LeetCode from './LeetCode.jsx';
import Login from './Login.jsx';
import ScrollToTop from "./ScrollToTop.jsx";

import './css/App.css';

function useBodyBackground(color) {
  useEffect(() => {
    document.body.style.backgroundColor = color;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [color]);
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="leetcode" element={<LeetCode />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="job-app" element={<JobApp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

// Higher-Order Component to handle background color logic
function WithBackground({ Component, color }) {
  useBodyBackground(color);
  return <Component />;
}

export default App;
