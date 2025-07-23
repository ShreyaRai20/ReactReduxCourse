import AppName from "./components/AppName.jsx";
import AddToDo from "./components/AddToDo.jsx";
import ToDoItem from "./components/TodoItem.jsx";
import "./App.css"
import ToDoList from "./components/ToDoList.jsx";
import { useState } from "react";


function App() {
  const [todoList, setTodoList] = useState([])

  const addItem = (id, item,date) => {
    if(item!= '' && date != ''){
      setTodoList([...todoList,{id:id ,item:item, date: date}])
    }
  }

  const handleDelete = (todoItemName) => {
    const newItemList = todoList.filter( (item) => (item.item !== todoItemName)) // returns item 
    setTodoList(newItemList)
  }

//   const todoList = [
//   {
//     id: 1,
//     item: "go to school",
//     date: "02/20/23"
//   },
//   {
//     id: 2,
//     item: "finish homework",
//     date: "02/21/23"
//   },
//   {
//     id: 3,
//     item: "buy groceries",
//     date: "02/22/23"
//   },
//   {
//     id: 4,
//     item: "call mom",
//     date: "02/23/23"
//   },
// ]

  return (
    <>
    <center className="to-do-container"> 
      <AppName/>
      <AddToDo addItem ={addItem}/>
      {todoList.length === 0 ? "enjoy your day": <ToDoList todoList= {todoList} handleDelete={handleDelete}/>}
      {/* <ToDoList todoList= {todoList}/> */}
      </center>
    </>
  )
}

export default App


/*

How React works =>
Root Component:
• The App is the main or root component of a React application.
• It's the starting point of your React component tree.
Virtual DOM:
• React creates an in-memory structure called the virtual DOM.
• Different from the actual browser DOM.
• It's a lightweight representation where each node stands for a component and its attributes.
Reconciliation Process:
• When component data changes, React updates the virtual DOM's state to mirror these changes.
• React then compares the current and previous versions of the virtual DOM.
• It identifies the specific nodes that need updating.
• Only these nodes are updated in the real browser DOM, making it efficient.

*/
