import { useState, useRef, useContext } from "react"
import { IoMdAdd } from "react-icons/io";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";

function AddToDo() {
  // const [itemName,setItemName] = useState('')
  // const [date,setDate] = useState('')
  const toDoNameElement = useRef(0)
  const toDoDateElement = useRef(0)

  const TodoObj = useContext(TodoItemsContext)
  const addItem = TodoObj.addItem

  // const handleItemChange = (e) => {
  //   setItemName(e.target.value)
  //   noOfUpdates.current += 1;
  // }

  // const handleDateChange = (e) => {
  //   setDate(e.target.value)
  //   console.log(` no of Updates: ${noOfUpdates.current}`)
  // }

  const handleOnClick = (e) =>{
    e.preventDefault()
    const toDoName = toDoNameElement.current.value
    const toDoDate= toDoDateElement.current.value
    addItem(toDoName,toDoDate)
    toDoNameElement.current.value = ""
    toDoDateElement.current.value = ""

    // addItem(itemName,date);
    // setItemName('')
    // setDate('')
  }


    return (
    <>
    <form className="row my-row" onSubmit={(e)=>{handleOnClick(e)}}>
    <div className="col">
      <input 
      type="text" 
      ref={toDoNameElement}
      // value={toDoName} 
      placeholder="Enter Todo Here" 
      // onChange={handleItemChange}
      />
    </div>
    <div className="col">
     <input 
     type="date" 
     ref={toDoDateElement }
    //  value={toDoDate} 
    //  onChange={handleDateChange}
     />
    </div>
    <div className="col">
      <button 
      className="btn btn-success my-btn" >
        <IoMdAdd/>
      </button>
    </div>
  </form>
    </>
  )

  // return (
  //   <>
  //   <div className="row my-row">
  //   <div className="col">
  //     <input type="text" value={itemName} placeholder="Enter Todo Here" onChange={handleItemChange}/>
  //   </div>
  //   <div className="col">
  //    <input type="date" value={date} onChange={handleDateChange}/>
  //   </div>
  //   <div className="col">
  //     <button type="button" className="btn btn-success my-btn" onClick={handleOnClick}><IoMdAdd/></button>
  //   </div>
  // </div>
      
  //   </>
  // )
}

export default AddToDo
