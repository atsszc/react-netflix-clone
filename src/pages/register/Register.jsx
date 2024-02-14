import { useState, useRef } from "react";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton">Oturum aç</button>
        </div>
      </div>
      <div className="container">
        <h1>Sınırsız film, TV programı ve daha fazlası.</h1>
        <h2>İstediğiniz yerde izleyin. İstediğin zaman iptal edin.</h2>
        <p>
          İzlemeye hazır mısınız? Üyeliğinizi oluşturmak veya yeniden başlatmak
          için e-postanızı girin.
        </p>{" "}
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Email" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Haydi başlayalım
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="Şifre" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Başla
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
