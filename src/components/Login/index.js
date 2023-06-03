// Write your JS code here
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  SuccessLogin = data => {
    const jwtToken = Cookies.set('jwt_token', data, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  FailureLogin = () => {}

  LoginButton = async event => {
    event.preventDefault()
    const details = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(details),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.SuccessLogin(data.jwt_token)
    } else {
      this.FailureLogin()
    }
  }

  render() {
    const jwt = Cookies.get('jwt_token')
    if (jwt !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <form className="div">
        <h1>Please Login</h1>
        <button type="submit" className="login" onClick={this.LoginButton}>
          Login with Sample Creds
        </button>
      </form>
    )
  }
}

export default Login
