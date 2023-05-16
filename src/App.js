import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Shop } from "./pages/shop/Shop.jsx";
import { Cart } from "./pages/cart/Cart.jsx";
import { ShopContextProvider } from "./context/shopContext";

function App() {
  // axios
  //   .get("https://amazon-price1.p.rapidapi.com/search", {
  //     params: {
  //       keywords: "<REQUIRED>",
  //       marketplace: "ES",
  //     },
  //     headers: {
  //       "X-RapidAPI-Key": "7a3bad5704msh2489f5d48a77020p1443c9jsn4819d298b68c",
  //       "X-RapidAPI-Host": "amazon-price1.p.rapidapi.com",
  //     },
  //   })
  //   .then((response) => {
  //     console.log("response", response.data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
