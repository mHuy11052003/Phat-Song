import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Giỏ hàng</h2>
      {cart.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price} VND x {item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Xóa</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
