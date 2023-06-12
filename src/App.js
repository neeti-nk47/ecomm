import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import AuthForm from "./components/auth/AuthForm";
import AuthContext from "./store/auth-context";
import CartContext from "./store/cart-context";

function App() {
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);

  const fetchData = async (email) => {
    const Response = await fetch(
      `https://crudcrud.com/api/4ce4fa184d494dffb11ec8cd7fa5062a/${email}`
    );
    const data = await Response.json();
    const extractedData = data.map((data) => data.items);

    extractedData.forEach((currentItem) => {
      const ProductInfo = {
        id: currentItem.id,
        title: currentItem.title,
        price: currentItem.price,
        image: currentItem.imageUrl,
      };

      cartCtx.addItem({ ...ProductInfo, quantity: 1 });
    });
  };

  if (authCtx.isLoggedIn && cartCtx.items.length === 0) {
    let userEmail = authCtx.email.replace("@", "").replace(".", "");
    fetchData(userEmail);
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        {authCtx.isLoggedIn && (
          <>
            <Route path="store" element={<Store />} />
            <Route path="store/:Id" element={<ProductDetail />} />
          </>
        )}
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<AuthForm />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
