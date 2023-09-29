import React from "react";
import { createContext } from "react";
import books from "./Books";
import { useState } from "react";
const BookContex = createContext();

function Bookprovider({ children }) {
  const [bookData, setBookData] = useState(books);

  // let handlesubmit =(id,values) =>{
  //   const update = bookData.map((item,i) =>{
  //     if( i === id){
  //       return {...item,...values}
  //       }else{
  //         return item;
  //         }
  //   })
  //   setBookData(update)
  // }

  // console.log(bookData);

  return (
    <BookContex.Provider value={{ setBookData, bookData }}>
      {children}
    </BookContex.Provider>
  );
}

export { Bookprovider, BookContex };
