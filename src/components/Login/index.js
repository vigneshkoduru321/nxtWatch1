import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ContextTheme from '../../context/ContextTheme'
import './index.css'
import {DivForm, Label, LabelShow} from './styledComponent'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
    error: '',
    showPassword: false,
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    if (response.ok) {
      console.log(fetchedData.jwt_token)
      Cookies.set('jwt_token', fetchedData.jwt_token, {expires: 365})
      this.setState({showError: false})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({showError: true, error: fetchedData.error_msg})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  toggleCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {showPassword, username, password, showError, error} = this.state
    const JWT = Cookies.get('jwt_token')
    if (JWT !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ContextTheme.Consumer>
        {value => {
          const {islight} = value
          return (
            <div className="main-container-login">
              <DivForm
                onSubmit={this.onSubmitLogin}
                className="div-form"
                islight={islight}
              >
                <div>
                  <img
                    src={
                      islight
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    }
                    alt=""
                    className="website-logo"
                  />
                </div>
                <div className="input-main-con">
                  <div className="input-containers">
                    <Label islight={islight} htmlFor="username">
                      USERNAME*
                    </Label>
                    <input
                      id="username"
                      placeholder="USERNAME"
                      className="input-elements"
                      onChange={this.onChangeUsername}
                    />
                  </div>
                  <div className="input-containers">
                    <Label islight={islight} htmlFor="password">
                      PASSWORD*
                    </Label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      placeholder="PASSWORD"
                      className="input-elements"
                      onChange={this.onChangePassword}
                    />
                  </div>
                  <div className="show-con">
                    <input
                      onChange={this.toggleCheckbox}
                      id="checkbox"
                      type="checkbox"
                    />
                    <LabelShow islight={islight} htmlFor="checkbox">
                      Show Password
                    </LabelShow>
                  </div>
                </div>
                <div>
                  <button className="login-button" type="submit">
                    Login
                  </button>
                </div>
                <div className="error-con">
                  {showError ? <p className="error">{error}</p> : null}
                </div>
              </DivForm>
            </div>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default Login
