

function FoodInput({handleOnChange,onKeyDown}) {
    
  return (
    <div>
      <input 
      type="text" 
      placeholder="food" 
      onChange={handleOnChange}
      onKeyDown={onKeyDown}
      />
    </div>
  )
}

export default FoodInput
