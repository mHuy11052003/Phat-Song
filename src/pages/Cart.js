import { useCart } from "../context/CartContext";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Paper from "@mui/material/Paper";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Giỏ hàng
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="h6">Giỏ hàng của bạn đang trống</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sản phẩm</TableCell>
                <TableCell>Giá</TableCell>
                <TableCell>Số lượng</TableCell>
                <TableCell>Thành tiền</TableCell>
                <TableCell>Hành động</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price.toLocaleString()}₫</TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <RemoveIcon />
                    </IconButton>
                    {item.quantity}
                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <AddIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    {(item.price * item.quantity).toLocaleString()}₫
                  </TableCell>
                  <TableCell>
                    <IconButton
                      color="error"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Typography variant="h5" style={{ marginTop: 20 }}>
        Tổng tiền: {totalPrice.toLocaleString()}₫
      </Typography>
    </Container>
  );
};

export default Cart;
