import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {ImCross} from 'react-icons/im'
import {BiSearchAlt2} from 'react-icons/bi'

import './index.css'
import ContextTheme from '../../context/ContextTheme'
import {DivHome} from './styledComponents'

import Header from '../Header'
import SideBar from '../SideBar'

class Home extends Component {
  state = {showBanner: true, dataState: 'initial', searchText: ''}

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({dataState: 'loading'})
    const {searchText} = this.state
    const JWT = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchText}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Beaber ${JWT}`,
      },
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    if (response.ok) {
      const {videos} = fetchedData
      const updatedData = videos.map(each => ({
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({Data: updatedData, dataState: 'success'})
    } else {
      this.setState({dataState: 'failure'})
    }
  }

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  renderLoading = () => (
    <div id="loader" className="loader-con">
      <div className="products-loader-container">
        <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
      </div>
    </div>
  )

  renderSuccess = () => {
    const {Data} = this.state
    return <h1>Home</h1>
  }

  renderFailure = () => (
    <div>
      <h1>failure</h1>
    </div>
  )

  renderItem() {
    const {dataState} = this.state
    switch (dataState) {
      case 'loading':
        return this.renderLoading()
      case 'success':
        return this.renderSuccess()
      case 'failure':
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    const {showBanner} = this.state
    return (
      <ContextTheme.Consumer>
        {value => {
          const {islight} = value
          return (
            <DivHome islight={islight}>
              <Header />
              <div className="home-side-content-container">
                <div className="side-bar-con">
                  <SideBar />
                </div>
                <div className="content-container">
                  {showBanner ? (
                    <div className="banner-container">
                      <div className="banner-content">
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt=""
                          className="banner-website-logo"
                        />
                        <p className="banner-para">
                          Buy Nxt Watch Premium Prepaid Plans with UPI
                        </p>
                        <button className="get-it-now">GET IT NOW</button>
                      </div>
                      <div>
                        <button
                          className="cross-button"
                          onClick={this.closeBanner}
                        >
                          <ImCross className="logos" />
                        </button>
                      </div>
                    </div>
                  ) : null}
                  <div className="search-con">
                    <input
                      type="search"
                      placeholder="SEARCH"
                      className="search-input"
                    />
                    <button className="search-button">
                      <BiSearchAlt2 />
                    </button>
                  </div>
                  <div>{this.renderItem()}</div>
                </div>
              </div>
            </DivHome>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default Home
