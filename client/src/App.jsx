import POS from "./pages/POS";
import Order from "./pages/Order";
import Inventory from "./pages/Inventory";
import Sidebar from "./components/Sidebar";
import OrderTracking from "./pages/OrderTracking";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import { useEffect, useState } from "react";

function App() {
  const [isLogined, setLogin] = useState(false);
  useEffect(() => {
    setLogin(localStorage.getItem("token"));
  }, []);
  return (
    <BrowserRouter>
      {!isLogined ? (
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      ) : (
        <div className="flex w-full h-screen">
          <Sidebar />
          <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
            <Routes>
              <Route path="/" element={<Order />} />
              <Route path="/OrderTracking" element={<OrderTracking />} />

              <Route path="/Inventory" element={<Inventory />} />
              <Route path="/POS" element={<POS />} />
            </Routes>
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
