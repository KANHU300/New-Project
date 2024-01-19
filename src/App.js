import "./App.css";

import Layout from "./Pages/Layout/Layout";
import Product from "./Pages/Products/Product";

import { Route, Routes } from "react-router-dom";
import Overview from "./Pages/Overview/Overview";
import Return from "./Pages/Return/Return";
import Exchange from "./Pages/Exchange/Exchange";
import Orders from "./Pages/Orders/Orders";
import Custemer from "./Pages/Customer/Custemer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/product" element={<Product />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/return" element={<Return />} />
      <Route path="/exchange" element={<Exchange />} />
      <Route path="/order" element={<Orders/>} />
      <Route path="/custemer" element={<Custemer/>} />

      </Route>
      
    </Routes>
  );
}

export default App;
