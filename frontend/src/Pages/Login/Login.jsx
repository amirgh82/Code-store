import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import Footer from './../../Component/Footer/Footer'
import TopBar from './../../Component/TopBar/TopBar'
import NavBar from './../../Component/NavBar/NavBar'
import "./Login.css";
import Input from "../../Component/Form/Input";
import Button from "../../Component/Form/Button";
import { useForm } from "../../hooks/useForm";
import { requiredValidator, minValidator, maxValidator, emailValidator } from '../../validators/rules'
import AuthContext from "../../context/authContext";
import swal from 'sweetalert2'

export default function Login() {

  const authContext = useContext(AuthContext)

  const navigate = useNavigate()

  const [formState, onInputHandler] = useForm({
    username: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    }
  }, false)

  const userLogin = (event) => {
    event.preventDefault()

    const userData = {
      identifier: formState.inputs.username.value,
      password: formState.inputs.password.value
    }

    fetch(`http://localhost:4000/v1/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    }).then(res => {
      if (!res.ok) {
        return res.text().then(text => {
          throw new Error(text)
        })
      } else {
        res.json()
      }
    }).then(result => {
      swal.fire({
        title: "با موفقیت لاگین کردید",
        icon: 'success',
        confirmButtonText: 'ورود به پنل',
      }).then(value =>{
        navigate('/')
      })
      authContext.login({}, result.accesstoken)
    })
      .catch(err => {
        swal.fire({
          title: "کاربر یافت نشد.",
          icon: 'error',
          confirmButtonText: 'تلاش دوباره',
        })
      })

  }



  return (
    <>
      <TopBar />
      <NavBar />

      <section className="login-register">
        <div className="login">
          <span className="login__title">ورود به حساب کاربری</span>
          <span className="login__subtitle">
            خوشحالیم دوباره میبینیمت دوست عزیز :)
          </span>
          <div className="login__new-member">
            <span className="login__new-member-text">کاربر جدید هستید؟</span>
            <Link className="login__new-member-link" to="/register">
              ثبت نام
            </Link>
          </div>
          <form action="#" className="login-form">
            <div className="login-form__username">
              <Input
                className="login-form__username-input"
                type="text"
                id='username'
                placeholder="نام کاربری یا آدرس ایمیل"
                element='input'
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandler}
              />

              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__password">
              <Input
                className="login-form__password-input"
                type="password"
                id="password"
                placeholder="رمز عبور"
                element='input'
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18),
                ]}
                onInputHandler={onInputHandler}
              />
              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <Button
              className={`login-form__btn ${formState.isFormValid ? 'login-form__btn-success' : 'login-form__btn-error'}`}
              type="submit"
              onClick={userLogin}
              disabled={!formState.isFormValid}
            >
              <i className="login-form__btn-icon fas fa-sign-out-alt"></i>
              <span className="login-form__btn-text">ورود</span>
            </Button>
            <div className="login-form__password-setting">
              <label className="login-form__password-remember">
                <input className="login-form__password-checkbox" type="checkbox" />
                <span className="login-form__password-text">
                  مرا به خاطر داشته باش
                </span>
              </label>
              <label className="login-form__password-forget">
                <a className="login-form__password-forget-link" href="#">
                  رمز عبور را فراموش کرده اید؟
                </a>
              </label>
            </div>
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
