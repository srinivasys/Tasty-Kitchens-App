import {BsFilterLeft} from 'react-icons/bs'

import './index.css'

const RestaurantsHeader = props => {
  const {sortOption, sortByOptions, updateOption} = props

  const onChangeSort = event => {
    updateOption(event.target.value)
  }

  return (
    <div className="restaurant-header">
      <h1 className="res-head">Popular Restaurants</h1>
      <div className="select-container">
        <p className="res-des">
          Select Your favorite restaurant special dish and make your day
          happy...
        </p>
        <div className="sort-container">
          <BsFilterLeft size={20} className="sort-img" />
          <p className="sort">Sort By</p>
          <select value={sortOption} className="select" onChange={onChangeSort}>
            {sortByOptions.map(eachOption => (
              <option
                key={eachOption.id}
                value={eachOption.value}
                className="option"
              >
                {eachOption.displayText}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default RestaurantsHeader
