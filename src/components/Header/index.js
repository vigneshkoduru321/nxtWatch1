import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'

import ContextTheme from '../../context/ContextTheme'

import {Nav} from './styledComponent'
import './index.css'

const Header = () => (
  <ContextTheme.Consumer>
    {value => {
      const {islight, changeTheme} = value
      const onClickChangeTheme = () => {
        changeTheme()
      }
      return (
        <Nav islight={islight}>
          <div>
            <img
              src={
                islight
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              }
              alt=""
              className="nav-website-logo"
            />
          </div>
          <div className="log-out-container">
            <button onClick={onClickChangeTheme} className="theme-button">
              {islight ? (
                <FaMoon className="moon" />
              ) : (
                <FiSun className="sun" />
              )}
            </button>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
              className="profile"
            />
            <button className="log-out-button">Logout</button>
          </div>
        </Nav>
      )
    }}
  </ContextTheme.Consumer>
)

export default Header
