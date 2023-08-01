import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./routes/Header";
import Authentication from "./routes/Authentication";
import Shop from "./routes/Shop";
import Checkout from "./routes/Checkout";

function App() {
  return (
    <Routes>
      {/* /sign-in */}
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
