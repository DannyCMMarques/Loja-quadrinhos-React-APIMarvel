import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Navbar from "./components/navbar/index.tsx";
import Footer from "./components/footer/index.tsx";
import { UseItensCarrinhoProvider } from "./utils/context/useItensCarrinho.tsx";
import { UseItensHistoricoProvider } from "./utils/context/useItensHistórico.tsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UseItensCarrinhoProvider>
      <UseItensHistoricoProvider>
        {" "}
        <Navbar />
        <main>
          <App />
        </main>
        <Footer />{" "}
      </UseItensHistoricoProvider>
    </UseItensCarrinhoProvider>
  </React.StrictMode>
);
