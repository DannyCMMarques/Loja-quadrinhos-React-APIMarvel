import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import ProductList from "./pages/produtos/produtos-lista";
import NotFound from "./pages/not-found";
import ProdutoInfo from "./pages/produtos/produtos-info";
function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comics" element={<ProductList />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/comics/:id" element={<ProdutoInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
