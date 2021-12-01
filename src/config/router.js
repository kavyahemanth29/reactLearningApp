import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calculator from "../component/calculator/calculator";
import ClassComponent from "../component/classComponent";
import ClassComponentTwo from "../component/classComponentTwo";
import CalculatorTwo from "../component/calculatorTwo/calculator.jsx";
import { Contact, Kavya, Ani, Hemanth } from "../component/contact";
import Home from "../component/home/home.jsx";
import NoRoute from "../component/noRoute";
import FunctionalComponent from "../component/functionalComponent";
import ReduxComponent from "../component/reduxComponent";


export default function AshvayanRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/kavya" element={<Kavya />} />
        <Route path="/ani" element={<Ani />} />
        <Route path="/hemanth" element={<Hemanth/>} />
        <Route path="/class-component" element={<ClassComponent />} />
        <Route path="/class-componentTwo" element={<ClassComponentTwo />}/>
        <Route path="/calculator" element={<Calculator/>}/>
        <Route path="/calculatorTwo" element={<CalculatorTwo/>}/>
        <Route path="/functionalCalculator" element={<FunctionalComponent/>} />
        <Route path="/redux-component" element={<ReduxComponent/>} />
        <Route path="*" element={<NoRoute />} />
      </Routes>
    </Router>
  );
}