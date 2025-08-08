import { createContext, useReducer } from "react";

export const  TodoItemsContext = createContext([
    {
      todoList:[],
      addItem:()=>{},
      handleDelete:()=>{}
      }
]); // in place of todolist 

const todoItemsReducer = (currTododItems, action) => {
  let newTodoItems = currTododItems
  if(action.type === "NEW_ITEM"){
    newTodoItems = [
      ...currTododItems,
      {
       item : action.payload.item,
       date : action.payload.date
      }
    ]
    return newTodoItems
  } else if (action.type === "DELETE_ITEM"){
    newTodoItems = currTododItems.filter( (item) => (item.item !== action.payload.todoItemName))
    return newTodoItems
  }
  return newTodoItems
}

const TodoItemsContextProvider = ({children}) => {
    const [todoList, dispatchTodoItems] = useReducer(todoItemsReducer,[])

  const addItem = (item,date) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        item,
        date
      }
    }
    dispatchTodoItems(newItemAction)
  }

  const handleDelete = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoItemName
      }
    }
    dispatchTodoItems(deleteItemAction)
  }
  return (
  <TodoItemsContext.Provider value={{
      todoList:todoList,
      addItem:addItem,
      handleDelete:handleDelete
      }}>

        {children}
  </TodoItemsContext.Provider>
  )

}

export default TodoItemsContextProvider