const Products = ({ products }) => {
  return products.map((p) => (
    <div className="product">
      <img src={p.thumbnail} />
      <div className="product__details">
        <span className="list" key={p.title}>
          {p.title}
        </span>
        <span>$ {p.price}</span>
      </div>
      <button className="btn">Add to Cart</button>
    </div>
  ));
};

export default Products;
