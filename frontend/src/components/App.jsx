import React, { Component} from "react";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./login";
import Signup from "./singup";

class App extends Component{
    render(){
        return(
            <div className="site">
                <main>
                    <h1>Ahhh after 10,000 years I'm free. Time to conquer the Earth!</h1>
                    <Switch>
                        <Route exact path={"/login/"} component={Login}/>
                        <Route exact path={"/signup/"} component={Signup}/>
                        <Route exact path={"/"} render={() => <div>Home page</div>}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;