import { useState } from "react";
import { createContext } from "react";

export const counterContext = createContext({count: 0 ,handleClick : ()=>{}})


export default function CounterProvider({children}){
    const [count, setCount] = useState(0)
    const handleClick = ()=> {
    console.log("Clicked")
    setCount((prev)=>prev+1)
  }

    return (
        <counterContext.Provider value={{ count, handleClick }}>
            {children}
        </counterContext.Provider>
    )
}