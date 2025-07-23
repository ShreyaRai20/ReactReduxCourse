function Display({displayVal}) {
  return (
    <input 
    type="text" 
    placeholder="calculate" 
    value={displayVal} 
    // onKeyDown={(e)=>(onKeydown(e))} 
    readOnly/>
  )
}

export default Display
