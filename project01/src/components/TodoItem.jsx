import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({item,date}) {
   const TodoObj = useContext(TodoItemsContext)
   const handleDelete = TodoObj.handleDelete
  return (
    <div className="row my-row">
    <div className="col">
        {item}
    </div>
    <div className="col">
      {date}
    </div>
    <div className="col">
      <button type="button" className="btn btn-danger my-btn" onClick={()=>{handleDelete(item, date)}}><MdDelete/></button>
    </div>
    </div>
  )
}

export default TodoItem
