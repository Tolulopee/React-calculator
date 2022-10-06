import {useContext} from "react";
import {CalcContext} from "../Context/CalcContext";


const Input = () =>{

    const {calc} = useContext(CalcContext)

    return(
        <div className="input-screen">
        {calc.num ? calc.num : calc.res}
        </div>
        
    )
}

export default Input;