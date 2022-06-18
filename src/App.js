import React from "react";
import Login from "./screen/Login";
import Home from "./screen/Home";
import SignUp from "./screen/SignUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
import './App.css';

function App() {
  return (
    < div className="app">
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </Router>
    </ div>
  );
}

export default App;
