// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'

import './index.css'

const About = props => {
  const {history} = props
  const LogingOut = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="div">
      <Header />
      <h1>About Route</h1>
      <button type="button" onClick={LogingOut}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(About)
