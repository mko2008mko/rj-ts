
const SEARCH_FOCUS = 'header/SEARCH_FOCUS';
const SEARCH_BLUR = 'header/SEARCH_BLUR';
const GET_HEADER_LIST = 'header/GET_HEADER_LIST';
const MOUSE_IN = 'header/MOUSE_IN';
const MOUSE_OUT = 'header/MOUSE_OUT';
const CHANGE_PAGE = 'header/CHANGE_PAGE';
export const GET_SEARCH_KEYWORD_LIST = 'header/GET_SEARCH_KEYWORD_LIST';

export interface IHeadState {
  focused: boolean;
  list: string[];
  page: number;
  totalPage: number;
  mouseIn: boolean;
}

export const headerReducer = (
  state: IHeadState = { focused: false, page: 1, list: [], totalPage: 1, mouseIn: false },
  action: any
): IHeadState => {
  switch (action.type) {
    case SEARCH_FOCUS:
      // return { focused: true };
      return { ...state, focused: true };
    case SEARCH_BLUR:
      // return { focused: false };
      return { ...state, focused: false };
    case GET_HEADER_LIST:
      return { ...state, list: action.data, totalPage: action.totalPage };
    // return state.set('list', action.data).set('totalPage', action.totalPage);
    case MOUSE_IN:
      return { ...state, mouseIn: true };
    case MOUSE_OUT:
      return { ...state, mouseIn: false };
    case CHANGE_PAGE:
      return { ...state, page: state.page >= state.totalPage ? 1 : state.page + 1 };
    default:
      return state;
  }
};
export const searchFocus = () => {
  return { type: SEARCH_FOCUS };
};

export const searchBlur = () => {
  return { type: SEARCH_BLUR };
};

export const getListSuccess = (data: string[]) => {
  return { type: GET_HEADER_LIST, data, totalPage: Math.ceil(data.length / 10) };
};

export const getList = () => {
  return {
    type: GET_SEARCH_KEYWORD_LIST
  };
};

export const mouseInChange = () => {
  return { type: MOUSE_IN };
};

export const mouseOutChange = () => {
  return { type: MOUSE_OUT };
};

export const changPage = () => {
  return { type: CHANGE_PAGE };
};
