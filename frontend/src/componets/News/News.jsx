import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";


//Pages
import MainPage from "../MainPage/MainPage.jsx";
//News
import NewsPage from "../NewsPage/NewsPage.jsx";
//Cafe
import CafeList from "../CafeList/CafeList.jsx";
import CafePage from "../CafePage/CafePage.jsx";
//Login, Registration
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";
//404
import NoPage from "../404/nopage.jsx";

const News = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>NewsList</title>
      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto"
      />
      <link rel="stylesheet" href="assets/fonts/ionicons.min.css" />
      <link rel="stylesheet" href="assets/css/culumnmarginnews.css" />
      <link rel="stylesheet" href="assets/css/FilterNews.css" />
      <link rel="stylesheet" href="assets/css/FooterNewsList.css" />
      <link rel="stylesheet" href="assets/css/imagestylenews.css" />
      <link rel="stylesheet" href="assets/css/linkstylenotvisible.css" />
      <link rel="stylesheet" href="assets/css/ParagraphNews.css" />
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
            id="navcol-1"
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
      <div className="container">
        <h1 style={{ fontFamily: "Roboto, sans-serif", marginTop: "2%" }}>
          Новости сайта
        </h1>
      </div>
      <div className="filter">
        <form>
          <input placeholder="Поиск" />
          <br />
          <select>
            <option value>Все типы</option>
            <option value>Новости</option>
            <option value>Какие-то ещё типы</option>
          </select>
          <select>
            <option value>За всё время</option>
            <option value>За последний день</option>
            <option value>За последнюю неделю</option>
            <option value>За последний месяц</option>
          </select>
          <select>
            <option value>Стандартная сортировка</option>
            <option value>Сортировка по дате (по убыванию)</option>
            <option value>Сортировка по дате (по возрастанию)</option>
            <option value>Сортировка по типу новости (сначала новости)</option>
            <option value>
              Сортировка по типу новости (сначала другой тип)
            </option>
          </select>
        </form>
      </div>
      <div>
        <div className="container">
          <div className="row">
            <div
              className="col-md-12"
              style={{
                fontFamily: "Roboto, sans-serif",
                background: "#f8f9fa"
              }}
            >
              <a href="#" style={{ color: "#1b1b1b", textDecoration: "none" }}>
                <h2 style={{ marginTop: "3%" }}>
                  Где найти самую дружелюбную компанию
                </h2>
                <img
                  src="assets/img/MainNews1New.png"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                    marginTop: "2%"
                  }}
                />
              </a>
              <p style={{ fontSize: "22px" }}>
                Используемый формат - 1 + 2 Columns, таким образом будет
                отделяться по 3 новости за раз и выделяться большая.
                <br />
                Используем в новостях 22-й шрифт. Пишем тут основную информацию.
                Формат фото - 740*325 или любой другой широкоформатник
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              <a href="#" style={{ color: "#1b1b1b", textDecoration: "none" }}>
                <h2>Гайд по правильной еде</h2>
                <img src="assets/img/News2Salad.jpg" />
              </a>
              <p style={{ fontSize: "22px" }}>
                Формат данного фото - 540*540, в идеале искать квадратики или
                резать.
              </p>
            </div>
            <div
              className="col-md-6"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              <a href="#" style={{ color: "#1b1b1b", textDecoration: "none" }}>
                <h2>Топ-10 мест с доставкой по городу</h2>
                <img src="assets/img/News3Pizza.png" />
              </a>
              <p style={{ fontSize: "22px" }}>Тут тоже 540*540.</p>
            </div>
            <div
              className="col-md-6"
              style={{
                fontFamily: "Roboto, sans-serif",
                background: "#f8f9fa"
              }}
            >
              <a href="#" style={{ color: "#1b1b1b", textDecoration: "none" }}>
                <h2>Какая-то ещё новость</h2>
                <img src="assets/img/News2Salad.jpg" />
              </a>
              <p style={{ fontSize: "22px" }}>
                В двух параграфах достаточно места, чтобы уместить самую
                необходимую информацию.
                <br />
                111111111111111111111111111111111111
                <br />
                1111111111111111111111111111111111
                <br />
                111111111111
                <br />
                111111111111111111111111111111111111111...
              </p>
            </div>
            <div
              className="col-md-6"
              style={{
                fontFamily: "Roboto, sans-serif",
                background: "#f8f9fa"
              }}
            >
              <a href="#" style={{ color: "#1b1b1b", textDecoration: "none" }}>
                <h2>И ещё новость</h2>
                <img src="assets/img/News3Pizza.png" />
              </a>
              <p style={{ fontSize: "22px" }}>
                Картинки лень менять, и так пойдёт.
              </p>
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

export default News;
