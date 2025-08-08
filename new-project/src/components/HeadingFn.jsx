import { useContext } from "react"
import { counterContext } from "../store/counterContext"

function HeadingFn ({name}){
    const {count} = useContext(counterContext)
    return (
        <div>
            Hello Everyone! This is from functional component. {name}, {count}
        </div>
    )
}

export default HeadingFn