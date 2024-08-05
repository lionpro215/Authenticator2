import BtnSign from "../../components/btnSign/btnSign";
import "./authenticator.css";

function Authenticator() {
  return (
    <div className="auth">
      {/* <div className="head">
        <h1>Authenticator</h1>
        <h3>@Lionpro</h3>
      </div> */}
      <div className="bull_1"></div>
      <div className="bull_2"></div>
      <div className="bull_3"></div>
      <div className="bull_4"></div>
      <div className="auth-block-form">
        <h2>Create Account</h2>
        <BtnSign textBtn="Google" />
        <BtnSign textBtn="Facebook" />
        <div className="or">
          <span></span>OR<span></span>
        </div>
        <form action="" method="">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="submit" value="Creat Account" />
          <h4>
            Already have an account ? <a href="#">Login</a>
          </h4>
        </form>
      </div>
      <p className="foot">Copyright © 2024</p>
    </div>
  );
}

export default Authenticator;
