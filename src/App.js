import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <>
    <Home />
    <TeamMatches />
    <NotFound />
  </>
)

export default App
