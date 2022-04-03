import Header from '../Header'
import Carousel from '../Carousel'
import Restaurants from '../Restaurants'
import Footer from '../Footer'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="app-container">
      <Carousel />
      <Restaurants />
    </div>
    <Footer />
  </>
)

export default Home
