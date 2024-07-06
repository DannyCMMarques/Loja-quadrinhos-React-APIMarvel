import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Navbar from "./components/navbar/index.tsx";
import Footer from "./components/footer/index.tsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <main>
      <App />
    </main>
    <Footer />
  </React.StrictMode>
);
