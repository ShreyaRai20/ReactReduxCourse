import AppName from "./components/AppName.jsx";
import AddToDo from "./components/AddToDo.jsx";
import "./App.css"
import ToDoList from "./components/ToDoList.jsx";
import EmptyMessage from "./components/EmptyMessage.jsx";
import TodoItemsContextProvider from "./store/todo-items-store.jsx";


function App() {
  return (
    <TodoItemsContextProvider>
    <center className="to-do-container"> 
      <AppName/>
      <AddToDo/>
      {/* <EmptyMessage todoList={todoList}/> */}
      <EmptyMessage/>
      <ToDoList/>
      {/* <ToDoList todoList= {todoList}/> */}
      </center>
    </TodoItemsContextProvider>
  )
}

export default App




// function App() {
//   const [todoList, setTodoList] = useState([])

//   const addItem = (item,date) => {
//     // if(item!= '' && date != ''){ // 
//     //   setTodoList([...todoList,{item:item, date: date}])
//     // }

//     setTodoList((currVal)=>[ // functional update
//       ...currVal,{item:item, date: date}
//     ])
//   }

//   const handleDelete = (todoItemName) => {
//     const newItemList = todoList.filter( (item) => (item.item !== todoItemName)) // returns item 
//     setTodoList(newItemList)
//   }

// //   const todoList = [
// //   {
// //     id: 1,
// //     item: "go to school",
// //     date: "02/20/23"
// //   },
// //   {
// //     id: 2,
// //     item: "finish homework",
// //     date: "02/21/23"
// //   },
// //   {
// //     id: 3,
// //     item: "buy groceries",
// //     date: "02/22/23"
// //   },
// //   {
// //     id: 4,
// //     item: "call mom",
// //     date: "02/23/23"
// //   },
// // ]

//   return (
//     <TodoItemsContext.Provider value={{
//       todoList:todoList,
//       addItem:addItem,
//       handleDelete:handleDelete
//       }}>
//     <center className="to-do-container"> 
//       <AppName/>
//       <AddToDo/>
//       {/* <EmptyMessage todoList={todoList}/> */}
//       <EmptyMessage/>
//       <ToDoList/>
//       {/* <ToDoList todoList= {todoList}/> */}
//       </center>
//     </TodoItemsContext.Provider>
//   )
// }

// export default App


// /*

// How React works =>
// Root Component:
// • The App is the main or root component of a React application.
// • It's the starting point of your React component tree.
// Virtual DOM:
// • React creates an in-memory structure called the virtual DOM.
// • Different from the actual browser DOM.
// • It's a lightweight representation where each node stands for a component and its attributes.
// Reconciliation Process:
// • When component data changes, React updates the virtual DOM's state to mirror these changes.
// • React then compares the current and previous versions of the virtual DOM.
// • It identifies the specific nodes that need updating.
// • Only these nodes are updated in the real browser DOM, making it efficient.


// Update state from precu=ious state
// • Spread Operator: Use to maintain immutability when updating arrays or objects.
// • Functional Updates: Use (existingPosts) => [postData, ...existingPosts] to avoid stale values during asynchronous updates.
// */
