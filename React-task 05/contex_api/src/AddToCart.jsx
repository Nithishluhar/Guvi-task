import React, { useContext } from "react";
import { DataContext } from "./DataContext";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import "./App.css";

function AddToCart() {
  const { data } = useContext(DataContext);
  const { setData } = useContext(DataContext);

  const [subprice, setsubprice] = useState(0);
  const update = data.map((item) => item.price * item.quantity);
  console.log(update);
  const [quantity, setQuantity] = useState(0);

  const handleQuantity = () => {
    let Q = 0;
    const result = data.map((item) => {
      Q += item.quantity;
    });
    console.log(Q);
    setQuantity(Q);
  };

  useEffect(() => {
    setsubprice(update);
    handlePrice();
    handleQuantity();
  }, [data]);

  const [price, setprice] = useState(0);
  const handlePrice = () => {
    let total = 0;
    update.map((item) => {
      total += item;
    });
    setprice(total);
  };

  const handleplus = (index, d) => {
    // console.log(item,d);

    const update = data.map((item, i) =>
      index === i ? { ...item, quantity: item.quantity + 1 } : item
    );

    setData(update);
  };

  const handlereduce = (id) => {
    const update = data.map((item, i) =>
      id === i ? { ...item, quantity: item.quantity - 1 } : item
    );

    setData(update);
  };

  const handleDelete = (id) => {
    console.log("delete", id);

    const newArray = data.filter((item, i) => i !== id);
    setData(newArray);
  };
  return (
    <>
      <div className="container-fluid text-center">
        <h1 className="book text-center">Cart-List 🛒</h1>
        {data && data.length > 0
          ? data.map((item, index) => (
              <div className="row" key={index}>
                <div className="col-md-8">
                  <div className="box-1">
                    <img src={item.thumbnail} alt="" className="phone" />
                  </div>
                  <div className="box-2">
                    <h3 className="book text-center">{item.title}</h3>
                    <hr />
                    <p>{item.description}</p>

                    <div className="box-3">
                      <span>₹{item.price}</span>
                    </div>
                    <div className="box-3">
                      <span>
                        <b>Discount :</b> {item.discountPercentage} % ✨
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="row1">
                    <div className="col-4 col-sm-6">
                      <div className="qty">
                        <div className="div1">
                          <button
                            className="btn btn-sm btn-info "
                            onClick={() => handlereduce(index)}
                          >
                            ➖
                          </button>
                          <span>
                            <b>
                              Qty:
                              {item.quantity ? item.quantity : "Click Remove "}{" "}
                            </b>
                          </span>
                          <button
                            className="btn btn-sm btn-info"
                            onClick={() => handleplus(index)}
                          >
                            ➕
                          </button>
                          <button
                            className="button text-bg-danger"
                            onClick={() => handleDelete(index)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <hr />
                      <div className="Box">
                        <h5>SUBTOTAL:</h5>
                        <span className="span1">₹ {subprice[index]}</span>
                      </div>
                      <div className="Box">
                        <h5>DISCOUNT:</h5>
                        <span className="span2">FREE 🪄</span>
                      </div>
                      <hr />
                      <div className="Box">
                        <h5>TOTAL:</h5>
                        <span className="span3">₹ {subprice[index]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : "Card is Empty....."}
      </div>
      <br />
      <div className="footer">
        <h4>🛒Totel Cart Price :₹ {price}</h4>
        <h4>Totel Quantity : {quantity}⌛</h4>
      </div>
    </>
  );
}

export default AddToCart;
