// Functional Component => javascript function

// import Button, { Parah } from "./Button"
import Hello from "./Hello"


function App(){
  return (
    <>
    <Hello/>
    <Hello name ="S"/>
    <Hello name ="H"/>
    <Hello name ="R"/>
    {/* <Hello name="Shreya"/> */}
    {/* <h1>Hello World!</h1>
    * <p>This is the best react course</p>
    <Button/>
    <Parah/> */} 
    </>
  )
}

export default App


/* 

Class Component =>
• Stateful: Can manage state.
• Lifecycle: Access to lifecycle methods.
• Verbose: More boilerplate code.
• Not Preferred anymore.

Functional Components =>
• Initially stateless.
• Can use Hooks for state and effects.
• Simpler and more concise.
• More Popular.

JSX => Javascript XML 
1. Definition: JSX determines how the Ul will look wherever the component is used.
2. Not HTML: Though it resembles HTML, you're actually writing JSX, which stands for JavaScript XML.
3. Conversion: JSX gets converted to regular JavaScript.
4. Babeljs.io/repl is a tool that allows you to see how JSX is transformed into JavaScript.

*/