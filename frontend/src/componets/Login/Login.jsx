import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//Pages
import MainPage from "../MainPage/MainPage.jsx";
//News
import News from "../News/News.jsx";
import NewsPage from "../NewsPage/NewsPage.jsx";
//Cafe
import CafeList from "../CafeList/CafeList.jsx";
import CafePage from "../CafePage/CafePage.jsx";
//Login, Registration
import Register from "../Register/Register.jsx";
//404
import NoPage from "../404/nopage.jsx";

const Login = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>LoginForm</title>
      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css" />
      <link rel="stylesheet" href="assets/fonts/ionicons.min.css" />
      <link rel="stylesheet" href="assets/css/FooterLogin.css" />
      <link rel="stylesheet" href="assets/css/LoginFormClean.css" />
      <nav
        className="navbar navbar-light navbar-expand bg-light navigation-clean"
        style={{ fontFamily: "Roboto, sans-serif", width: "100%" }}
      >
        <div className="container">
          <Link
            to="/"
            className="navbar-brand"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Birdie
          </Link>
          <button
            data-toggle="collapse"
            className="navbar-toggler"
            data-target="#navcol-3"
          />
          <div
            className="collapse navbar-collapse"
            id="navcol-3"
            style={{ marginLeft: "150px" }}
          >
            <div className="btn-group" role="group" />
            <Link
              to="/News"
              className="btn btn-primary mx-auto"
              role="button"
              style={{
                background: "rgba(255,255,255,0)",
                color: "#1b1b1b",
                borderWidth: "0px",
                fontFamily: "Roboto, sans-serif",
                fontSize: "16px"
              }}
            >
              Новости
            </Link>
            <Link
              to="/CafeList"
              className="btn btn-primary mx-auto"
              role="button"
              style={{
                background: "rgba(255,255,255,0)",
                color: "#1b1b1b",
                borderWidth: "0px",
                fontFamily: "Roboto, sans-serif",
                fontSize: "16px"
              }}
            >
              Локации
            </Link>
            <Link
              to="/About"
              className="btn btn-primary mx-auto"
              role="button"
              style={{
                background: "rgba(255,255,255,0)",
                color: "#1b1b1b",
                borderWidth: "0px",
                fontFamily: "Roboto, sans-serif",
                fontSize: "16px"
              }}
            >
              О нас
            </Link>
            <Link
              to="/Contacts"
              className="btn btn-primary mx-auto"
              role="button"
              style={{
                background: "rgba(255,255,255,0)",
                color: "#1b1b1b",
                borderWidth: "0px",
                fontFamily: "Roboto, sans-serif",
                fontSize: "16px"
              }}
            >
              Контакты
            </Link>
            <Link
              to="/Register"
              className="btn btn-primary btn-block"
              type="submit"
              style={{
                background: "#cc8f52",
                borderRadius: "24px",
                marginRight: "5px",
                width: "122px",
                borderTopColor: "#cc8f52",
                borderRightColor: "#cc8f52",
                borderBottomColor: "#cc8f52",
                borderLeftColor: "#cc8f52"
              }}
            >
              Регистрация
            </Link>
            <Link
              to="/Login"
              className="btn btn-primary ml-auto"
              role="button"
              style={{
                fontFamily: "Roboto, sans-serif",
                height: "38px",
                background: "#5c5c5c",
                borderRadius: "35px",
                borderWidth: "0px",
                borderStyle: "solid",
                margin: "-10px",
                width: "75px"
              }}
            >
              Вход
            </Link>
          </div>
        </div>
      </nav>
      <div className="login-clean" style={{ background: "#ffffff" }}>
        <form method="post" style={{ background: "#f8f9fa" }}>
          <h2 className="sr-only">Login Form</h2>
          <div className="illustration">
            <i className="fas fa-kiwi-bird" style={{ color: "#cc8f52" }} />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Пароль"
              style={{ marginTop: "15px" }}
            />
          </div>
          <button
            className="btn btn-primary btn-block"
            type="submit"
            style={{ background: "#cc8f52", borderRadius: "24px" }}
          >
            Войти
          </button>
        </form>
      </div>
      <div
        className="footer-dark"
        style={{ background: "#1b1b1b", fontFamily: "Roboto, sans-serif" }}
      >
        <div className="col">
          <h5 style={{ fontFamily: "Roboto, sans-serif", textAlign: "center" }}>
            КОНТАКТНАЯ ИНФОРМАЦИЯ
          </h5>
          <p
            style={{
              textAlign: "center",
              fontFamily: "Roboto, sans-serif",
              marginTop: "0px"
            }}
          >
            Тут контактная информация
          </p>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col item social">
                <a href="#">
                  <i className="icon ion-social-facebook" />
                </a>
                <a href="#">
                  <i className="icon ion-social-instagram" />
                </a>
              </div>
            </div>
            <p className="copyright" style={{ marginTop: "0px" }}>
              Birdie Krasnodar © 2020
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Login;
