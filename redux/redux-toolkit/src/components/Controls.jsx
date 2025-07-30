import { useRef } from "react"
import { useDispatch } from "react-redux"
import { counterActions } from "../store/counter"
import { privacyActions } from "../store/privacy"

function Controls() {
  const dispatch = useDispatch()
  const inputEl = useRef()

  const handleIncrement = () => {
    console.log("increment",counterActions.increment())
    dispatch(counterActions.increment())
  }
    const handleDecrement = () => {
    counterActions.decrement()
    dispatch(counterActions.decrement())
  }

  const handleAdd = () => {
    dispatch(counterActions.add({
      num: inputEl.current.value
    }))

    inputEl.current.value = ""
  }
  const handleSub = () => {
    dispatch(counterActions.sub(inputEl.current.value))
    inputEl.current.value = ""
  }
  const handlePrivacy = () => {
    dispatch(privacyActions.privacyToggle())
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
