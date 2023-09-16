import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = ({data}) => {
  const { id, productName, price, productImage } = data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button style={{border:"none",background:"white"}} onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button style={{border:"none",background:"white"}}  onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
