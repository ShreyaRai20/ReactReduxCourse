import { Component, useEffect } from "react";
import HeadingFn from "./components/HeadingFn";
import HeadingClass from "./components/HeadingClass";
import Button from "./components/Button";
import { useState } from "react";
import CounterProvider from "./store/counterContext";
import Form from "./components/Form";
import StudentForm from "./components/StudentForm";
import List from "./components/List";
import StudentContextProvider from "./store/studentContext";

// Functional Component =>

// import { Component } from "react";

// function App(){
// let students = [
//   {
//     id: 1,
//     name: "Alice",
//     class: "10A",
//     school: "Greenwood High",
//     age: 15
//   },
//   {
//     id: 2,
//     name: "Bob",
//     class: "9B",
//     school: "Hilltop School",
//     age: 14
//   },
//   {
//     id: 3,
//     name: "Charlie",
//     class: "11C",
//     school: "Lakeside Academy",
//     age: 16
//   },
//   {
//     id: 4,
//     name: "Diana",
//     class: "12A",
//     school: "Riverdale High",
//     age: 17
//   }
// ];


//   useEffect(()=>{

//   },[students])

//   /*
//     const [count, setCount] = useState(0)
//   const handleClick = ()=> {
//     console.log("Clicked")
//     setCount((prev)=>prev+1)
//   }
  
//   */

//   return (
//     <CounterProvider>
//       <Form/>
//       <HeadingFn/>
//       <Button/>
//       {/* <HeadingFn name = {count}/> */}
//       {/* <HeadingClass name = "Shreya"/> */}
//       {/* <Button handleClick={handleClick}/> */}
//     </CounterProvider>
//   )
// }

// export default App;


// Class Component =>

/*

class App extends Component {
  render(){
    return (
      <div>
        <HeadingFn name = "Shreya"/>
        <HeadingClass name = "Shreya"/>
      </div>
    )
  }
}

export default App;

*/


/*

DIFFERENCE BETWEEN JSX AND HTML


- JSX => JAVASCRIPT XML
- JSX NEEDS CLOSING TAGS WHEREAS HTML DONT.
- JSX uses className whereas Html uss class.
- JSX can include javascript expressions within itself (find example in heading components) where as html cant.
- at the backend jsx uses .createElement to inject the values to the page.


*/



export default function App(){
  return (
    <StudentContextProvider>
      <StudentForm/>
      <List/>
    </StudentContextProvider>
  )
}