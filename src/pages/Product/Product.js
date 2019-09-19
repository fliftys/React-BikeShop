import React, { Component } from "react";
import { ProductsContext } from "../../context";
import spinner from "./spinner.gif";
import "./Product.scss";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: this.props.match.params.id,
      item: null
    };
  }

  componentDidMount() {}

  render() {
    const { loading, addToCart } = this.context;
    const item = this.context.getItem(this.state.productID);

    if (loading && !item) {
      return <img src={spinner} className="spinner" alt="loading" />;
    } else {
      const {
        name,
        img,
        type,
        size,
        color,
        company,
        description,
        price,
        inCart,
        id
      } = item;
      return (
        <section className="singleProduct">
          <h1 className="singleProduct__title">{name}</h1>

          <div className="singleProduct__wrapper">
            <div className="singleProduct__imgContainer">
              <img src={img} className="singleProduct__img" alt={name} />
            </div>

            <div className="singleProduct__info">
              <h5 className="singleProduct__name">Nazwa: {name}</h5>

              <h5 className="singleProduct__company">Producent: {company}</h5>

              <h5 className="singleProduct__type">Typ: {type}</h5>

              <h5 className="singleProduct__size">Rozmiar: {size}</h5>

              <h5 className="singleProduct__color">Kolor: {color}</h5>

              <p className="singleProduct__description">Opis: {description}</p>

              <h5 className="singleProduct__price">Cena: {price} PLN</h5>
              <button
                disabled={inCart}
                className={`singleProduct__btn ${inCart &&
                  " singleProduct__btn--inCart"}`}
                onClick={() => addToCart(id)}
              >
                {inCart ? "W koszyku" : "Do koszyka!"}
              </button>
            </div>
          </div>
        </section>
      );
    }
  }
}

Product.contextType = ProductsContext;

export default Product;
