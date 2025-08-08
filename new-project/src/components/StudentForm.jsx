import { useRef } from "react"

export default function StudentForm(){
    const idRef = useRef()
    const nameRef = useRef()
    const schoolRef = useRef()
    const classRef = useRef()
    const ageRef = useRef()

    return (
        <form>
            <input ref={idRef} placeholder="id" type="number"/>
            <input ref={nameRef} placeholder="name"  type= "text"/>
            <input ref={schoolRef} placeholder="school"  type= "text"/>
            <input ref={classRef} placeholder="class"  type="text"/>
            <input ref={ageRef} placeholder="age"  type="number"/>
            <button>Submit</button>
        </form>
    )
}