import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//Pages
import MainPage from "./MainPage/MainPage.jsx";
//News
import News from "./News/News.jsx";
import NewsPage from "./NewsPage/NewsPage.jsx";
//Cafe
import CafeList from "./CafeList/CafeList.jsx";
import CafePage from "./CafePage/CafePage.jsx";
//Login, Registration
import Login from "./Login/Login.jsx";
import Register from "./Register/Register.jsx";
//404
import NoPage from "./404/nopage.jsx";

class App extends Component {
  render() {
    //(<MainPage></MainPage> )

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />

          <Route exact path="/CafeList" component={CafeList} />
          <Route exact path="/CafePage/:slug" component={CafePage} />;

          <Route exact path="/News" component={News} />;
          <Route exact path="/NewsPage" component={NewsPage} />;

          <Route exact path="/Login" component={Login} />;
          <Route exact path="/Register" component={Register} />;

          <Route exact path="/nopage" component={NoPage} />;
          <Redirect to="/nopage" />;
        </Switch>
      </Router>
    );
  }
}

export default App;
