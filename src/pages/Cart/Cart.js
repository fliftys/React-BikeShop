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
          const {
            cart,
            subTotal,
            ship,
            total,
            handleChange,
            addCoupon,
            couponInfo,
            clearCart,
            order
          } = context;

          if (cart.length < 1) {
            return <div className="cart__info">Koszyk jest pusty</div>;
          } else {
            const cartView = cart.map(product => (
              <CartLine key={product.id} product={product} />
            ));

            return (
              <>
                {cartView}

                <div className="cart__coupons">
                  <input
                    className="cart__input"
                    placeholder="kod=bikeshop"
                    type="text"
                    name="enterKey"
                    onChange={async e => {
                      await handleChange(e);
                      // Synchroniczna metoda addCoupon startowala przed asynchroczninym uzupelnieniem formularza - dlatego await
                      addCoupon();
                    }}
                  />
                  {couponInfo && (
                    <span className="cart__added">{couponInfo}</span>
                  )}
                </div>
                <div className="cart__summary">
                  <h5>Produkty: {subTotal} PLN</h5>
                  <h5>Przesyłka: {ship} PLN</h5>
                  <h5>Suma: {total} PLN</h5>
                  <div className="cart__buttons">
                    <button
                      onClick={clearCart}
                      className="cart__btn cart__btn-danger"
                    >
                      Wyczyść koszyk
                    </button>
                    <button
                      onClick={() => {
                        order();
                        clearCart();
                      }}
                      className="cart__btn"
                    >
                      Złóż zamówienie
                    </button>
                  </div>
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
