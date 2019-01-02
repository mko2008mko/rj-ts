import * as React from 'react';
import './style.less';
import { connect } from 'react-redux';
import { login } from './store/login.redux';
import { Redirect } from 'react-router-dom';

interface LoginProps {
  isLogin: any;
  redirectTo: any;
  login: (act: string, pwd: string) => void;
}

interface LoginStates {
  act: string;
  pwd: string;
}

class Login extends React.Component<LoginProps, LoginStates> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      act: '',
      pwd: ''
    };
  }

  handleAccuntChange = (e: any) => {
    const value = e.target.value;
    this.setState({
      act: value
    });
  };

  handlePwdChange = (e: any) => {
    const value = e.target.value;
    this.setState({
      pwd: value
    });
  };

  loginClick = () => {
    this.props.login(this.state.act, this.state.pwd);
  };

  render() {
    return this.props.isLogin ? (
      <Redirect to={this.props.redirectTo} />
    ) : (
      <div className="login-wrapper">
        <div className="login-box">
          <input placeholder="账号" value={this.state.act} onChange={this.handleAccuntChange} />
          <input placeholder="密码" value={this.state.pwd} onChange={this.handlePwdChange} type="password" />
          <div onClick={this.loginClick} className="login-btn">
            登陆
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProp = (state: any) => {
  return {
    isLogin: state.loginReducer.isLogin,
    redirectTo: state.loginReducer.redirectTo
  };
};

const mapDispathToProps = {
  login
};

export default connect(
  mapStateToProp,
  mapDispathToProps
)(Login);
