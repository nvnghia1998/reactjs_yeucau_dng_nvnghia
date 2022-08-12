import {ACT_GET_LIST_CATEGORY} from "./actions";

const intState = {
  listCategory: []
}

function reducer(cateState = intState, action) {
  switch (action.type) {
    case ACT_GET_LIST_CATEGORY:
      localStorage.setItem('categories', JSON.stringify(action.payload.categories))
      return {
        ...cateState,
        listCategory: action.payload.categories
      }
    default:
      return cateState;
  }
}

export default reducer;