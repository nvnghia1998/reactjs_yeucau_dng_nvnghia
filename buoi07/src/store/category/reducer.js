import {ACT_GET_LIST_CATEGORY} from "./actions";

const intState = {
  listCategory: [0]
}

function reducer(cateState = intState, action) {
  switch (action.type) {
    case ACT_GET_LIST_CATEGORY:
      return {
        ...cateState,
        listCategory: action.payload.categories
      }
    default:
      return cateState;
  }
}

export default reducer;