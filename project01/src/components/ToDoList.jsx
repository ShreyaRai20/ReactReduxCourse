import { useContext } from "react"
import { TodoItemsContext } from "../store/todo-items-store"
import TodoItem from "./TodoItem"


function ToDoList() {

    const TodoObj = useContext(TodoItemsContext)
    const todoList = TodoObj.todoList

  return (
    <div className="items-container">
        {todoList.map(({item,date},id)=>(
            <TodoItem key={Math.random()} item={item} date = {date}/>
        ))}
    </div>
  )
}

export default ToDoList
