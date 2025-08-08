import { useContext } from "react"
import { TodoItemsContext } from "../store/todo-items-store"


function EmptyMessage() {

    const TodoObj = useContext(TodoItemsContext)
    const todoList = TodoObj.todoList
    console.log(todoList)

  return (
    <div>
        {todoList.length === 0 && "enjoy your day"}
    </div>
  )
}

export default EmptyMessage
