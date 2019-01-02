
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const UPDATE_REDIRECT = 'UPDATE_REDIRECT';
export const GET_LOGIN = 'GET_LOGIN';

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
    default:
      return state;
  }
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
  // return (dispatch: any) => {
  //   axios
  //     .get(`/api/login.json?act=${act}&pwd=${pwd}`)
  //     // axios.get(`/api/login.json`)
  //     .then(res => {
  //       if (res.data.success) {
  //         dispatch(loginSuccess());
  //       }
  //     })
  //     .catch(() => {
  //       // console.log('error')
  //     });
  // };
};

export const logOut = () => {
  return { type: LOGOUT_SUCCESS };
};

export const updateRedirect = (path: string) => {
  return { type: UPDATE_REDIRECT, path: path };
};
