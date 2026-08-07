import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Categories from "./pages/Categories";
import { Orders, Help, Account, Wishlist } from "./pages/Static";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[500px] md:max-w-[1200px] mx-auto bg-white min-h-screen shadow-sm">
        <Header />
        {children}
        <Footer />
        <BottomNav />
        <CartDrawer />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <CartProvider>
        <SearchProvider>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout><Shop /></Layout>} />
            <Route path="/product/:id" element={<Layout><ProductDetail /></Layout>} />
            <Route path="/categories" element={<Layout><Categories /></Layout>} />
            <Route path="/orders" element={<Layout><Orders /></Layout>} />
            <Route path="/help" element={<Layout><Help /></Layout>} />
            <Route path="/account" element={<Layout><Account /></Layout>} />
            <Route path="/wishlist" element={<Layout><Wishlist /></Layout>} />
            <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
          </Routes>
        </BrowserRouter>
        </SearchProvider>
      </CartProvider>
    </div>
  );
}

export default App;
