import React, { createContext, useState } from "react";
import Products from "./product.json";

const DataContext = createContext();

function DataProvider({ children }) {
  const list = Products.products;
  const Q = { quantity: 1 };

  const newData = list.map((item) => {
    return { ...Q, ...item };
    
    //easy way
    // return { ...item, quantity: 1};

  });

  // console.log(newData);
  const [data, setData] = useState(newData);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, DataProvider };
