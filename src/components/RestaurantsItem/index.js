import {Link} from 'react-router-dom'
import {ImStarFull} from 'react-icons/im'

import './index.css'

const RestaurantsItem = props => {
  const {restaurant} = props
  const {id, cuisine, imageUrl, name, rating, totalReviews} = restaurant

  return (
    <Link to={`/restaurant/${id}`} className="restaurants-link">
      <li testid="restaurant-item" className="restaurants-item">
        <img src={imageUrl} alt="restaurant" className="restaurants-img" />
        <div className="restaurants-info">
          <h1 className="name">{name}</h1>
          <p className="cuisine">{cuisine}</p>
          <div className="ratings-container">
            <ImStarFull className="star" />
            <p className="ratings">{rating}</p>
            <p className="reviews">({totalReviews} rating)</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default RestaurantsItem
