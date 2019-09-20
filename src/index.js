import React from "react";
import ReactDOM from "react-dom";
import { ProductsProvider } from "./context.js";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsProvider>,
  document.getElementById("root")
);
