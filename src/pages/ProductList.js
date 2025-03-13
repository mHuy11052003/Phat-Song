import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";

function ProductList() {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
          <button onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
