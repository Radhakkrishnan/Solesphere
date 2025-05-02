import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./Components/layout";
import LandingPage from "./Pages/LandingPage";
import ShopPage from "./Pages/ShopPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import AdminPage from "./Pages/AdminPage";
import UserPage from "./Pages/UserPage";
import OrderConfirmationPage from "./Pages/OrderConfirmationPage";
import AdminRoute from "./Services/AdminRoute";
import OrderHistory from "./Pages/OrderHistoryPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/orderconfirmation" element={<OrderConfirmationPage />}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/admin" element={<AdminRoute><AdminPage/></AdminRoute>}/>
            <Route path="/getUser/:id" element={<UserPage/>}/>
            <Route path="/myOrders" element={<OrderHistory/>}/>
          </Route>
        </Routes>
      </Router>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
