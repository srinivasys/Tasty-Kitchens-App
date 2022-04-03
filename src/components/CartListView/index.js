import {Component} from 'react'

import PaymentSuccess from '../PaymentSuccess'
import CartItem from '../CartItem'
import CartSummary from '../CartSummary'

import CartContext from '../../Context/CartContext'

import './index.css'

class CartListView extends Component {
  state = {
    isOrderPlaced: false,
  }

  orderPlaced = () => {
    this.setState(prevState => ({isOrderPlaced: !prevState.isOrderPlaced}))
  }

  render() {
    const {isOrderPlaced} = this.state
    return (
      <CartContext.Consumer>
        {value => {
          const stringifiedCartList = localStorage.getItem('cartData')
          const parsedCartList = JSON.parse(stringifiedCartList)
          return isOrderPlaced ? (
            <PaymentSuccess />
          ) : (
            <div className="cart-content-container">
              <div className="cart-headers-cont">
                <p className="cart-header-items">Item</p>
                <div className="qty-price-cont">
                  <p className="cart-header-qty">Quantity</p>
                  <p className="cart-header-price">Price</p>
                </div>
              </div>
              <ul className="cart-list">
                {parsedCartList.map(eachItem => (
                  <CartItem
                    key={eachItem.id}
                    cartItem={eachItem}
                    value={value}
                  />
                ))}
              </ul>
              <CartSummary orderPlaced={this.orderPlaced} />
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default CartListView
