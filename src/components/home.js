import React, { useState } from "react";
export default function HomeComponent(){
    const[count,setCount]=useState(4);
    const[info,setInfo]=useState("");
    
    

    return(<div>
        <button onClick={()=>setCount(count-1)} disabled={count<=0?true:false}>-</button>
        <button>{count}</button>
        <button onClick={()=>setCount(count+1)} disabled={count>=5?true:false}>+</button>
        <label>{count>=5?"Maximum limit is 5":""}</label>

    </div>)
}