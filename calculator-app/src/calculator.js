import React from "react";
import "./calculator.css";
class Calculator extends React.Component{
render(){
return<>
<h1>Calculator</h1>

<div className="calulatorContainer">


   
<span>00</span>
   <div className="calNumbers">
   
     
<button className="Numbers">7</button>
      <button className="Numbers">8</button>
      <button className="Numbers">9</button>
      <button className="symbols">x</button>
      <button className="Numbers">4</button>
      <button className="Numbers">5</button>
      <button className="Numbers">6</button>
      <button className="symbols">-</button>
      <button className="Numbers">1</button>
      <button className="Numbers">2</button>
      <button className="Numbers">3</button>
      <button className="symbols">+</button>
      <button className="Numbers">0</button>
      <button className="symbols">c</button>
      <button className="symbols">=</button>
      <button className="symbols">/</button>
      

   </div>
    
   </div>
   </>
}

}

export default Calculator;