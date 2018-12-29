
import { Article, HomeState } from '../model';

const GET_HOME_DATA_SUCCESS = 'GET_HOME_DATA_SUCCESS';
const ADD_ARTICLE_LIST = 'ADD_ARTICLE_LIST';
const SCROLL_EVENT = 'SCROLL_EVENT';
const CHANGE_PAGE = 'CHANGE_PAGE';
export const GET_MORE_LIST = 'GET_MORE_LIST';
export const GET_HOME_DATA = 'GEt_HOME_DATA';

const initState = {
  topicList: [],
  articleList: [],
  recommendList: [],
  recommendWriter: [],
  page: 1,
  isShow: false,
  rwPage: 1,
  rwTotalPage: 1
};

export const homeReducer = (state: HomeState = initState, action: any) => {
  switch (action.type) {
    case GET_HOME_DATA_SUCCESS:
      return {
        ...state,
        topicList: action.topicList,
        articleList: action.articleList,
        recommendList: action.recommendList,
        recommendWriter: action.recommendWriter,
        rwTotalPage: action.rwTotalPage
      };
    case ADD_ARTICLE_LIST:
      return {
        ...state,
        articleList: state.articleList.concat(action.newArticleList),
        page: action.nextPage
      };

    case SCROLL_EVENT:
      return {
        ...state,
        isShow: action.isShow
      };
    case CHANGE_PAGE:
      return {
        ...state,
        rwPage: state.rwPage >= state.rwTotalPage ? 1 : state.rwPage + 1
      };
    default:
      return state;
  }
};

export const getHomeDataSuccess = (result: HomeState) => {
  return {
    type: GET_HOME_DATA_SUCCESS,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    recommendWriter: result.recommendWriter,
    rwTotalPage: Math.ceil(result.recommendWriter.length / 5)
  };
};

export const getHomeDate = () => {
  return {
    type: GET_HOME_DATA
  };

};

export const getMoreListSuccess = (result: Array<Article>, page: number) => {
  return {
    type: ADD_ARTICLE_LIST,
    newArticleList: result,
    nextPage: page + 1
  };
};

export const getMoreList = (page: number) => {
  return {
    type: GET_MORE_LIST,
    page: page
  };
};

export const backTopIsShow = (isshow: boolean) => {
  return {
    type: SCROLL_EVENT,
    isShow: isshow
  };
};

export const changePage = () => {
  return {
    type: CHANGE_PAGE
  };
};
