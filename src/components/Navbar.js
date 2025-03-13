import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();
  return (
    <nav>
      <Link to="/">Danh sách sản phẩm</Link> |
      <Link to="/cart">Giỏ hàng ({cart.length})</Link>
    </nav>
  );
}

export default Navbar;
