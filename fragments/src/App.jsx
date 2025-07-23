import { useState } from "react";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/foodInput";
import FoodItems from "./components/FoodItems"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // let foodItems =[]
  // let foodItems =[ "milk", "strawberries", "mangoes", "paneer", "cheese", "chapati"]

  let [foodItems, setFoodItems] = useState([ "milk", "strawberries", "mangoes", "paneer", "cheese", "chapati"])

  // let text = "user input" // stateless

  let [text,SetText] = useState('') // returns array of 0th element and 1st element

  // console.log(text)

  const handleOnChange = (e) =>{
        console.log(e.target.value)
        // text = e.target.value
        SetText(e.target.value)
        // console.log((text));     
    }

  const onKeyDown = (e) => {
    if(e.key === "Enter") {
      setFoodItems([...foodItems,e.target.value]);
      SetText('')
      e.target.value = ''
    }
  }

  // If else
  // if(foodItems.length === 0){
  //   return <h1> I am still hungry</h1>
  // }

  // Ternary Operator
  // let message = foodItems.length === 0 ? <h1>I am hungry</h1> : null 

  return (
    <>
    <Container>
        <h1>Healty food</h1>
        <FoodInput onKeyDown={(e)=>{onKeyDown(e)}}  handleOnChange ={(e)=>{handleOnChange(e)}}/>
        {/* <p>{text ? text : "user input"}</p> */}
        <p>{text}</p>
        {foodItems.length === 0 ? <ErrorMessage foodItems= {foodItems} /> :<FoodItems foodItems= {foodItems}/>}
    </Container>
    {/* <Container>
        <h1>Healty food</h1>
        {foodItems.length === 0 ? <ErrorMessage foodItems= {foodItems} /> :<FoodItems foodItems= {foodItems}/>}
    </Container> */}

    </>

  )
}

export default App


/*

Fragments =>
1. What?
Allows grouping of multiple elements without extra DOM nodes.
2. Why?
• Return multiple elements without a wrapping parent.
• Cleaner DOM and consistent styling.
3. How? Two syntaxes:
• <React.Fragment>...‹/React.Fragment> => want to give key 
• <></>


Map Method =>
1. Purpose: Render lists from array data.
2. JSX Elements: Transform array items into JSX.
3. Inline Rendering: Directly inside JSX
{items.map(item => <li key={item.id}>{item.name}</li>)}
4. Key Prop: Assign unique key for optimized re-renders.
‹div key={item.id}>{item.name)</div>


Conditional Rendering =>
• Displaying content based on certain conditions.
• Allows for dynamic user interfaces.
Methods
• If-else statements: Choose between two blocks of content.,
• Ternary operators: Quick way to choose between two options.
• Logical operators: Useful for rendering content when a condition is true.
Benefits
• Enhances user experience.
• Reduces unnecessary rendering.
• Makes apps more interactive and responsive.

Passing Data via Prop =>
Props in React
• Short for properties
• Mechanism for passing data.
• Read-only by default
Usage
• Pass data from parent to child component.
• Makes components reusable.
• Defined as attributes in JSX.
Key Points
• Data flows one-way (downwards).
• Props are immutable.
• Used for communication between components.
Examples
‹Header title="My App" />


Passing Children =>
1. children is a special prop for passing elements into components.
2. Used for flexible and reusable component designs.
3. Common in layout or container components.
4. Accessed with props.children.
5. Can be any content: strings, numbers, JSX, or components.
6. Enhances component composability and reusability.

Handling Events =>
1. React events use camelCase, e.g., onClick.
2. Uses synthetic events, not direct browser events.
3. Event handlers can be functions or arrow functions.
4. Use onChange for controlled form inputs.
5. Avoid inline arrow functions in JSX for performance.

Passing Fucntions via Props
1. Pass dynamic behaviour between components.
2. Enables upward communication from child to parent.
3. Commonly used for event handling.
4. Parent defines a function, child invokes it.
5. Enhances component interactivity.
6. Example:
<Button onClick={handleClick} />

Manage State =>
1. State represents data that changes over time.
2. State is local and private to the component.
3. State changes cause the component to re-render.
4. For functional components, use the useState hook.
React Functions that start with word use are called hooks
6. Hooks should only be used inside components
7. Parent components can pass state down to children via props.
8. Lifting state up: share state between components by moving it to their closest common ancestor.

State vs Props
State:
• Local and mutable data within a component.
• Initialized within the component.
• Can change over time.
• Causes re-render when updated.
• Managed using useState in functional components.
Props:
• Passed into a component from its parent.
• Read-only (immutable) within the receiving component.
• Allow parent-to-child component communication.
• Changes in props can also cause a re-render.

*/
