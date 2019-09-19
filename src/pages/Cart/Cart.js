import React from "react";
import { ProductsConsumer } from "../../context";
import "./Cart.scss";

import CartLine from "../../components/CartLine/CartLine";

const Cart = () => {
  return (
    <section className="cart">
      <ProductsConsumer>
        {({ cart }) => {
          if (cart.length) {
            return (
              <ul className="cart__bar">
                <li className="cart__bar-item">Produkt</li>
                <li className="cart__bar-item">Nazwa</li>
                <li className="cart__bar-item">Cena</li>
                <li className="cart__bar-item">Ilość</li>
                <li className="cart__bar-item">Usuń</li>
                <li className="cart__bar-item">Suma</li>
              </ul>
            );
          } else {
            return <></>;
          }
        }}
      </ProductsConsumer>

      <ProductsConsumer>
        {context => {
          const { cart, subTotal, ship, total } = context;

          if (cart.length < 1) {
            return <div class="cart__info">Koszyk jest pusty</div>;
          } else {
            const cartView = cart.map(product => (
              <CartLine key={product.id} product={product} />
            ));

            return (
              <>
                {cartView}
                <div className="cart__summary">
                  <h5>Produkty: {subTotal} PLN</h5>
                  <h5>Przesyłka: {ship} PLN</h5>
                  <h5>Suma: {total} PLN</h5>
                </div>
              </>
            );
          }
        }}
      </ProductsConsumer>
    </section>
  );
};
export default Cart;
