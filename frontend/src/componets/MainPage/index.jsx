import React, { Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

const MainPage = () => {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>Home - Brand</title>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Titillium+Web:400,600,700" />
        <link rel="stylesheet" href="assets/fonts/ionicons.min.css" />
        <link rel="stylesheet" href="assets/css/bitbtnlanding.css" />
        <link rel="stylesheet" href="assets/css/FooterMain.css" />
        <link rel="stylesheet" href="assets/css/IDK1.css" />
        <link rel="stylesheet" href="assets/css/paragraphstyle1.css" />
        <link rel="stylesheet" href="assets/css/WHY.css" />
        <nav className="navbar navbar-light navbar-expand bg-light navigation-clean" style={{fontFamily: 'Roboto, sans-serif', width: '100%'}}>
          <div className="container"><a className="navbar-brand" href="#" style={{fontFamily: 'Roboto, sans-serif'}}>Birdie</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-3" />
            <div className="collapse navbar-collapse" id="navcol-3" style={{marginLeft: '150px'}}>
              <div className="btn-group" role="group" /><a className="btn btn-primary mx-auto" role="button" style={{background: 'rgba(255,255,255,0)', color: '#1b1b1b', borderWidth: '0px', fontFamily: 'Roboto, sans-serif', fontSize: '16px'}} href="#">Новости</a><a className="btn btn-primary mx-auto" role="button" style={{background: 'rgba(255,255,255,0)', color: '#1b1b1b', borderWidth: '0px', fontFamily: 'Roboto, sans-serif', fontSize: '16px'}} href="#">Локации</a><a className="btn btn-primary mx-auto" role="button" style={{background: 'rgba(255,255,255,0)', color: '#1b1b1b', borderWidth: '0px', fontFamily: 'Roboto, sans-serif', fontSize: '16px'}} href="#">О нас</a><a className="btn btn-primary mx-auto" role="button" style={{background: 'rgba(255,255,255,0)', color: '#1b1b1b', borderWidth: '0px', fontFamily: 'Roboto, sans-serif', fontSize: '16px'}} href="#">Контакты</a><button className="btn btn-primary btn-block" type="submit" style={{background: '#cc8f52', borderRadius: '24px', marginRight: '5px', width: '122px', borderTopColor: '#cc8f52', borderRightColor: '#cc8f52', borderBottomColor: '#cc8f52', borderLeftColor: '#cc8f52'}}>Регистрация</button><a className="btn btn-primary ml-auto" role="button" href="#" style={{fontFamily: 'Roboto, sans-serif', height: '38px', background: '#5c5c5c', borderRadius: '35px', borderWidth: '0px', borderStyle: 'solid', margin: '-10px', width: '75px'}}>Вход</a></div>
          </div>
        </nav>
        <header className="masthead text-white text-center" style={{background: 'url("assets/img/Diner1.jpg")no-repeat center center', backgroundSize: 'cover'}}>
          <div className="overlay">
            <ul className="list-group" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto"><h1 className="mb-5"> <a href="#" style={{fontFamily: 'Roboto, sans-serif', color: '#ffffff', textDecoration: 'none'}}>Текст по новостям
                  </a>
                </h1></div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                  <div className="form-row">
                    <div className="col">
                      <h4 style={{fontFamily: 'Roboto, sans-serif'}}>Дополнительная информация<br /></h4>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>
        <div />
        <section className="features-icons bg-light text-center" style={{background: 'rgb(255,255,255)'}}>
          <section />
          <div className="container">
            <div className="row">
              <div className="col-md-4" style={{height: 300, paddingBottom: '40px'}}>
                <div /><img src="assets/img/Screenshot_1.png" /><h2 className="text-left"> <a href="#" style={{display: 'block', fontFamily: 'Roboto, sans-serif', color: '#000000', margin: '0px', height: '34px', paddingTop: '15px', paddingBottom: '15px', textDecoration: 'none'}}><strong>Любовь и дружба</strong></a></h2>
                <p className="text-left" style={{fontSize: '19px', fontFamily: 'Roboto, sans-serif', paddingTop: '35px', paddingBottom: '10px'}}>Где найти самых приятную кампанию для беседы. Рассказываем в нашем постоянном блоге.</p>
              </div>
              <div className="col-md-4 offset-xl-0" style={{height: 300, paddingBottom: '40px'}}>
                <div /><img src="assets/img/Screenshot_2.png" /><h2 className="text-left"> <a href="#" style={{display: 'block', fontFamily: 'Roboto, sans-serif', color: '#000000', margin: '0px', height: '34px', paddingTop: '15px', paddingBottom: '15px', textDecoration: 'none'}}><strong>Еда</strong></a></h2>
                <p className="text-left" style={{fontSize: '19px', fontFamily: 'Roboto, sans-serif', paddingTop: '35px', paddingBottom: '10px'}}>Выберите наиболее подходящий вам формат еды и найдите место поблизости.</p>
              </div>
              <div className="col-md-4" style={{height: 300}}>
                <div /><img src="assets/img/Screenshot_3.png" /><h2 className="text-left"> <a href="#" style={{display: 'block', fontFamily: 'Roboto, sans-serif', color: '#000000', margin: '0px', height: '34px', paddingTop: '15px', paddingBottom: '15px', textDecoration: 'none'}}><strong>Пиво</strong></a></h2>
                <p className="text-left" style={{fontFamily: 'Roboto, sans-serif', fontSize: '19px', paddingTop: '35px', paddingBottom: '10px'}}>Узнайте, где подают лучшее пиво в Краснодаре.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="showcase">
          <div className="col" style={{background: '#ffffff', paddingBottom: '40px'}}>
            <h2 style={{width: '225px', paddingTop: '40px'}}>Куда сходить?</h2>
            <p className="lead text-center mb-0" style={{height: 'auto', fontSize: '22px', fontFamily: 'Roboto, sans-serif', textAlign: 'center', width: '66%', paddingBottom: '10px'}}>Доверьтесь нам! Мы посещаем практически все новые места города Краснодар и всегда сообщаем об этом Вам, давая развёрнутый комментарий по поводу всего: начиная от интерьера, заканчивая едой и её качеством. Основа нашей философии — страсть к
              открытию чего-то нового и необычного. Мы предлагаем Вам самый различные форматы еды и заведений на любой вкус.</p><a className="btn btn-primary" role="button" style={{borderRadius: '32px', color: '#1b1b1b', background: 'rgb(255,255,255)', borderWidth: '2px', borderTopColor: '#1b1b1b', borderRightColor: '#1b1b1b', borderBottomColor: '#1b1b1b', borderLeftColor: '#1b1b1b', padding: '6px', fontSize: '22px', fontFamily: 'Roboto, sans-serif', width: '225px'}} href="#">Оцените сами!</a></div>
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{background: 'url("assets/img/Screenshot_4.png")'}}><span /></div>
              <div className="col-lg-6 my-auto order-lg-1 showcase-text">
                <h1 style={{fontFamily: 'Roboto, sans-serif'}}>Контент</h1>
                <p style={{fontFamily: 'Roboto, sans-serif'}}>Контент по какому-то кафе. Это широкое поле!<br />Контент по какому-то кафе.&nbsp;Это широкое поле!<br />Контент по какому-то кафе.&nbsp;<br />Контент по какому-то кафе.&nbsp;<br />Контент по какому-то кафе.&nbsp;<br />Контент по какому-то кафе.&nbsp;Это
                  широкое поле! ЭТО ШИРОКОЕ ПОЛЕ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!<br />Контент по какому-то кафе.&nbsp;<br />Контент по какому-то кафе.&nbsp;<br />Контент по какому-то кафе.&nbsp;<br />Контент по какому-то кафе.&nbsp;Это
                  широкое поле!<br />Контент по какому-то кафе. Это широкое поле! ЭТО ШИРОКОЕ ПОЛЕ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!<br /></p><a className="btn btn-primary" role="button" style={{borderRadius: '32px', color: '#1b1b1b', background: 'rgb(255,255,255)', borderWidth: '2px', borderTopColor: '#1b1b1b', borderRightColor: '#1b1b1b', borderBottomColor: '#1b1b1b', borderLeftColor: '#1b1b1b', padding: '6px', fontSize: '19px', fontFamily: 'Roboto, sans-serif', width: '225px'}} href="#">Страница заведения 1</a></div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6 text-white showcase-img" style={{background: 'url("assets/img/Screenshot_6.png") center'}}><span /></div>
              <div className="col-lg-6 my-auto order-lg-1 showcase-text">
                <h1 className="text-right" style={{fontFamily: 'Roboto, sans-serif'}}>Контент</h1>
                <p className="text-right" style={{fontFamily: 'Roboto, sans-serif'}}>Тут можно подправить размер фото.<br />Контент по какому-то кафе.&nbsp;<br />Контент по какому-то кафе.&nbsp;<br />Контент по какому-то кафе.&nbsp;<br />Контент по какому-то кафе.&nbsp;&nbsp;Это широкое поле!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Это
                  широкое поле!<br />Контент по какому-то кафе.&nbsp;<br />Контент по какому-то кафе.&nbsp;<br />Контент по какому-то кафе.&nbsp;<br />Контент по какому-то кафе.&nbsp;<br />Контент по какому-то кафе.&nbsp;Это широкое поле!<br />Контент по какому-то
                  кафе.&nbsp;<br />&nbsp;Это широкое поле!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Это широкое поле! Контент по какому-то кафе.&nbsp;<br /></p><a className="btn btn-primary text-center" role="button" style={{borderRadius: '32px', color: '#1b1b1b', background: 'rgb(255,255,255)', borderWidth: '2px', borderTopColor: '#1b1b1b', borderRightColor: '#1b1b1b', borderBottomColor: '#1b1b1b', borderLeftColor: '#1b1b1b', padding: '6px', fontSize: '19px', fontFamily: 'Roboto, sans-serif', width: '225px'}} href="#">Страница заведения 2</a></div>
            </div>
          </div>
        </section>
        <section className="testimonials text-center bg-light" style={{paddingTop: '75px'}}>
          <div className="container">
            <h1 className="mb-5" style={{fontFamily: 'Roboto, sans-serif'}}>Отзывы</h1>
            <p style={{width: '50%', fontFamily: 'Roboto, sans-serif', fontSize: '24px', marginBottom: '5%', marginTop: '-3%'}}>Мы любим делиться впечатлениями и реальными отзывами. Присоединяйтесь!</p>
            <div className="row">
              <div className="col-lg-4">
                <div className="mx-auto testimonial-item mb-5 mb-lg-0"><img className="rounded-circle img-fluid mb-3" src="assets/img/face1.jpg" />
                  <h5 style={{fontFamily: 'Roboto, sans-serif'}}><strong>Анна1994</strong></h5>
                  <p className="font-weight-light mb-0" style={{fontFamily: 'Roboto, sans-serif'}}>Мне давно нужен был отдых. Местом я выбрала Краснодар. Один мой друг посоветовал Birdie для поиска новых ощущений. Я была в полном восторге от своей поездки, это был лучший уикэнд. Я надеюсь на скорое возвращение в любимые места.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mx-auto testimonial-item mb-5 mb-lg-0"><img className="rounded-circle img-fluid mb-3" src="assets/img/Face2.jpg" />
                  <h5>Алек Сакисян</h5>
                  <p className="font-weight-light mb-0">Спасибо команде сайта за новые возможности. Я живу в Краснодаре уже более 10 лет, но был слеп и не заходил в эти маленькие закутки на главных улицах. Birdie открыл для меня мир вкусной еды, когда я уже совсем потерял надежду на
                    вкусное питание в данном городе.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mx-auto testimonial-item mb-5 mb-lg-0"><img className="rounded-circle img-fluid mb-3" src="assets/img/face1.jpg" />
                  <h5>CoffeePro</h5>
                  <p className="font-weight-light mb-0">Я домашний бариста, который всегда мечтал о месте, в которое могу заходить за отличным кофе перед работой в офисе. Birdie дал мне такую замечательную возможность.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div />
        <div className="register-photo" style={{background: 'rgb(255,255,255)'}}>
          <div className="form-container">
            <div className="image-holder" />
            <form method="post">
              <h2 className="text-center">Регистрируйся!</h2>
              <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
              <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Пароль" /></div>
              <div className="form-group"><input type="nickname" className="form-control" name="nickname" placeholder="Имя" /></div>
              <div className="form-group"><button className="btn btn-primary btn-block" type="submit" style={{background: '#cc8f52', borderRadius: '24px'}}>Регистрация</button></div>
            </form>
          </div>
        </div>
        <div className="footer-dark" style={{background: '#1b1b1b'}}>
          <div className="col">
            <h5 style={{fontFamily: 'Roboto, sans-serif', textAlign: 'center'}}>КОНТАКТНАЯ ИНФОРМАЦИЯ</h5>
            <p style={{textAlign: 'center', fontFamily: 'Roboto, sans-serif'}}>Тут контактная информация</p>
          </div>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col item social"><a href="#"><i className="icon ion-social-facebook" /></a><a href="#"><i className="icon ion-social-instagram" /></a></div>
              </div>
              <p className="copyright">Birdie Krasnodar © 2020</p>
            </div>
          </footer>
        </div>
      </div>
    );
  };

export default MainPage;
