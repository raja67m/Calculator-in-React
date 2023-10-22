import React from "react";
import "./calculator.css";
class Calculator extends React.Component{
   constructor(props) {
    super(props);
    this.state = {
      displayValue: "", // Initialize the display value
    };
  }

  // handlingButton 
  handleButtonClick = (value) => {
   if (value === "=") {
     // Handle the calculation
     this.calculateResult();
   } else if (value === "c") {
     // Clear the display
     this.clearDisplay();
   } else {
     // Update the display with the clicked button value
     this.setState((prevState) => ({
       displayValue: prevState.displayValue + value,
     }));
   }
 };


 // calculating value
 calculateResult = () => {
   try {

     const result = eval(this.state.displayValue);
     this.setState({ displayValue: result });
   } catch (error) {
     this.setState({ displayValue: "Error" });
   }
 };

 clearDisplay = () => {
   this.setState({ displayValue: "" });
 }; 
render(){
return<>
<h1>Calculator</h1>

<div className="calulatorContainer">


   
<span>{this.state.displayValue || "0"}</span>
   <div className="calNumbers">
   
     
<button className="Numbers" onClick={() => this.handleButtonClick("7")}>7</button>
      <button className="Numbers" onClick={() => this.handleButtonClick("8")}>8</button>
      <button className="Numbers"  onClick={() => this.handleButtonClick("9")}>9</button>
      <button className="symbols" onClick={() => this.handleButtonClick("*")}>x</button>
      <button className="Numbers" onClick={() => this.handleButtonClick("4")}>4</button>
      <button className="Numbers" onClick={() => this.handleButtonClick("5")}>5</button>
      <button className="Numbers" onClick={() => this.handleButtonClick("6")}>6</button>
      <button className="symbols" onClick={() => this.handleButtonClick("-")}>-</button>
      <button className="Numbers" onClick={() => this.handleButtonClick("1")}>1</button>
      <button className="Numbers" onClick={() => this.handleButtonClick("2")}>2</button>
      <button className="Numbers" onClick={() => this.handleButtonClick("3")}>3</button>
      <button className="symbols" onClick={() => this.handleButtonClick("+")}>+</button>
      <button className="Numbers" onClick={() => this.handleButtonClick("0")}>0</button>
      <button className="symbols" onClick={() => this.handleButtonClick("c")}>c</button>
      <button className="symbols" onClick={() => this.handleButtonClick("=")}>=</button>
      <button className="symbols" onClick={() => this.handleButtonClick("/")}>/</button>
      

   </div>
    
   </div>
   </>
}

}

export default Calculator;