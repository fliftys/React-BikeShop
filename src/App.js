import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";

import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

import "./App.scss";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:id" component={Product} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={Cart} />
      </Switch>
      <Footer />
      <Modal />
    </div>
  );
};

export default App;
