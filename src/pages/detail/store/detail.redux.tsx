const GET_DETAIL_DATA_SUCCESS = 'GET_DETAIL_DATA_SUCCESS';
export const GET_DETAIL_DATA = 'GET_DETAIL_DATA';

interface DetailStates {
  title: string;
  content: string;
}

const initState = {
  title: '',
  content: ''
};

export const detailReducer = (state: DetailStates = initState, action: any) => {
  switch (action.type) {
    case GET_DETAIL_DATA_SUCCESS:
      return { ...state, title: action.title, content: action.content };

    default:
      return state;
  }
};

export const getDetailSuccess = (data: DetailStates) => {
  return {
    type: GET_DETAIL_DATA_SUCCESS,
    title: data.title,
    content: data.content
  };
};

export const getDetailData = (id: string) => {
  return {
    type: GET_DETAIL_DATA,
    id: id
  };
};
