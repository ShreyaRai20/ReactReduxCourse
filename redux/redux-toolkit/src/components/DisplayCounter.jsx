import { useSelector } from "react-redux"


function DisplayCounter() {
  // const counterObj = useSelector(store => store.counter)
  // const counter = counterObj.counterVal

  const {counterVal} = useSelector(store => store.counter)

  return (
        <p className="lead mb-4">
          Counter current value :  {counterVal}
        </p> 
  )
}

export default DisplayCounter
