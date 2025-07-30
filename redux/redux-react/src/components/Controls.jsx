import { useRef } from "react"
import { useDispatch } from "react-redux"


// function Controls() {
//   const dispatch = useDispatch()
//   const inputEl = useRef()

//   const handleIncrement = () => {
//     dispatch({type: "INCREMENT"})
//   }

//   const handleDecrement = () => {
//     dispatch({type: "DECREMENT"})
//   }

//   const handleAddtion = () => {
//     dispatch({type: "ADD", payload: {
//       num: inputEl.current.value
//     }})
//     inputEl.current.value = ''
//   }

//   const handleSubtractiion = () => {
//     dispatch({type: "SUB", payload: {
//       num: inputEl.current.value
//     }})
//     inputEl.current.value = ''
//   }

//   const handlePrivacy = () => {
//     dispatch({type: "PRIVACY_TOGGLE"})
//   }

//   return (
//     <>
//   <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
//     <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleIncrement}>+1</button> 
//     <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={handleDecrement}>-1</button> 
//   </div>
//     <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
//     <input type="text" ref={inputEl} className="btn btn-primary btn-lg px-4 gap-3"/>
//     <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={handleAddtion}>Add</button> 
//     <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={handleSubtractiion}>Subtract</button> 
//     <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={handlePrivacy}>privacy</button> 
//   </div>
//   </>
//   )
// }

function Controls() {
  const dispatch = useDispatch()
  const inputEl = useRef()

  const handleIncrement = () => {
    dispatch({
      type: "INCREMENT"
    })
  }
    const handleDecrement = () => {
    dispatch({
      type: "DECREMENT"
    })
  }

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputEl.current.value
      }
    })
  }
  const handleSub = () => {
    dispatch({
      type: "SUB",
      payload: {
        num: inputEl.current.value
      }
    })
  }
  const handlePrivacy = () => {
    dispatch({
      type: "PRIVACY"
    })
  }
  return(
    <>
  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
    <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleIncrement} >+1</button> 
    <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={handleDecrement} >-1</button> 
  </div>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
    <input type="text" className="btn btn-primary btn-lg px-4 gap-3" ref={inputEl}/>
    <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={handleAdd}>Add</button> 
    <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={handleSub}>Subtract</button> 
    <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={handlePrivacy}>privacy</button> 
  </div>
  </>
  )
}

export default Controls
