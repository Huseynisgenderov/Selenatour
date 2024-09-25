import React from "react";
import ReactDOM from "react-dom/client";
//Browser Router
import { BrowserRouter } from "react-router-dom";
//app
import App from "./App";

//Components
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
