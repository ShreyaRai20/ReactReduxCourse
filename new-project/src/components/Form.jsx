import { useRef, useState } from "react"


function Form() {
    const inputVal = useRef()
    // const [inputVal, setInputVal] = useState('')
    const [database, setDatabase] = useState('')
    // const handleInputVal = (e) => {
    //     setInputVal(e.target.value)
    // }
    const handleSubmission = (e) => {
        e.preventDefault()
        setDatabase(inputVal.current.value)
        inputVal.current.value = ""
    }
  return (
    <form onSubmit={(e)=>handleSubmission(e)}>
        <input ref={inputVal} placeholder="write your name" />
        {/* <input value={inputVal} placeholder="write your name" onChange={(e)=>{handleInputVal(e)}}/> */}
        <button type="submit"> ADD TO DATABASE</button>
        {/* <button onClick={(e)=>handleSubmission(e)}> ADD TO DATABASE</button> */}
        {database}
    </form>
  )
}

export default Form
