import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'

import Cookies from 'js-cookie'

import {GiHamburgerMenu} from 'react-icons/gi'

import CartContext from '../../Context/CartContext'

import './index.css'

const Header = props => {
  const {history} = props

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const renderCartItemsCount = () => (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const cartItemsCount = cartList.length

        return (
          <>
            {cartItemsCount > 0 ? (
              <span className="cart-count">{cartList.length}</span>
            ) : null}
          </>
        )
      }}
    </CartContext.Consumer>
  )

  return (
    <nav className="nav-bar">
      <div className="nav-content">
        <div className="nav-bar-header">
          <div className="header-container">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dkobk5oao/image/upload/v1633608363/Frame_274_mqin4h.png"
                alt="website logo"
                className="nav-logo"
              />
            </Link>
            <h1 className="nav-head">Tasty Kitchen</h1>
          </div>
        </div>
        <div className="desktop-container">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="home-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="cart-link">
                Cart
                {renderCartItemsCount()}
              </Link>
            </li>
            <button
              type="button"
              className="logout-btn"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
      <div className="mobile-container">
        <Popup
          modal
          trigger={
            <button
              className="hamburger-icon-button"
              type="button"
              testid="hamburgerIconButton"
            >
              <GiHamburgerMenu size="30" />
            </button>
          }
          className="popup-content"
          position="top center"
        >
          {close => (
            <div className="modal-container">
              <ul className="nav-list">
                <li className="nav-item">
                  <Link to="/" className="cart-link" onClick={() => close()}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/cart"
                    className="home-link"
                    onClick={() => close()}
                  >
                    Cart
                    {renderCartItemsCount()}
                  </Link>
                </li>
                <button
                  type="button"
                  className="logout-btn"
                  onClick={onClickLogout}
                >
                  Logout
                </button>
              </ul>
              <button
                type="button"
                testid="closeButton"
                className="close-button"
                onClick={() => close()}
              >
                <img
                  src="https://res.cloudinary.com/daqxrreic/image/upload/v1645084555/Shape_ojusqh.jpg"
                  alt="close"
                />
              </button>
            </div>
          )}
        </Popup>
      </div>
    </nav>
  )
}

export default withRouter(Header)
