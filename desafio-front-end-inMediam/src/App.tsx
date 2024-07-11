import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import ProductList from "./pages/produtos/produtos-lista";
import NotFound from "./pages/not-found";
import ProdutoInfo from "./pages/produtos/produtos-info";
import CarrinhoDeCompra from "./pages/carrinho-de-compra";
import { itensCarrinhosCompra } from "./utils/mocks/itens-carrinho-compra";
import { itensHistorico } from "./utils/mocks/itens-historico";
function App() {
  if (!localStorage.getItem("itensCompra")) {
    const itensCarrinhosCompraString = JSON.stringify(itensCarrinhosCompra);
    localStorage.setItem("itensCompra", itensCarrinhosCompraString);
  }
  if (!localStorage.getItem("itensHistorico")) {
    const itensHistoricoString = JSON.stringify(itensHistorico);
    localStorage.setItem("itensHistorico", itensHistoricoString);
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comics" element={<ProductList />} />
          <Route path="/series" element={<ProductList />} />
          <Route path="/series/:id" element={<ProductList />} />
          <Route path="/characters/:id" element={<ProductList />} />
          <Route path="/creators/:id" element={<ProductList />} />
          <Route path="/characters" element={<ProductList />} />
          <Route path="/creators" element={<ProductList />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/comics/:id" element={<ProdutoInfo />} />
          <Route path="/carrinho-de-compra" element={<CarrinhoDeCompra />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
