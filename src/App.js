import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import AuthForm from "./components/auth/AuthForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="store" element={<Store />} />
        <Route path="contact" element={<Contact />} />
        <Route path="store/:Id" element={<ProductDetail />} />
        <Route path="login" element={<AuthForm />} />
      </Route>
    </Routes>
  );
}

export default App;
