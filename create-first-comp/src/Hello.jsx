

// function Hello() {
//     let name = "Shreya"
//   return (
//     <h3> Hello {name},Welcome here!</h3>
//   )
// }

// export default Hello


function Hello({name}) {
    const sayHello = () =>{
        return "Shreya Rai"
    }
  return (
    <>
    <h3 style={{'backgroundColor':'blue'}}> Hello {name},Welcome here!</h3>
    <h3> Hello {sayHello()}, <br/>Welcome here!</h3>
    </>
  )
}

export default Hello



/*

Dynamic Components =>
1. Dynamic Content: JSX allows the creation of dynamic and interactive
Ul components.
2. JavaScript Expressions: Using {}, we can embed any JS expression directly within JSX. This includes variables, function calls, and more.

Reusable Components =>
1. Modularity: Components are modular, allowing for easy reuse across different parts of an application.
2. Consistency: Reusing components ensures
Ul consistency and reduces the chance of discrepancies.
3. Efficiency: Reduces development time and effort by avoiding duplication of code.
4. Maintainability: Changes made to a reused component reflect everywhere it's used, simplifying updates and bug fixes.

*/
