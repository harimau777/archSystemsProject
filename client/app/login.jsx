import {login} from './state/actions.js';

const Login = ({handleLogin}) => {
  return (
    <div className="login">
      <h1>Login:</h1>
      <label>Username</label>
      <input type="text" name="username" />
      <label>Password</label>
      <input type="text" name="password" />
      <span className="button" onClick={handleLogin}>Login</span>
    </div>
  );
};

const handleLogin = (dispatch) => dispatch(login());

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: () => handleLogin(dispatch)
  }
}

const LoginContainer = ReactRedux.connect(null, mapDispatchToProps)(Login);

export {LoginContainer};
