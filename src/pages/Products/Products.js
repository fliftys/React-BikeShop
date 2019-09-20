import React, {Component} from 'react';
import {ProductsContext} from '../../context';
import CardProduct from '../../components/CardProduct/CardProduct';
import './Products.scss';

class Products extends Component{


  

  render(){
    let {handleChange, products ,sortedProducts, addToCart, color, type, minPrice, maxPrice, price, premium, openModal} = this.context;
    
    // Get unique values
    const colors = ['wszystkie', ...new Set(products.map(product => product.color))];
    const types = ['wszystkie',...new Set(products.map(product => product.type))];
    


    if(sortedProducts.length){

      sortedProducts = sortedProducts.map(product => <CardProduct key={product.id} product={product} addToCart={addToCart} openModal={openModal} />)

    }


    return(
      <>
        <section className="filterProducts">
          <form className="filterProducts__form">

            <div className="filterProducts__input-group">
              <label htmlFor="color" className="filterProducts__label">Kolor: </label>
              <select className="filterProducts__select" name="color" id="color" value={color} onChange={handleChange}>
                {colors.map(color => (
                  <option className="filterProducts__option" key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>

            <div className="filterProducts__input-group">
              <label htmlFor="type" className="filterProducts__label">Typ: </label>
              <select className="filterProducts__select" name="type" id="type" value={type} onChange={handleChange}>
                {types.map(type => (
                  <option className="filterProducts__option" key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div className="filterProducts__input-group">
              <label htmlFor="price" className="filterProducts__label">Cena:</label>
              <input type="range" name="price" id="price" min={minPrice} max={maxPrice} value={price} onChange={handleChange}/>
              <div className="filterProducts__result">{price}</div>
            </div>            
            <div className="filterProducts__input-group">
              <label htmlFor="premium" className="filterProducts__label">Tylko premium:</label>
              <input type="checkbox" name="premium" id="premium" checked={premium} onChange={handleChange}/>
            </div>




          </form>
        </section>
        <section className="sortedProducts">
          {sortedProducts}
        </section>
      </>
    )
  }

}

Products.contextType = ProductsContext;

export default Products;