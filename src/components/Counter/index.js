import {Component} from 'react'

import './index.css'

class Counter extends Component {
  render() {
    const {quantity, onIncreaseBtnClick, onDecreaseBtnClick} = this.props
    const onclickBtn = () => {
      onIncreaseBtnClick()
    }
    const onclickDecBtn = () => {
      onDecreaseBtnClick()
    }

    return (
      <div className="counter-container">
        <button
          testid="decrement-quantity"
          type="button"
          className="quantity-btn"
          onClick={onclickDecBtn}
        >
          -
        </button>
        <div testid="item-quantity">{quantity}</div>
        <button
          testid="increment-quantity"
          type="button"
          className="quantity-btn"
          onClick={onclickBtn}
        >
          +
        </button>
      </div>
    )
  }
}

export default Counter
