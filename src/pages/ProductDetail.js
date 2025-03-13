import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product)
    return <Typography variant="h6">Sản phẩm không tồn tại</Typography>;

  return (
    <Card style={{ maxWidth: "600px", margin: "20px auto", padding: "20px" }}>
      <CardMedia
        component="img"
        height="300"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h4">{product.name}</Typography>
        <Typography variant="body1">Giá: {product.price} VND</Typography>
        <Button variant="contained" color="primary" component={Link} to="/">
          Quay lại
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductDetail;
