import React from 'react'
import { useState } from 'react'

function Home() {
 
  

    const [myList,setMyList] = useState([
        {id:1,name:"item1"},
        {id:2,name:"item2"},
        {id:3,name:"item3"},
        {id:4,name:"item4"}
    ]);
  
const handle =(itemId) =>{
         const updated = myList.filter((item)=>item.id != itemId);
         console.log(updated);
         setMyList(updated);
         setIsCliked({nam :"remove"})
}
           
  return (
    <div>
     
        <ul>
        {myList.map((item)=>(
            <li key = {item.id}>
                {item.name} <button onClick={()=> handle(item.id)} >Button</button>
              
                </li>
        ))}
        </ul>
    </div>
  )
}

export default Home