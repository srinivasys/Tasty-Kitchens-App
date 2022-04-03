import {Link} from 'react-router-dom'

import './index.css'

const EmptyCartView = () => (
  <div className="empty-container">
    <img
      src="https://res.cloudinary.com/daqxrreic/image/upload/v1648196702/OBJECTS_kdvn2b.png"
      alt="empty cart"
      className="empty-img"
    />
    <h1 className="empty-head">No Order Yet!</h1>
    <p className="empty-des">
      Your cart is empty. Add something from the menu.
    </p>
    <Link to="/">
      <button type="button" className="order-btn">
        Order Now
      </button>
    </Link>
  </div>
)

export default EmptyCartView
