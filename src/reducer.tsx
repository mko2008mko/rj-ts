import { headerReducer } from './components/head/store/head.redux';
import { combineReducers } from 'redux';
import { homeReducer } from './pages/home/store/home.redux';

export default combineReducers({ headerReducer, homeReducer });
