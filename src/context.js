import React, {Component} from 'react';

const ProductsContext = React.createContext();

class ProductsProvider extends Component{
  state = {
    products: [],
    sortedProducts: [],
    premiumProducts: [],
    cart: [],
    loading: true,
    type: 'wszystkie',
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    subTotal: 0,
    ship: 0,
    total: 0,
    premium: false,
    color: 'wszystkie',
    

  }

  sleep = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 1000);
    })
  }

  // Get data 
  fetchData = async () => {

    try{
      const response = await fetch('https://serene-wright-c7a405.netlify.com/data/products.json');
  
      // Fake delay
      await this.sleep();
  
      const data = await response.json();
  
      // Set data
      this.setData(data);
    }
    catch(error){
      console.log(`error: ${error}`)
    }

  }

  setData = (data) => {
    const products = [...data];
    const sortedProducts = [...products];
    let premiumProducts = products.filter(product => product.premium);
    premiumProducts = premiumProducts.splice(0, 3);
    const price = Math.max(...products.map(product => product.price));
    const maxPrice = price;
    const loading = false;

    this.setState(() => ({
      products,
      sortedProducts,
      premiumProducts,
      price,
      maxPrice,
      loading
    }));

  }

  getItem = id => {
    const products = [...this.state.products];
    const ID = parseInt(id);
    const item = products.find(product => product.id === ID);
    return item;
  }

  addToCart = id => {
    let products = [...this.state.products];
    products = products.map(product => {
      if(product.id === id){
        product.inCart = true;
        product.count = 1;
        product.total = product.count * product.price;
      }
      return product;
    });
    let sortedProducts = [...this.state.sortedProducts];
    sortedProducts = sortedProducts.map(product => {
      if(product.id === id){
        product.inCart = true;
        product.count = 1;
        product.total = product.count * product.price;
      }
      return product;
    });
    const item = this.getItem(id);
    const cart = [...this.state.cart];
    cart.push(item);

    this.setState(() => ({
      products, sortedProducts, cart
    }), this.calculateCart)
  }

  deleteFromCart = id => {

    const ID = parseInt(id);
    let cart = [...this.state.cart];
    cart = cart.filter(product => product.id !== ID);

    let products = [...this.state.products];
    products = products.map(product => {
      if(product.id === ID){
        product.inCart = false;
        product.count = 0;
        product.total = 0;
      }
      return product;
    });
    let sortedProducts = [...this.state.sortedProducts];
    sortedProducts = sortedProducts.map(product => {
      if(product.id === ID){
        product.inCart = false;
        product.count = 0;
        product.total = 0;
      }
      return product;
    });

    this.setState(() => ({
      products, sortedProducts, cart
    }), this.calculateCart)
    

  }

  increaseCount = id => {
    const ID = parseInt(id);
    let cart = [...this.state.cart];
    cart = cart.map(product => {
      if(product.id === ID){
        product.count += 1;
      }
      return product;
    });

    this.setState(() => ({
      cart
    }), this.calculateCart);

  }

  decreaseCount = id => {
    const ID = parseInt(id);
    let cart = [...this.state.cart];

    cart = cart.filter(product => {

      if(product.id === ID){
        if(product.count > 1){
          product.count -= 1;
        }
        else{
          this.deleteFromCart(ID);
          return false;
        }
      }
      return true;
    })

    this.setState(() => ({
      cart
    }), this.calculateCart);

  }

  calculateCart = () => {
    let cart = [...this.state.cart];
    cart = cart.map(product => {
      product.total = product.count * product.price;
      return product;
    });
    let subTotal = 0;
    cart.forEach(product => subTotal += product.total);
    const ship = subTotal * 0.1;
    const total = subTotal + ship;

    this.setState(() => ({
      cart,
      subTotal,
      ship,
      total
    }));

  }

  handleChange = e => {

    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    }, this.filterProducts)

  }

  filterProducts = () => {

    let sortedProducts = [...this.state.products];
    const {color, type, price, premium} = this.state;

    if(color !== 'wszystkie'){
      sortedProducts = sortedProducts.filter(product => product.color === color);
    }

    if(type !== 'wszystkie'){
      sortedProducts = sortedProducts.filter(product => product.type === type);
    }
    
    sortedProducts = sortedProducts.filter(product => product.price <= price);

    if(premium){
      sortedProducts = sortedProducts.filter(product => product.premium);
    }
    

    this.setState(() => ({
      sortedProducts
    }));
  }


  componentDidMount(){
  
    this.fetchData();
  }

  render(){

    return(
      <ProductsContext.Provider
        value={{
          ...this.state,
          getItem: this.getItem,
          addToCart: this.addToCart,
          deleteFromCart: this.deleteFromCart,
          increaseCount: this.increaseCount,
          decreaseCount: this.decreaseCount,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </ProductsContext.Provider>
    )
  }


}

const ProductsConsumer = ProductsContext.Consumer;

export {ProductsProvider, ProductsConsumer, ProductsContext}

