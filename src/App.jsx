import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./routes/Header";
import SignIn from "./routes/SignIn";
import Shop from "./routes/Shop";

function App() {
  return (
    <Routes>
      {/* /sign-in */}
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
