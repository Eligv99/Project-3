import React, { Component } from "react";
import Counter from "./Counter";
import Categories from "./Categories";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      selectedProduct: {},
      quickViewProdcut: {},
      isAdded: false
    };
  }

  // USE THIS FOR OUR CART MODEL
  addToCart(image, name, price, id, quantity) {
    this.setState(
      {
        selectedProduct: {
          image: image,
          name: name,
          price: price,
          id: id,
          quantity: quantity
        }
      },
      function () {
        this.props.addToCart(this.state.selectedProduct);
      }
    );
    this.setState(
      {
        isAdded: true
      },
      function () {
        setTimeout(() => {
          this.setState({
            isAdded: false,
            selectedProduct: {}
          });
        }, 3500);
      }
    );
  }

  
  quickView(image, name, price, id) {
    this.setState(
      {
        quickViewProdcut: {
          image: image,
          name: name,
          price: price,
          id: id
        }
      },
      function () {
        this.props.openModal(this.state.quickViewProdcut);
      }
    );
  }

  render() {

    let image = this.props.image;
    let name = this.props.name;
    let price = this.props.price;
    let id = this.props.id;
    let description = this.props.description;
    let quantity = this.props.quantity;

    return (
      <div className="product">
        <div className="product-image">
          <img
            src={image}
            alt={this.props.name}
            onClick={this.quickView.bind(
              this,
              image,
              name,
              price,
              id,
              quantity
            )}
          />
          <div className="text-product">          
           
            <ul>

              <li className="title-item"><h4>{this.props.name}</h4></li>
              <li className="desc-item">{this.props.description} </li>
              <li className="price-item product-price">{this.props.price} </li>

            </ul>
            
          </div>
          <Counter
            productQuantity={this.state.quantity}
            updateQuantity={this.props.updateQuantity}
            resetQuantity={this.resetQuantity}
          />
          <div className="product-action">
            <button
              className={!this.state.isAdded ? "" : "added"}
              type="button"
              onClick={this.addToCart.bind(
                this,
                image,
                name,
                price,
                id,
                quantity
              )}
            >
              {!this.state.isAdded ? "ADD TO CART" : "✔ ADDED"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
