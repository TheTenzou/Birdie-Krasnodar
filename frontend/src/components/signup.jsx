import React, { Component } from "react";

class Signup extends Component{
    constructor(prop){
        super(prop);
        this.state = {
            username: "",
            password: "",
            email:""
        };

        this.handleChage = this.handleChage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChage(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        alert('A username and password was submitted: ' + this.state.username + " " + this.state.password + " " + this.state.email)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                Signup
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Usernname:
                        <input name="username" type="text" value={this.state.username} onChange={this.handleChage}/>
                    </label>
                    <label>
                        Email:
                        <input name="email" type="email" value={this.state.email} onChange={this.handleChage}/>
                    </label>
                    <label>
                        Password:
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChage}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
export default Signup;