import { createContext } from "react";


export const StudentContext = createContext({StudentList: []})

export default function StudentContextProvider({children}){
    let StudentList = [
  {
    id: 1,
    name: "Alice",
    class: "10A",
    school: "Greenwood High",
    age: 15
  },
  {
    id: 2,
    name: "Bob",
    class: "9B",
    school: "Hilltop School",
    age: 14
  },
  {
    id: 3,
    name: "Charlie",
    class: "11C",
    school: "Lakeside Academy",
    age: 16
  },
  {
    id: 4,
    name: "Diana",
    class: "12A",
    school: "Riverdale High",
    age: 17
  }
];
    return (
        <StudentContext.Provider value={{StudentList}}>
            {children}
        </StudentContext.Provider>
    )
}