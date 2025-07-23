
// function Item(props) { 
function Item({item,bought, handleBuy}) { // de-srtuctured

  return (
    <li className= {`list-group-item ${bought && "active"} `}>
      {item}
      <button onClick={handleBuy}> Buy </button>
    </li> // props.item

  )
}

export default Item
