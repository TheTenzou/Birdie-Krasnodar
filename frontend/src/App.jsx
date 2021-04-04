import Navbar from './components/navbar/navbar'
import Landing from './components/landing/landing'
import Footer from './components/footer/footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/News"/>
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default App
