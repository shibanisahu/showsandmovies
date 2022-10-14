// import { useState } from "react";
// const State = () => {
//     let [value, update] = useState("Hello")
//     let handleClick = () =>{
//         update("hi")
//     }
//     return ( 
//         <div className="state">
//             <h1>{value}</h1>
//             <button onClick={handleClick}>Click</button>
//         </div>
//      );
// }
 
// export default State;

import { useState } from "react";
const State = () => {
    let [value,setvalue] = useState(0)
    let increase = () =>{
        setvalue(++value)
    }
    let decrease=()=>{
        setvalue(--value)
    }
    let reset=()=>{
        setvalue(0)
    }
    return ( 
        <div className="state">
            <h1>{value}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrease}>Decrease</button>
        </div>
     );
}
 
export default State;