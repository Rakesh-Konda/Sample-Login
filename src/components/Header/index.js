// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="hlo">
    <ul className="ul">
      <li className="li">
        <Link to="/">Home</Link>
      </li>
      <li className="li">
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
)

export default Header
