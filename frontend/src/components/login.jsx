import React, { Component } from "react";
import axiosInstance from "../axiosApi";

class Login extends Component{
    constructor(prop){
        super(prop);
        this.state = {username: "", password: ""};

        this.handleChage = this.handleChage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChage(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        try {
            const response = axiosInstance.post('/token/obtain/', {
                username: this.state.username,
                password: this.state.password
            });
            axiosInstance.defaults.headers['Authorization'] = "JWT " + response.date.access;
            localStorage.setItem('access_token', response.date.access);
            localStorage.setItem('refresh_token', response.date.refresh);
            return data;
        } catch (error) {
            throw error;
        }
    }

    render() {
        return (
            <div>Login
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input name="username" type="text" value={this.state.username} onChange={this.handleChage}/>
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
export default Login;