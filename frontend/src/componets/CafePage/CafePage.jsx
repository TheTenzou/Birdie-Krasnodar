import React, { Component , useState, useEffect} from "react";
import { Switch, Route, Link } from "react-router-dom";

import axiosInstance from "../../axiosApi";

//Pages
import MainPage from "../MainPage/MainPage.jsx";
//News
import News from "../News/News.jsx";
import NewsPage from "../NewsPage/NewsPage.jsx";
//Cafe
import CafeList from "../CafeList/CafeList.jsx";
//Login, Registration
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";
//404
import NoPage from "../404/nopage.jsx";

const CafePage = (props) => {
  const [restaurant, setRestaurant] = useState({});
  const [reviews, setReviews] = useState({});
  useEffect(async () => {
    try {
      const response = await axiosInstance.get('http://'+window.location.host+'/api/restaurants/'+props.match.params.slug+'/');
      setRestaurant(response.data);
      console.log(response.data)
    } catch (error) {
      throw error;
    }
    try {
      const responseReview = await axiosInstance.get('http://'+window.location.host+'/api/reviews/list/?restaurant__slug='+props.match.params.slug);
      setReviews(responseReview.data);
      // console.log(responseReview.data);
    } catch (error) {
      throw error;
    }
  }, [])
  let picToRender;
  if (restaurant.restaurant_pictures) {
    picToRender = restaurant.restaurant_pictures.map(item => {
      return (
        <li>
          <a href='#'>
            <img src={item.picture}/>
          </a>
        </li>
      )})
  } else {
    picToRender = "loading....";
  }
  let foodTypeToRender;
  if (restaurant.food_type) {
    foodTypeToRender = restaurant.food_type.map(item => {
      return (<>{item.name}<br/></>)
    })
  } else {
    foodTypeToRender = "loading..."
  }
  let priceBracketToRender;
  if (restaurant.price_bracket) {
    priceBracketToRender = restaurant.price_bracket.name;
  } else {
    priceBracketToRender = "loading ..."
  }
  let addressToRendor;
  if (restaurant.address) {
    addressToRendor = restaurant.address.map(item => {
      return (<>item.name<br/></>)
    })
  } else {
    addressToRendor = "loading..."
  }
  let reviewsToRender;
  if (reviews.results) {
    reviewsToRender = reviews.results.map(item => {
      return <>
          <div className="container">
            <div
              className="col"
              style={{ background: "#f8f9fa", fontFamily: "Roboto, sans-serif" }}
            >
              <h3>
                {item.user.first_name} {item.user.last_name} &nbsp;
                <i className="fa fa-star" style={{ color: "#cc8f52" }} />
                <i className="fa fa-star" style={{ color: "#cc8f52" }} />
                <i className="fa fa-star" style={{ color: "#cc8f52" }} />
                <i className="fa fa-star" style={{ color: "#cc8f52" }} />
                <i className="fa fa-star-o" style={{ color: "#cc8f52" }} />
              </h3>
              <p style={{ fontSize: "20px" }}>
                {item.text}
              </p>
            </div>
          </div>
        </>
    })
  } else {
    reviewsToRender = "Loading...."
  };
  async function hadleNext(e) {
    // e.preventDefault();
    // setUrl(restaurantList.next);
    try {
      const response = await axiosInstance.get(reviews.next);
      setReviews(response.data);
    } catch (error) {
      throw error;
    }
  }
  async function hadlePrev(e) {
    // e.preventDefault();
    // setUrl(restaurantList.previous);
    try {
      const response = await axiosInstance.get(reviews.previous);
      setReviews(response.data);
    } catch (error) {
      throw error;
    }
  }
  let buttonNextType;
  if (reviews.next) {
    buttonNextType = "btn btn-primary active";
  } else {
    buttonNextType = "btn btn-primary disabled"
  }
  let buttonPrevType;
  if (reviews.previous) {
    buttonPrevType = "btn btn-primary active";
  } else {
    buttonPrevType = "btn btn-primary disabled"
  };
  return (
    <div>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>Cafe</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto"
      />
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
          {restaurant.name} 
        </h1>
      </div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="accordian" style={{ marginTop: "2%" }}>
                <ul>
                  {/* <li>
                    <a className="image_title" href="#">
                      Фронт
                    </a>
                    <a href="#">
                      <img src="assets/img/Pic1Cafe.png" />
                    </a>
                  </li>
                  <li>
                    <a className="image_title" href="#">
                      Toy Story
                    </a>
                    <a href="#">
                      <img src="assets/img/Try2.png" />
                    </a>
                  </li>
                  <li>
                    <a className="image_title" href="#">
                      Wall-E
                    </a>
                    <a href="#">
                      <img src="assets/img/Pic3Food.png" />
                    </a>
                  </li>
                  <li>
                    <a className="image_title" href="#">
                      UP!
                    </a>
                    <a href="#">
                      <img src="assets/img/Pic4Food.png" />
                    </a>
                  </li>
                  <li>
                    <a className="image_title" href="#">
                      Cars
                    </a>
                    <a href="#">
                      <img src="assets/img/Pic5Employee.png" />
                    </a>
                  </li> */}
                  {picToRender}
                </ul>
              </div>
            </div>
            <div
              className="col-md-6"
              style={{ width: "22%", maxWidth: "22%", visibility: "hidden" }}
            />
            <div className="col">
              <p
                style={{
                  fontSize: "20px",
                  paddingTop: "5px",
                  fontFamily: "Roboto, sans-serif",
                  color: "#1b1b1b"
                }}
              >
                Оценка заведения: {restaurant.rating} &nbsp;&nbsp;
                <i className="fa fa-star" style={{ color: "#cc8f52" }} />
                <i className="fa fa-star" style={{ color: "#cc8f52" }} />
                <i className="fa fa-star" style={{ color: "#cc8f52" }} />
                <i className="fa fa-star" style={{ color: "#cc8f52" }} />
                <i className="fa fa-star-half-o" style={{ color: "#cc8f52" }} />
                <br />
              </p>
              <p
                style={{
                  fontSize: "20px",
                  paddingTop: "5px",
                  fontFamily: "Roboto, sans-serif",
                  color: "#1b1b1b"
                }}
              >
                Тип кухни: <br/>{foodTypeToRender}
                <br />
              </p>
              <p
                style={{
                  fontSize: "20px",
                  paddingTop: "5px",
                  fontFamily: "Roboto, sans-serif",
                  color: "#1b1b1b"
                }}
              >
                Стоимость: {priceBracketToRender}
                <br />
              </p>
              <p
                style={{
                  fontSize: "20px",
                  paddingTop: "5px",
                  fontFamily: "Roboto, sans-serif",
                  color: "#1b1b1b"
                }}
              >
                Адрес: <br/> {addressToRendor}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ background: "#f8f9fa" }}>
        <h2
          style={{
            fontFamily: "Roboto, sans-serif",
            marginTop: "2%",
            color: "#1b1b1b"
          }}
        >
          Описание:
        </h2>
        <p
          style={{
            fontFamily: "Roboto, sans-serif",
            fontSize: "20px",
            color: "#5c5c5c"
          }}
        >
        <br/>
          {restaurant.description}
        </p>
      </div>
      <div className="container">
        <h3 style={{ fontFamily: "Roboto, sans-serif", marginTop: "2%" }}>
          &nbsp; Отзывы:
        </h3>
      </div>
      {reviewsToRender}
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
      <div className="container">
        <div className="col">
          <button
            className="btn btn-primary btn-block"
            type="submit"
            style={{
              display: "block",
              background: "#cc8f52",
              borderRadius: "24px",
              width: "33%",
              fontSize: "large",
              borderTopColor: "#cc8f52",
              borderRightColor: "#cc8f52",
              borderBottomColor: "#cc8f52",
              borderLeftColor: "#cc8f52",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "3%",
              fontFamily: "Roboto, sans-serif"
            }}
          >
            Написать отзыв
          </button>
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

export default CafePage;
