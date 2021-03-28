import React, { Component, useEffect, useState } from "react";
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
import CafePage from "../CafePage/CafePage.jsx";
//Login, Registration
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";
//404
import NoPage from "../404/nopage.jsx";

import RestaurantCard from "./card";
import axiosInstance from "../../axiosApi";


const CafeList = () => {
  const [url, setUrl] = useState('http://'+window.location.host+'/api/restaurants/list/');
  const [restaurantList, setRestaurantList] = useState({});
  useEffect(async () => {
    try {
      const response = await axiosInstance.get(url);
      setRestaurantList(response.data);
    } catch (error) {
      throw error;
    }
  }, [])
  let itemsToRender;
  if (restaurantList.results) {
    itemsToRender = restaurantList.results.map(item => {
      return <RestaurantCard 
              id={item.id}
              title={item.name} 
              rating={item.rating} 
              desc={item.description} 
              pic={item.card_picture}
              slug={item.slug}/>
    })
  } else {
    itemsToRender = "loading....";
  }
  async function hadleNext(e) {
    // e.preventDefault();
    setUrl(restaurantList.next);
    try {
      const response = await axiosInstance.get(restaurantList.next);
      setRestaurantList(response.data);
    } catch (error) {
      throw error;
    }
  }
  async function hadlePrev(e) {
    // e.preventDefault();
    setUrl(restaurantList.previous);
    try {
      const response = await axiosInstance.get(restaurantList.previous);
      setRestaurantList(response.data);
    } catch (error) {
      throw error;
    }
  }
  let buttonNextType;
  if (restaurantList.next) {
    buttonNextType = "btn btn-primary active";
  } else {
    buttonNextType = "btn btn-primary disabled"
  }
  let buttonPrevType;
  if (restaurantList.previous) {
    buttonPrevType = "btn btn-primary active";
  } else {
    buttonPrevType = "btn btn-primary disabled"
  }
  return (
    <div>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>CafesList</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto"
      />
      <nav className="navbar navbar-light navbar-expand bg-light navigation-clean">
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
      <div>
        <div className="container">
          <h2>Заведения Краснодара</h2>
        </div>
        <div className="filter">
          <form>
            <input placeholder="Поиск по заведениям" />
            <select>
              <option value>Любая стоимость</option>
              <option value>Менее 500 руб/чел</option>
              <option value>500-1000 руб/чел</option>
              <option value>1000-2000 руб/чел</option>
            </select>
            <select>
              <option value>Любая кухня</option>
              <option value>Итальянская кухня</option>
              <option value>Японская кухня</option>
              <option value>Паназиатская кухня</option>
              <option value>Европейская кухня</option>
              <option value>Традиционная кухня</option>
              <option value>Пиво</option>
            </select>
          </form>
        </div>
        <div className="col">
          <div className="btn-toolbar">
            <div className="btn-group" role="group" />
            <div className="btn-group" role="group" />
          </div>
        </div>

        <div className="container">
          <div className="row">
            {itemsToRender}
          </div>
        </div>

      </div>
      <section>
        <div className="col">
          <section />
        </div>
      </section>
      <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6" style={{paddingTop: '2%'}}>
                <a className={buttonPrevType} 
                    role="button" 
                    style={{display: 'block', marginRight: 'auto', marginLeft: '75%', background: '#cc8f52', borderTopColor: 'rgba(0,123,255,0)', borderRightColor: 'rgba(0,123,255,0)', borderBottomColor: 'rgba(0,123,255,0)', borderLeftColor: 'rgba(0,123,255,0)', width: '25%', borderRadius: '30px', fontFamily: 'Roboto, sans-serif', color: '#f8f9fa'}} 
                    onClick={hadlePrev}>Previous</a>
              </div>
              <div className="col-md-6" style={{paddingTop: '2%'}}>
                <a className={buttonNextType} 
                    role="button" 
                    style={{display: 'block', marginLeft: 'auto', marginRight: '75%', background: '#cc8f52', borderTopColor: 'rgba(0,123,255,0)', borderRightColor: 'rgba(0,123,255,0)', borderBottomColor: 'rgba(0,123,255,0)', borderLeftColor: 'rgba(0,123,255,0)', fontFamily: 'Roboto, sans-serif', color: '#f8f9fa', borderRadius: '30px', width: '25%'}} 
                    onClick={hadleNext}>Next</a>
              </div>
            </div>
          </div>
        </div>
      <div className="col">
        <section style={{ marginTop: "35px" }} />
      </div>
      <div className="footer-dark" style={{ background: "#1b1b1b" }}>
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

export default CafeList;
