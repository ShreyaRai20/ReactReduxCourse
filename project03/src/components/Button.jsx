

function Button({val,onButtonClick}) {
  return (
    <button onClick={()=>{onButtonClick(val)}}>{val}</button>
  )
}

export default Button
