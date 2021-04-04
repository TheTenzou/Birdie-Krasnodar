import Navbar from './components/navbar/navbar'
import Landing from './components/landing/landing'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/News"/>
        </Switch>
      </Router>
    </>
  )
}

export default App
