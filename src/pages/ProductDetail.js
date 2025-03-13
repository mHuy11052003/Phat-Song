import { useParams, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Sản phẩm không tồn tại</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Giá: {product.price} VND</p>
      <Link to="/">Quay lại</Link>
    </div>
  );
}

export default ProductDetail;
