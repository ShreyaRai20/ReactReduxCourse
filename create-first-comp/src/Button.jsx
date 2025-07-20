
// 1. 


// function Button(){ // first letter => Capital
//     return (
//         <button>Like my page</button>
//     )
// }

// export default Button


// 2. 

// export default function Button(){
//     return (
//         <button>Like my page</button>
//     )
// }


// 3. 

export default function Button(){ // default - 1 only 
    return (
        <button>Like my page</button>
    )
}

export function Parah(){ //named  - can do multiple
    return (
        <button>Like my page</button>
    )
}



/*

Exporting Components => 
1. Enables the use of a component in other parts.
2. Default Export: Allows exporting a single component as the default from a module.
3. Named Export: Allows exporting multiple items from a module.
4. Importing: To use an exported component, you need to import it in the destination file using import syntax.


Important Points =>
1. Naming: Must be capitalized; lowercase for default HTML.
2. HTML: Unlike vanilla JS where you can't directly write HTML, in React, you can embed HTML-like syntax using JSX.
3. CSS: In React, CSS can be directly imported into component files, allowing for modular and component-specific styling.

*/


