import {Component} from 'react'
import Slider from 'react-slick'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import './index.css'

class Carousel extends Component {
  state = {
    offersList: [],
    isLoading: false,
  }

  componentDidMount() {
    this.renderGetImagesList()
  }

  renderGetImagesList = async () => {
    this.setState({isLoading: true})

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/restaurants-list/offers`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const updatedData = data.offers.map(eachItem => ({
      id: eachItem.id,
      imageUrl: eachItem.image_url,
    }))
    this.setState({offersList: updatedData, isLoading: false})
  }

  getImages = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
    }
    const {offersList} = this.state
    return (
      <div className="carousel-container">
        <Slider {...settings} className="carousal">
          {offersList.map(eachImage => (
            <div key={eachImage.id}>
              <img
                src={eachImage.imageUrl}
                alt="offer"
                className="carousal-img"
              />
            </div>
          ))}
        </Slider>
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" testid="restaurants-offers-loader">
      <Loader type="Oval" color="#F7931E" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return isLoading ? this.renderLoadingView() : this.getImages()
  }
}

export default Carousel
