import {Component} from 'react'
import {Link} from 'react-router-dom'

import {FaHome, FaRegSave} from 'react-icons/fa'
import {AiFillFire} from 'react-icons/ai'
import {IoLogoGameControllerB} from 'react-icons/io'

import './index.css'
import {IconText, Head, Para} from './styledComponent'
import ContextTheme from '../../context/ContextTheme'

class SideBar extends Component {
  render() {
    return (
      <ContextTheme.Consumer>
        {value => {
          const {islight} = value
          return (
            <div className="side-bar-con">
              <div>
                <Link style={{textDecoration: 'none'}} to="/">
                  <div className="icon-con">
                    <FaHome className="icon" />
                    <IconText islight={islight}>Home</IconText>
                  </div>
                </Link>
                <Link style={{textDecoration: 'none'}} to="/trending">
                  <div className="icon-con">
                    <AiFillFire className="icon" />
                    <IconText islight={islight}>Trending</IconText>
                  </div>
                </Link>
                <Link style={{textDecoration: 'none'}} to="/gaming">
                  <div className="icon-con">
                    <IoLogoGameControllerB className="icon" />
                    <IconText islight={islight}>Gaming</IconText>
                  </div>
                </Link>
                <Link style={{textDecoration: 'none'}} to="/saved-videos">
                  <div className="icon-con">
                    <FaRegSave className="icon" />
                    <IconText islight={islight}>Saved Videos</IconText>
                  </div>
                </Link>
              </div>
              <div className="contact-us-con">
                <Head islight={islight}>Contact Us</Head>
                <div className="logo-con">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                    className="logos"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                    className="logos"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linkedin logo"
                    className="logos"
                  />
                </div>
                <Para islight={islight}>
                  Enjoy! Now to see your channel and recommendations
                </Para>
              </div>
            </div>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default SideBar
