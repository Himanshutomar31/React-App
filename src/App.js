import react from "react";
import Cart from "./Cart";
import Navbar from "./NavBar";

class App extends react.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1858&q=80',
          id: 2
        },
        {
          price: 9999,
          title: 'Laptop',
          qty: 4,
          img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
          id: 3
        }
      ]
    };
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state
    const index = products.indexOf(product)
    products[index].qty += 1
    this.setState({
      products: products
    });
  }

  handleDecreaseQuantity = (product) => {
    const { products } = this.state
    const index = products.indexOf(product)
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1
    this.setState({
      products: products
    });
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items
    });
  }
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => count += product.qty) 
    return count;
  }
  getCartTotal = () => {
    const { products } = this.state;
    let countTotal = 0;
    products.forEach((product) => {
      countTotal = countTotal + (product.qty * product.price)
    }) 
    return countTotal;
  }

  render() {
    const { products } = this.state
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart 
          products = {products}
          onIncreaseQty={this.handleIncreaseQuantity}
          onDecreaseQty={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{padding:10, fontSize:20}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
