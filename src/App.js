import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import ContextTheme from './context/ContextTheme'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'

import './App.css'

import Login from './components/Login'

class App extends Component {
  state = {islight: true}

  changeTheme = () => {
    this.setState(prevState => ({islight: !prevState.islight}))
  }

  render() {
    const {islight} = this.state

    return (
      <ContextTheme.Provider value={{islight, changeTheme: this.changeTheme}}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute path="/" component={Home} />
        </Switch>
      </ContextTheme.Provider>
    )
  }
}

export default App
