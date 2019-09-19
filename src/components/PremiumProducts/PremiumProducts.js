import React from 'react';
import {Link} from 'react-router-dom';
import {ProductsConsumer} from '../../context';
import spinner from './spinner.gif';
import './PremiumProducts.scss';
import styled from 'styled-components';


const PremiumProducts = () => {

  return(
    <ProductsConsumer>
      {(value) => {
        let {loading, premiumProducts} = value;

        if(premiumProducts){
          premiumProducts = premiumProducts.map(product => {
            const {id, img, name, price} = product;
            return(
              <div key={id} className="premium__card">
                <img src={img} alt="img" className="premium__img"/>
                <h3 className="premium__name">
                  {name}
                </h3>
                <span className="premium__price">
                  {price} PLN
                </span>
                <Link to={`/products/${id}`} className="premium__btn">Zobacz produkt</Link>
              </div>
            )
          })
        }


        if(loading){
          return(
            <img className="spinner" src={spinner} alt="elo"/>
          )
        }
        else{
          return(
            <section className="premium">
              <h1 className="premium__title">
                Premium Products
              </h1>
              <div className="premium__gallery">
                {premiumProducts}
              </div>

            </section>
          )
        }


      }}
    </ProductsConsumer>
  )
}



export default PremiumProducts;