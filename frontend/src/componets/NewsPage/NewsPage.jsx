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
//Cafe
import CafeList from "../CafeList/CafeList.jsx";
import CafePage from "../CafePage/CafePage.jsx";
//Login, Registration
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";
//404
import NoPage from "../404/nopage.jsx";

const NewsPage = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>NewsPage</title>
      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Lora"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto"
      />
      <link rel="stylesheet" href="assets/fonts/ionicons.min.css" />
      <link rel="stylesheet" href="assets/css/FooterNews.css" />
      <link rel="stylesheet" href="assets/css/NewsArticleDual1.css" />
      <link rel="stylesheet" href="assets/css/styles.css" />
      <link rel="stylesheet" href="assets/css/untitled.css" />
      <nav
        className="navbar navbar-light navbar-expand bg-light navigation-clean"
        style={{ fontFamily: "Roboto, sans-serif" }}
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
      <div className="article-dual-column">
        <div className="container">
          <div className="row" style={{ fontFamily: "Roboto, sans-serif" }}>
            <div className="col-md-10 offset-md-1">
              <div className="intro">
                <h1
                  className="text-center"
                  style={{ fontFamily: "Roboto, sans-serif", color: "#5c5c5c" }}
                >
                  Как питаться правильно
                </h1>
                <p className="text-center">
                  {" "}
                  <span
                    className="date"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      borderColor: "#f8f9fa",
                      borderTopColor: "#f8f9fa",
                      borderRightColor: "#f8f9fa",
                      borderBottomColor: "#f8f9fa",
                      borderLeftColor: "#f8f9fa"
                    }}
                  >
                    3 ДЕКАБРЯ, 2020
                  </span>
                </p>
                <img
                  className="img-fluid"
                  src="assets/img/News2Salad.jpg"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    width: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "block"
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row" style={{ marginBottom: "3%" }}>
            <div className="col-md-10 col-lg-3 offset-md-1">
              <div className="toc" style={{ background: "#ffffff" }}>
                <p
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "18px",
                    color: "#5c5c5c"
                  }}
                >
                  Содержание статьи
                </p>
                <ul>
                  <li>
                    <a
                      href="#"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "18px",
                        color: "#5c5c5c",
                        textDecoration: "none"
                      }}
                    >
                      Пункт 1 в статье
                    </a>{" "}
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "18px",
                        color: "#5c5c5c",
                        textDecoration: "none"
                      }}
                    >
                      Пункт 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "18px",
                        color: "#5c5c5c",
                        textDecoration: "none"
                      }}
                    >
                      Пункт 3
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-md-10 col-lg-7 offset-md-1 offset-lg-0"
              style={{ background: "#f8f9fa" }}
            >
              <div className="text">
                <p style={{ fontFamily: "Roboto, sans-serif" }}>
                  Текст статьи про здоровую еду.
                </p>
                <p style={{ fontFamily: "Roboto, sans-serif" }}>
                  Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                  Vivamus ac lacus.<strong>&nbsp;E</strong>lementum. Etiam quis
                  tristique lectus. Aliquam in arcu eget velit{" "}
                  <em>pulvinar dict</em> vel in justo. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                  Curae.
                </p>
                <h2 style={{ fontFamily: "Roboto, sans-serif" }}>
                  Пункт 1 в статье
                </h2>
                <p style={{ fontFamily: "Roboto, sans-serif" }}>
                  Suspendisse vel placerat ligula. Vivamus ac sem lac. Ut
                  vehicula rhoncus elementum. Etiam quis tristique lectus.
                  Aliquam in arcu eget velit pulvinar dictum vel in justo.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae.
                </p>
                <figure className="figure">
                  <img
                    className="figure-img"
                    src="assets/img/beach.jpg"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  />
                  <figcaption
                    className="figure-caption"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    Подпись к фото 1
                  </figcaption>
                </figure>
                <p style={{ fontFamily: "Roboto, sans-serif" }}>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae. Suspendisse vel placerat
                  ligula. Vivamus ac sem lac. Ut vehicula rhoncus elementum.
                  Etiam quis tristique lectus. Aliquam in arcu eget velit
                  pulvinar dictum vel in justo.
                </p>
              </div>
            </div>
          </div>
        </div>
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

export default NewsPage;
