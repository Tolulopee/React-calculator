import React from 'react';
import { createContext } from 'react';

export const CalcContext = createContext()

const CalcProvider = ({children}) => {
    const[calc,setCalc] =  React.useState({
        sign:"",
        num:0,
        res:0
    })

    const providerValue = {
        calc,setCalc
    }
  return (
    <CalcContext.Provider value={providerValue}>
       {children}
        </CalcContext.Provider>
  )
}

export default CalcProvider