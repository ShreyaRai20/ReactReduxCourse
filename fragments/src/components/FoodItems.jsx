import { useState } from "react"
import Item from "./Item"

function FoodItems({foodItems}) {
  let [activeItems, setActiveItems] = useState([])
  const handleBuy = (e,item) =>{
    // console.log(e)
    let newItems = [...activeItems,item]
    setActiveItems(newItems)
    // console.log(`buy button clicked for ${item}`)
  }
  return (
  <ul className="list-group">
    {foodItems.map((item,i)=>(
      <Item item ={item} 
      handleBuy={(e)=>{handleBuy(e,item)}} 
      key ={i}
      bought={activeItems.includes(item)}/>))}

    {/* {foodItems.map((food,i)=> ( // need key to stop warning
    // <Item food ={food} i = {i}/>
    <li key={i} className="list-group-item">{food}</li> // key prop for performance
        )
    
    //     // {
    //     // return <li id={i} class="list-group-item">{food}</li>
    //     // }
        )} */}
      </ul>
  )
}

export default FoodItems
