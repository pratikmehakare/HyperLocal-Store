import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import ProductPage from "./pages/ProductPage";
import Order from "./pages/Order";

const App = () => {
  return (<div>
        <div className="bg-slate-900">
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product/:storeId" element={<ProductPage/>} />
          <Route path="/order" element={<Order/>} />
        </Routes>
  </div>)
};

export default App;
