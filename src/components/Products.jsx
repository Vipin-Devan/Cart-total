const Products = ({ products, cart, setCart }) => {
  const addToCart = (id, thumbnail, title, price, qty = 1) => {
    setCart([{ id, thumbnail, title, price, qty }, ...cart]);
  };
  const RemoveFromCart = (id) => {
    setCart(cart.filter((c) => c.id !== id));
  };
  console.log(cart);
  return products.map((p) => (
    <div className="product">
      <img src={p.thumbnail} />
      <div className="product__details">
        <span className="list" key={p.title}>
          {p.title}
        </span>
        <span>$ {p.price}</span>
      </div>
      {cart.some((pr) => pr.id === p.id) ? (
        <button style={{ backgroundColor: 'red' }} onClick={() => RemoveFromCart(p.id)} className="btn">
          Remove from Cart
        </button>
      ) : (
        <button onClick={() => addToCart(p.id, p.thumbnail, p.title, p.price)} className="btn">
          Add to Cart
        </button>
      )}
    </div>
  ));
};

export default Products;
