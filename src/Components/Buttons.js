import { useContext } from "react";
import { CalcContext } from "../Context/CalcContext";

const getStyleName =(value) =>{
    const className ={
        '=':'equal',
        'X':'sign',
        '/':'sign',
        '+':'sign',
        '-':'sign',
    }
    return className[value] 
}



const Buttons = ({value}) =>{
    const {calc,setCalc} = useContext(CalcContext);
     
    //For when the user clicks on .
    const dotClick= () =>{
        setCalc({
            ...calc,
            num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
          });
    }

    //  For when the user clicks on C
    const resetClick = () =>{
        setCalc({
            sign: "",
            num: 0,
            res: 0,
          });
    }

    //For when the user clicks on a number
    const handleClickButton =() =>{
        const numberString = value.toString();
        let numberValue;
        if (numberString === "0" && calc.num === "0"){
            numberValue = "0";
        } else{
            numberValue = Number (calc.num + numberString)
        }

        setCalc({
            ...calc,
            num: numberValue,
        })

    }

    //  For when the user clicks on any of the four signs
    const signClick = () =>{
        setCalc({
            sign:value,
            res:!calc.res && calc.num ? calc.num : calc.res,
            num:0
        })
    }

    //For when the user clicks on the equal sign
    const equalClick = () =>{
        if(calc.res && calc.num){
            const math = (a,b,sign) =>{
                const result ={
                    '+':(a,b) => a+b,
                    '-':(a,b) => a-b,
                    'X':(a,b) => a*b,
                    '/':(a,b) => a/b,
                }
                return result[sign](a,b);
            }
            setCalc({
                res:math(calc.res,calc.num,calc.sign),
                sign:'',
                num:0
            })
        }
    }

    //For when the user clicks on percent sign
    const percentClick = ( ) =>{
        setCalc({
            num:(calc.num / 100),
            res:(calc.res / 100),
            sign:''
        })
    }

    //For when the user clicks on +/- sign
    const invertClick =() =>{
        setCalc ({
            num:calc.num ? calc.num * -1 :0,
            res:calc.res ? calc.res * -1 :0,
            sign:""
        })
    }
    
  
    const handleBtnClick = () =>{

        const results ={
            '.':dotClick,
            'C':resetClick,
            '+-':invertClick,
            '=':equalClick,
            '+':signClick,
            '-':signClick,
            'X':signClick,
            '/':signClick,
            '%':percentClick,
        }
        if (results[value]){
            return results[value]()
        } else {
            return handleClickButton()
        }

    }
    return(
        <button onClick={handleBtnClick}  className={`${getStyleName(value)} button`}>
            {value}
            </button>
    )
}

export default Buttons;