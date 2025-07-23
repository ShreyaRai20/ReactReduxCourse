import { useState } from "react"
import Buttons from "./components/Buttons"
import Display from "./components/Display"


function App() {
  const [calVal,setCalVal] = useState('')
  const onButtonClick = (val) => {
    if(val === 'C'){
      setCalVal("")
    } else if(val === "="){
      const res = eval(calVal);
      setCalVal(res)
    } else{
      const newVal = calVal + val
      setCalVal(newVal)
    }
  }

  // const onKeydown = (e) =>{
  //   if(e.key === "Enter"){
  //     setCalVal(e.target.value)
  //     console.log(e.target.value)
  //   }
  // }

  return (
    <div id="calculator-container">
      <Display displayVal ={calVal}/>
      <Buttons onButtonClick = {onButtonClick}/>
    </div>
  )
}

export default App
