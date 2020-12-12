import React, { Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";



//Pages
import MainPage from "./MainPage/index.jsx";
import News from "./News/News.jsx"
import NoPage from "./404/404page.jsx";



class App extends Component{
    render(){
        return
        <MainPage></MainPage>;
        //<Router>
          //<Switch>
            //<Route exact path="/" component={MainPage} />
            //<Route exact path="404/404page.jsx" component={NoPage} />;
            //<Redirect to="404/404page.jsx"/>;
        //</Switch>
        //</Router>
    }
};


export default App;
