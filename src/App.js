import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CartProvider, useCart } from "./context/CartContext";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/Cart";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Badge,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function NavBar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Phật Sống Shop
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Danh sách sản phẩm
        </Button>
        <IconButton color="inherit" component={Link} to="/cart">
          <Badge badgeContent={totalItems} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
