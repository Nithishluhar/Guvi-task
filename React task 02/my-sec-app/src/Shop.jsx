import Cart from './Cart'
import React, { useState } from 'react'

function Shop() {
 
  const[data,setData] =useState(0)
  const handleData = (data)=>{
    setData(data);
}
console.log(data);

let img1 ="image1.jpg";
let img2 ="image2.jpg";
let img3 ="image3.jpg";
let img4 ="image4.jpg";
let img5 ="image5.jpg";
let img6 ="image6.jpg";
let img7 ="image7.jpg";
let img8 ="image8.webp";

  return (
  <>
  <header className='header'>
  <h3>Start Bootstrap</h3>
 
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Shop</a>
    </nav>
   
    <button className='cart-btn'><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart <span className='count'>{data}</span></button>
  
</header>


<div className='mid' >
  <h1 >Shop in style</h1>
  <p>With this shop hompeage template</p>
</div>


<div className='card-list'>

  <Cart index = "1" name = "Ghee Pongal" price ="₹80" handleData={handleData} img ={img1} ></Cart>
   <Cart index = "2" name = "Special Dosa" price ="₹70" handleData={handleData} img={img2} ></Cart>
   <Cart index = "3" name = "Vada with Chutney" price ="₹30-"handleData={handleData}  img={img3}></Cart>
   <Cart index = "4" name = "Meals" price ="₹120-"handleData={handleData}  img={img4}></Cart>
   <Cart index = "5" name = "Idly " price ="₹50" handleData={handleData}  img={img5}></Cart>
   <Cart index = "6" name = "Rava Idly" price ="₹70"handleData={handleData} img={img6} ></Cart>
   <Cart index = "7" name = "Poori" price ="₹50" handleData={handleData} img={img7} ></Cart>
   <Cart index = "8" name = "Puttu" price ="₹90"handleData={handleData} img={img8} ></Cart>

</div>
<footer>
  <p>Copyrights © Your Website 2023</p>
</footer>
  </>
    
  )
}

export default Shop