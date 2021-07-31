import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import './App.css'
import About from './screens/About'
import Home from './screens/Home'
import Hooks from './screens/Hooks'
import Navigation from './components/Navigation'
import Props from './screens/Props'
import Misc from './screens/Misc'
import VSCSnippets from './screens/VSCSnippets'
import Footer from './components/Footer'
function App() {
  const location = useLocation()
  return (
    <>
      <Navigation />

      <Switch location={location} key={location.key}>
        <Route exact path='/about' component={About} />
        <Route exact path='/hooks' component={Hooks} />
        <Route exact path='/props' component={Props} />
        <Route exact path='/misc' component={Misc} />
        <Route exact path='/snippets' component={VSCSnippets} />
        <Route path='/' component={Home} />
      </Switch>
      <Footer description={'Godspeed'} />
    </>
  )
}

export default App
