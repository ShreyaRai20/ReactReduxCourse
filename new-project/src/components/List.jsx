import { useContext, useEffect } from "react"
import { StudentContext } from "../store/studentContext"


function List() {

    const {StudentList} = useContext(StudentContext)
  return (
    <div>
      <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Class</th>
      <th>School</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    {StudentList.map((student) => (
      <tr key={student.id}>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.class}</td>
        <td>{student.school}</td>
        <td>{student.age}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  )
}

export default List
