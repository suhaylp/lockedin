import { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./Index.jsx";
import JobApp from './JobApp.jsx';
import LeetCode from './LeetCode.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';


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
      <Routes>
        <Route path="/" 
          element={<WithBackground Component={Index} color="#B8DEF2" />} />
        <Route
          path="jobapp"
          element={<WithBackground Component={JobApp} color="#FFD86D" />}
        />
        <Route
          path="leetcode"
          element={<WithBackground Component={LeetCode} color="#2B1F6D" />}
        />
        <Route
          path="login"
          element={<WithBackground Component={Login} color="#B8DEF2" />}
        />
        <Route
          path="signup"
          element={<WithBackground Component={SignUp} color="#B8DEF2" />}
        />
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
