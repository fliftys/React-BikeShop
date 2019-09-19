import React from "react";
import "./CardProduct.scss";
import { Link } from "react-router-dom";

const CardProduct = ({ product, addToCart }) => {
  const { name, img, price, inCart, id } = product;

  return (
    <div className="cardProduct">
      <Link to={`/products/${id}`}>
        <h4 className="cardProduct__name">{name}</h4>
        <img src={img} alt={name} className="cardProduct__img" />
      </Link>
      <div className="cardProduct__info">
        <span className="cardProduct__price">{price} PLN</span>
        <button
          onClick={() => addToCart(id)}
          disabled={inCart}
          className={`cardProduct__btn ${inCart &&
            " cardProduct__btn--inCart"}`}
        >
          {inCart ? "W koszyku" : "Do koszyka"}
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
