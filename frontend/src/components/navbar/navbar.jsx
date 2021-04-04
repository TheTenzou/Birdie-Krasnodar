import React from "react"
import { Link } from "react-router-dom"

import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand" > Birdie </Link>
        <div className="navbar-collapse">
          <Link to="/News" className="navbar-button"> Новости </Link>
          <Link to="/CafeList" className="navbar-button"> Локации </Link>
          <Link to="/About" className="navbar-button"> О нас </Link>
          <Link to="/Contacts" className="navbar-button"> Контакты </Link>
          <Link to="/Register" className="navbar-button register"> Регистрация </Link>
          <Link to="/Login" className="navbar-button login"> Вход </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar