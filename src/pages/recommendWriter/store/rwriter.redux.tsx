export const GET_RWRITER_DATA = 'GET_RWRITER_DATA';
const GET_RWRITER_DATA_SUCCESS='GET_RWRITER_DATA_SUCCESS';

export interface rwriter {
  id: number;
  imgUrl: string;
  name: string;
  desc: string;
  new: string[];
}

interface rwriterStates {
  rwriterList: Array<rwriter>;
  page: number;
}
const initState = {
  rwriterList: [],
  page: 1
};

export const rwriterReducer = (state: rwriterStates = initState, action: any) => {
  switch (action.type) {
    case GET_RWRITER_DATA_SUCCESS:
      return { ...state, rwriterList: state.rwriterList.concat(action.rwriterList), page: action.page };
    //   return state.set('rwriterList', state.get('rwriterList').concat(action.rwriterList)).set('page', action.page);
    default:
      return state;
  }
};

export const getrwriterDataSuccess = (result:Array<rwriter>, page:number) => {
  return {
    type: GET_RWRITER_DATA_SUCCESS,
    rwriterList: result,
    page: page + 1
  };
};

export const getRWriterData = (page:number )=> {
    return {
        type:GET_RWRITER_DATA,
        page:page
    }
//   return dispatch => {
//     axios
//       .get(`api/recommendWriter.json?page=${page}`)
//       .then(res => {
//         dispatch(getrwriterDataSuccess(res.data.data, page));
//       })
//       .catch(() => {
//         console.log('error');
//       });
//   };
};
