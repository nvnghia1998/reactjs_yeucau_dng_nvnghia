import { ACT_GET_LIST_POST } from './actions';
const initState = {
  listPosts: []
};
function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_GET_LIST_POST:
      return {
        listPosts: action.payload.posts
      }
    default:
      return { ...state }
  }
}
export default reducer;