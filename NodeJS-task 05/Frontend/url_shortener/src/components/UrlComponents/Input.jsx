import React, { useState } from 'react'

const Input = ({ setUrl }) => {
    
 const [value, setValue] = useState("");
      
        const handleClick = () => {
          setUrl(value);
          setValue("");
        }
   
  return (
    <>
      <div className="inputContainer">
      <h1>URL <span>Shortener</span></h1>
      <div>
        <input
          type="text"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={e => setValue(e.target.value)}  
        />
        <button onClick={handleClick}>shorten</button>
      </div>
      </div>
    </>
  )
}

export default Input