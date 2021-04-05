import React from "react"
import DescCard from "./components/descCard"
import "./landing.css"
import firstPic from "./img/Screenshot_1.png"


const Landing = () => {
  return (
    <>
      <header className="masthead text-white text-center header" >
        <div className="overlay">
          <ul className="list-group" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h1 className="mb-5">
                {" "}
                <a href="#" style={{ fontFamily: "Roboto, sans-serif", color: "#ffffff", textDecoration: "none" }} > Текст по новостям </a>
              </h1>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form>
                <div className="form-row">
                  <div className="col">
                    <h4 style={{ fontFamily: "Roboto, sans-serif" }}> Дополнительная информация <br /> </h4>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>

      <section className="features-icons bg-light text-center" style={{ background: "rgb(255,255,255)" }}>
        <section></section>
        <div className="container">
          <div className="row">
            <DescCard
              title="Любовь и дружба"
              description="Где найти самых приятную кампанию для беседы. Рассказываем в нашем постоянном блоге."
              image={firstPic} />
            <DescCard
              title="Любовь и дружба"
              description="Где найти самых приятную кампанию для беседы. Рассказываем в нашем постоянном блоге."
              image={firstPic} />
            <DescCard
              title="Любовь и дружба"
              description="Где найти самых приятную кампанию для беседы. Рассказываем в нашем постоянном блоге."
              image={firstPic} />
          </div>
        </div>
      </section>

      <section className="showcase">
        <div
          className="col"
          style={{ background: "#ffffff", paddingBottom: "40px" }}
        >
          <h2 style={{ width: "225px", paddingTop: "40px" }}>Куда сходить?</h2>
          <p
            className="lead text-center mb-0"
            style={{
              height: "auto",
              fontSize: "22px",
              fontFamily: "Roboto, sans-serif",
              textAlign: "center",
              width: "66%",
              paddingBottom: "10px"
            }}
          >
            Доверьтесь нам! Мы посещаем практически все новые места города
            Краснодар и всегда сообщаем об этом Вам, давая развёрнутый
            комментарий по поводу всего: начиная от интерьера, заканчивая едой и
            её качеством. Основа нашей философии — страсть к открытию чего-то
            нового и необычного. Мы предлагаем Вам самый различные форматы еды и
            заведений на любой вкус.
          </p>
          <a
            className="btn btn-primary"
            role="button"
            style={{
              borderRadius: "32px",
              color: "#1b1b1b",
              background: "rgb(255,255,255)",
              borderWidth: "2px",
              borderTopColor: "#1b1b1b",
              borderRightColor: "#1b1b1b",
              borderBottomColor: "#1b1b1b",
              borderLeftColor: "#1b1b1b",
              padding: "6px",
              fontSize: "22px",
              fontFamily: "Roboto, sans-serif",
              width: "225px"
            }}
            href="#"
          >
            Оцените сами!
          </a>
        </div>
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              style={{ background: 'url("assets/img/Screenshot_4.png")' }}
            >
              <span />
            </div>
            <div className="col-lg-6 my-auto order-lg-1 showcase-text">
              <h1 style={{ fontFamily: "Roboto, sans-serif" }}>Контент</h1>
              <p style={{ fontFamily: "Roboto, sans-serif" }}>
                Контент по какому-то кафе. Это широкое поле!
                <br />
                Контент по какому-то кафе.&nbsp;Это широкое поле!
                <br />
                Контент по какому-то кафе.&nbsp;
                <br />
                Контент по какому-то кафе.&nbsp;
                <br />
                Контент по какому-то кафе.&nbsp;
                <br />
                Контент по какому-то кафе.&nbsp;Это широкое поле! ЭТО ШИРОКОЕ
                ПОЛЕ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                <br />
                Контент по какому-то кафе.&nbsp;
                <br />
                Контент по какому-то кафе.&nbsp;
                <br />
                Контент по какому-то кафе.&nbsp;
                <br />
                Контент по какому-то кафе.&nbsp;Это широкое поле!
                <br />
                Контент по какому-то кафе. Это широкое поле! ЭТО ШИРОКОЕ
                ПОЛЕ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                <br />
              </p>
              <a
                className="btn btn-primary"
                role="button"
                style={{
                  borderRadius: "32px",
                  color: "#1b1b1b",
                  background: "rgb(255,255,255)",
                  borderWidth: "2px",
                  borderTopColor: "#1b1b1b",
                  borderRightColor: "#1b1b1b",
                  borderBottomColor: "#1b1b1b",
                  borderLeftColor: "#1b1b1b",
                  padding: "6px",
                  fontSize: "19px",
                  fontFamily: "Roboto, sans-serif",
                  width: "225px"
                }}
                href="#"
              >
                Страница заведения 1
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className="testimonials text-center bg-light"
        style={{ paddingTop: "75px" }}
      >
        <div
          className="register-photo"
          style={{ background: "rgb(255,255,255)" }}
        >
          <div className="form-container">
            <div className="image-holder" />
            <form method="post">
              <h2 className="text-center">Регистрируйся!</h2>
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
                />
              </div>
              <div className="form-group">
                <input
                  type="nickname"
                  className="form-control"
                  name="nickname"
                  placeholder="Имя"
                />
              </div>
              <div className="form-group">
                <button
                  className="btn btn-primary btn-block"
                  type="submit"
                  style={{ background: "#cc8f52", borderRadius: "24px" }}
                >
                  Регистрация
              </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Landing