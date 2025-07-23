import TodoItem from "./TodoItem"


function ToDoList({todoList, handleDelete}) {

  return (
    <div className="items-container">
        {todoList.map(({item,date},id)=>(
            <TodoItem key={Math.random()} item={item} date = {date} handleDelete={handleDelete}/>
        ))}
    </div>
  )
}

export default ToDoList
