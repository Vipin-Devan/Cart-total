import React, { useState, useEffect } from 'react';

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState();
  const changeQty = (id, qty) => {
    setCart(cart.filter((c) => (c.id === id ? (c.qty = qty) : c.qty)));
  };

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
  }, [cart]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: 10, backgroundColor: '#ececec', padding: 10, width: '80%' }}>
      <b style={{ fontSize: 30, alignSelf: 'center' }}>Cart</b>
      <b style={{ alignSelf: 'center' }}>Subtotal: $ {total}</b>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        {cart.length > 0 ? (
          cart.map((prod) => (
            <div key={prod.title} style={{ display: 'flex', padding: 10, border: '1px solid grey', margin: 5, justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: 10 }}>
                <img src={prod.thumbnail} alt={prod.title} style={{ width: 70, objectFit: 'cover' }} />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                  <span>{prod.title}</span>
                  <b>$ {prod.price}</b>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <button onClick={() => changeQty(prod.id, prod.qty - 1)}>-</button>
                <span>{prod.qty}</span>
                <button onClick={() => changeQty(prod.id, prod.qty + 1)}>+</button>
              </div>
            </div>
          ))
        ) : (
          <span style={{ padding: 20, alignSelf: 'center' }}>Cart is empty</span>
        )}
      </div>
    </div>
  );
};

export default Cart;
