import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="footer-section-container">
      <img
        src="https://res.cloudinary.com/dleaoaoxz/image/upload/v1640612315/Group_7420_1_fhspva.svg"
        alt="website-footer-logo"
        className="footer-img"
      />
      <h1 className="footer-head">Tasty Kitchens</h1>
    </div>
    <p className="footer-des">
      The only thing we are serious about is food. <br /> Contact us on
    </p>
    <div className="icon-container">
      <FaPinterestSquare className="icon" testid="pintrest-social-icon" />
      <FaInstagram className="icon" testid="instagram-social-icon" />
      <FaTwitter className="icon" testid="twitter-social-icon" />
      <FaFacebookSquare className="icon" testid="facebook-social-icon" />
    </div>
  </div>
)
export default Footer
