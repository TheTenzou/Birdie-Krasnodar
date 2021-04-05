import React from "react"
import { Link } from "react-router-dom"

const linkStyle = {
  background: "rgba(255,255,255,0)",
  color: "#1b1b1b",
  borderWidth: "0px",
  fontFamily: "Roboto, sans-serif",
  fontSize: "16px"
}

const registerStyle = {
  background: "#cc8f52",
  borderRadius: "24px",
  marginRight: "5px",
  width: "122px",
  borderTopColor: "#cc8f52",
  borderRightColor: "#cc8f52",
  borderBottomColor: "#cc8f52",
  borderLeftColor: "#cc8f52"
}

const loginStyle = {
  fontFamily: "Roboto, sans-serif",
  height: "38px",
  background: "#5c5c5c",
  borderRadius: "35px",
  borderWidth: "0px",
  borderStyle: "solid",
  margin: "-10px",
  width: "75px"
}

const Navbar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand bg-light navigation-clean"
        style={{ fontFamily: "Roboto, sans-serif", width: "100%" }}>
      <div className="container">
        <Link to="/" className="navbar-brand"> Birdie </Link>
        <button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-3"></button>
        <div className="collapse navbar-collapse" id="navcol-3" style={{ marginLeft: "150px" }}>
          <Link to="/News" className="btn btn-primary mx-auto" style={linkStyle} > Новости </Link>
          <Link to="/CafeList" className="btn btn-primary mx-auto" style={linkStyle} > Локации </Link>
          <Link to="/About" className="btn btn-primary mx-auto" style={linkStyle}> О нас </Link>
          <Link to="/Contacts" className="btn btn-primary mx-auto" style={linkStyle}> Контакты </Link>
          <Link to="/Register" className="btn btn-primary mx-auto" style={registerStyle}> Регистрация </Link>
          <Link to="/Login" className="btn btn-primary mx-auto login" style={loginStyle}> Вход </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar