import { useContext } from "react"
import { counterContext } from "../store/counterContext"


function Button() {
  const {handleClick} = useContext(counterContext)

  return (
    <button onClick={handleClick}>Click me</button>
  )
}


export default Button
