import React from 'react'
import { useState } from 'react';

function Cart(props) {
    const {handleData} = props;

    const[isclicked,setClicked] =useState(true)
    
  const foo = (()=>{
     if (isclicked==true) {
    setClicked(false)
    const data =1;
     handleData((data)=>data+1)

   }else{
    setClicked(true)
    handleData((data)=>data-1)
    }
 })
   
  return (
    <>
 
  <div className ='card' >

    
    <img src={props.img} alt="product image" height={170} />
    <div className='card-body' index = {props.index}>
    <h6>{props.name}</h6>
    <p>{props.price}</p>
   
    <button index ={props.index} className='menu' onClick={foo}> {isclicked ? <p>add</p> : <p>remove</p>}</button>
   
    </div>
</div>
  </>
  )
}

export default Cart