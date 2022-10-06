import React ,{useState} from "react";
import './App.css';
import  Main from './Components/Main.js'
import Input from './Components/Input.js'
import ButtonSpace from './Components/ButtonSpace.js'
import Buttons from './Components/Buttons.js'
import CalcProvider from "./Context/CalcContext";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];
const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

const math = (a, b, sign) =>
  sign === "+" ? a + b : sign === "-" ? a - b : sign === "X" ? a * b : a / b;



function App() {

  

 return(

      <CalcProvider>
      <Main>
        <Input  />
        <ButtonSpace>
        {
          btnValues.flat().map((btn, i) => {
            return (
              <Buttons
                key={i}
                
                value={btn}
                
              />
            );
          })
        }
      </ButtonSpace>


      </Main>
      </CalcProvider>

  
  )
  
}

export default App;
