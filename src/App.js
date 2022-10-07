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
                className={btn === "=" ? "equal" : ""}
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
