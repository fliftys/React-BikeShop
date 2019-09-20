import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductsConsumer } from "../../context";

const Modal = () => {
  return (
    <ProductsConsumer>
      {({ modalInfo, isModal, closeModal }) => {
        const { id, name, img, price } = modalInfo;

        if(isModal){
          return (
            <Info>
              <div className="wrapper">
                <h3 className="title">Dodano do koszyka!</h3>
  
                <div className="data">
                  <h5 className="name">{name}</h5>
                  <div className="img-wrapper">
                    <img src={img} alt={name} />
                  </div>
                  <span className="price">Cena: {price} PLN</span>
                  <div className="buttons">
                    <Link onClick={closeModal} className="btn btn-light" to="/products">
                      Kontynuuj zakupy
                    </Link>
                    <Link onClick={closeModal} className="btn btn-dark" to="/cart">
                      Koszyk
                    </Link>
                  </div>
  
                  <div onClick={closeModal} className="close">X</div>
                </div>
              </div>
            </Info>
          );
        }
        else{
          return null;
        }

      }}
    </ProductsConsumer>
  );
};

const Info = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    max-width: 30rem;
    padding: 2rem;
    background: #fff;
    border-radius: 3px;
    position: relative;
    margin: 1rem;
  }

  .title {
    font-size: 2rem;
    text-align: center;
  }

  .data {
    padding: 1rem;
  }

  .name {
    font-size: 1rem;
    margin: 1rem 0;
    text-align: center;
  }
  .img-wrapper {
    width: 75%;
    margin: 1rem auto;
  }
  .price {
    display: block;
    text-align: center;
    padding: 1rem 0;
    font-weight: 700;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn {
    display: inline-block;
    padding: 1rem 2rem;
    border-radius: 16px;
    color: #fff;
    transition: all 0.3s;
    &:hover {
      transform: translateY(-3px);
    }
    &:active {
      transform: translateY(-1px);
    }
  }
  .btn-light {
    background: #008f30;
  }
  .btn-dark {
    background: linear-gradient(to right, #00c6ff, #0072ff);
  }

  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    font-weight: 900;
    color: crimson;
  }
`;

export default Modal;
