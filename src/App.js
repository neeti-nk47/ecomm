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

function App() {
  const authCtx = useContext(AuthContext);

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
