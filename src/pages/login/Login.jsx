import "./login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Giriş</h1>
          <input type="email" placeholder="Email ya da telefon numarası" />
          <input type="password" placeholder="Şifre" />
          <button className="loginButton">Oturum aç</button>
          <span>
            Netflix'te yeni misiniz? <b>Şimdi kaydolun.</b>
          </span>
          <small>
            Bu sayfa, bir bot olmadığınızdan emin olmak için Google reCAPTCHA
            tarafından korunmaktadır. <b>Daha fazla bilgi edinin</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
