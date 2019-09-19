import React from "react";
import "./CartLine.scss";
import { FaTrash } from "react-icons/fa";
import { ProductsConsumer } from "../../context";

const CartLine = ({ product }) => {
  const { img, name, price, count, total, id } = product;

  return (
    <ul className="cartLine">
      <li className="cartLine__item">
        <img src={img} alt={name} className="cartLine__img" />
      </li>
      <li className="cartLine__item">{name}</li>
      <li className="cartLine__item">{price} PLN</li>
      <li className="cartLine__item">
        <ProductsConsumer>
          {({ increaseCount, decreaseCount }) => {
            return (
              <>
                <span
                  className="cartLine__changeCount"
                  onClick={() => decreaseCount(id)}
                >
                  -
                </span>
                {count}
                <span
                  className="cartLine__changeCount"
                  onClick={() => increaseCount(id)}
                >
                  +
                </span>
              </>
            );
          }}
        </ProductsConsumer>
      </li>

      <li className="cartLine__item cartLine__trash">
        <ProductsConsumer>
          {({ deleteFromCart }) => {
            return <FaTrash onClick={() => deleteFromCart(id)} />;
          }}
        </ProductsConsumer>
      </li>

      <li className="cartLine__item">{total}</li>
    </ul>
  );
};

export default CartLine;
