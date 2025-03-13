import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import products from "../data/products";

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Danh sách sản phẩm
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{ height: 200, objectFit: "cover" }} // Đảm bảo ảnh luôn đúng khung
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography color="textSecondary">
                  {product.price.toLocaleString()}₫
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={`/product/${product.id}`}
                  style={{ marginRight: 10 }}
                >
                  Xem chi tiết
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => addToCart(product)}
                >
                  Thêm vào giỏ
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
