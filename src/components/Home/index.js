// Write your JS code hereimp
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = props => {
  const {history} = props
  const LogoutButton = () => {
    Cookies.remove('jwt_token')

    history.replace('/login')
  }
  return (
    <div className="div">
      <Header />
      <h1>Home Route</h1>
      <button type="button" onClick={LogoutButton}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(Home)
