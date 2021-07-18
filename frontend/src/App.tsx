import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom'
import './App.css'
import About from './screens/About'
import Home from './screens/Home'
import Hooks from './screens/Hooks'
import Navigation from './components/Navigation'
import Props from './screens/Props'
function App() {
  const location = useLocation()
  return (
    <>
      <Navigation />

      <Switch location={location} key={location.key}>
        <Route exact path='/about' component={About} />
        <Route exact path='/hooks' component={Hooks} />
        <Route exact path='/props' component={Props} />
        <Route path='/' component={Home} />
      </Switch>
    </>
  )
}

export default App
