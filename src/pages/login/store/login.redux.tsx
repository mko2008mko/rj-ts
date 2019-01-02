const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const UPDATE_REDIRECT = 'UPDATE_REDIRECT';
export const GET_LOGIN = 'GET_LOGIN';
const GET_LOGIN_FAILD = 'GET_LOGIN_FAILD';

interface LoginState {
  isLogin: boolean;
  redirectTo: string;
}

// const initState = fromJS({
//   isLogin: false,
//   redirectTo: '/'
// });

export const loginReducer = (state: LoginState = { isLogin: false, redirectTo: '/' }, action: any) => {
  switch (action.type) {
    // case LOGIN_SUCCESS:
    //   return state.set('isLogin', true);
    // case LOGOUT_SUCCESS:
    //   return state.set('isLogin', false);
    // case UPDATE_REDIRECT:
    //   return state.set('redirectTo', action.path);

    case LOGIN_SUCCESS:
      return { ...state, isLogin: true };
    case LOGOUT_SUCCESS:
      return { ...state, isLogin: false };
    case UPDATE_REDIRECT:
      return { ...state, redirectTo: action.path };
    case GET_LOGIN_FAILD:
      return { ...state, isLogin: false };
    default:
      return state;
  }
};

export const loginFailed = () => {
  return {
    type: GET_LOGIN_FAILD
  };
};

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS
  };
};

export const login = (act: string, pwd: string) => {
  return {
    type: GET_LOGIN,
    act: act,
    pwd: pwd
  };
};

export const logOut = () => {
  return { type: LOGOUT_SUCCESS };
};

export const updateRedirect = (path: string) => {
  return { type: UPDATE_REDIRECT, path: path };
};
