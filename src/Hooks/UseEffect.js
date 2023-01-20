import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [counter,setCounter]=useState(0)
    const [otherCounter,setOtherCounter]=useState(5)
    useEffect(()=>{
        document.title=`${otherCounter} New Messages`
    },[otherCounter])
    // console.log(counter);
  return (
    <div><h3>{counter}new messages</h3>
        <button onClick={()=>setCounter(counter+1)}>Increment</button>
        <h3>{otherCounter} Clicked</h3>
        <button onClick={()=>setOtherCounter(otherCounter+5)}>Increment</button>
</div>
  )
}

export default UseEffect



