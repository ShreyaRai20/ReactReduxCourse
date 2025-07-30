import { useSelector } from "react-redux"


function DisplayComponent() {
  // const counter = useSelector(store => store.counter)
  const counter = useSelector(store => store.counter)

  return (
        <p className="lead mb-4">
          Counter current value :  {counter}
        </p> 
  )
}

export default DisplayComponent
