import { ACT_GET_LIST_MENU } from "./actions";

const intState = {
    listMenu:[]
}

function reducer(postState = intState, action) {
  switch (action.type) {
    case ACT_GET_LIST_MENU:
      return {
        listMenu: action.payload.listMenu
      }
    default:
      return postState;
  }
}

export default reducer;