import React from 'react';
import Router from '../config/router';

function App() {
  return (
    <>
      <div className="links" >
        <a href="/">Functional Component</a>{" | "}<a href="/contact">Contact Link</a>{" | "}<a href="/class-component">Class Component</a>
        {"|"}<a href="/class-componentTwo">Class componentTwo</a>{" | "}<a href="/calculator">Calculator</a>{" | "}
        <a href="/calculatorTwo">CalculatorTwo</a>{" | "}
        <a href="/functionalCalculator">Functional Calculator</a>{" | "}
        <a href="/redux-component">Redux Component</a>
      </div>
      <Router />
    </>
  );
}

export default App;