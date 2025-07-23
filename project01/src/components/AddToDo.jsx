import { useState } from "react"
import { IoMdAdd } from "react-icons/io";

function AddToDo({addItem}) {
  const [itemName,setItemName] = useState('')
  const [date,setDate] = useState('')

  const handleItemChange = (e) => {
    setItemName(e.target.value)
  }

  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  const handleOnClick = () =>{
    addItem(Math.random(),itemName,date);
    setItemName('')
    setDate('')
  }

  return (
    <>
    <div className="row my-row">
    <div className="col">
      <input type="text" value={itemName} placeholder="Enter Todo Here" onChange={handleItemChange}/>
    </div>
    <div className="col">
     <input type="date" value={date} onChange={handleDateChange}/>
    </div>
    <div className="col">
      <button type="button" className="btn btn-success my-btn" onClick={handleOnClick}><IoMdAdd/></button>
    </div>
  </div>
      
    </>
  )
}

export default AddToDo
