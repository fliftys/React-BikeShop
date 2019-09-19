import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import "./Navbar.scss";
import logo from './mountain-bike.svg';
import {FaStream, FaShoppingCart} from "react-icons/fa";
import {ProductsContext} from '../../context';

class Navbar extends Component{

  state = {
    menuIsOpen: false
  }

  handleClick = () => {
    this.setState((state) => ({
      menuIsOpen: !state.menuIsOpen
    }))
  }


  render(){
    const {cart} = this.context;
    const count = cart.length;
    const {menuIsOpen} = this.state;
    return(
      <header className="header">
        <div className="header__top">
          <div className="header__logo">
            <img src={logo} alt="logo" className="header__img"/>
          </div>
          <FaStream onClick={this.handleClick} className="header__toggle" />
        </div>
        <div className="header__bottom">
          <ul className={`header__menu ${menuIsOpen ? 'showMenu' : ''}`}>

            <li className="header__menu-item">
              <NavLink exact to="/" className="header__link">Strona główna</NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to="/products" className="header__link">Produkty</NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to="/contact" className="header__link">Kontakt</NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to="/cart" className="header__link cart-icon">
                <FaShoppingCart />
                {count > 0 && <span className="cart-icon__count">{count}</span>}
              </NavLink>
            </li>

          </ul>
        </div>


      </header>
    )
  }
}

Navbar.contextType = ProductsContext;

export default Navbar;