import React from "react";
import { Link } from "react-router-dom";
import Footer from './../../Component/Footer/Footer'
import TopBar from './../../Component/TopBar/TopBar'
import NavBar from './../../Component/NavBar/NavBar'

import "./Register.css";
import Input from "../../Component/Form/Input";
import Button from "../../Component/Form/Button";

export default function Register() {

  const registerNewUser = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <TopBar />
      <NavBar />

      <section className="login-register">
        <div className="login register-form">
          <span className="login__title">ساخت حساب کاربری</span>
          <span className="login__subtitle">خوشحالیم قراره به جمع ما بپیوندی</span>
          <div className="login__new-member">
            <span className="login__new-member-text">قبلا ثبت‌نام کرده‌اید؟ </span>
            <Link className="login__new-member-link" to="/login">
              وارد شوید
            </Link>
          </div>
          <form action="#" className="login-form">
            <div className="login-form__username">
              <Input
                className="login-form__username-input"
                type="text"
                placeholder="نام کاربری"
                element='input'
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__password">
              <Input
                className="login-form__password-input"
                type="email"
                placeholder="آدرس ایمیل"
                element='input'
              />
              <i className="login-form__password-icon fa fa-envelope"></i>
            </div>
            <div className="login-form__password">
              <Input
                className="login-form__password-input"
                type="password"
                placeholder="آدرس ایمیل"
                element='input'
              />
              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <Button className="login-form__btn" type="submit" onClick={registerNewUser} disabled={false}>
              <i className="login-form__btn-icon fa fa-user-plus"></i>
              <span className="login-form__btn-text">عضویت</span>
            </Button>
          </form>
          <div className="login__des">
            <span className="login__des-title">سلام کاربر محترم:</span>
            <ul className="login__des-list">
              <li className="login__des-item">
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li className="login__des-item">
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li className="login__des-item">
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
