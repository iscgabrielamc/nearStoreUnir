import { Routes, Route } from "react-router-dom";
import { useCart } from "./hooks/useCart";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import ReturnsPage from "./pages/ReturnsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const cart = useCart(); // custom hook global para el carrito

  return (
    <Layout cart={cart}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductsPage cart={cart} />} />
        <Route
          path="/productos/:id"
          element={<ProductDetailPage cart={cart} />}
        />
        <Route path="/carrito" element={<CartPage cart={cart} />} />
        <Route path="/devoluciones" element={<ReturnsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
