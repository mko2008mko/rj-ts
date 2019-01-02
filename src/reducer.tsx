import { headerReducer } from './components/head/store/head.redux';
import { combineReducers } from 'redux';
import { homeReducer } from './pages/home/store/home.redux';
import { loginReducer } from './pages/login/store/login.redux';
import { detailReducer } from './pages/detail/store/detail.redux';
import { rwriterReducer } from './pages/recommendWriter/store/rwriter.redux';

export default combineReducers({ headerReducer, homeReducer, loginReducer, detailReducer, rwriterReducer });
