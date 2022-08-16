import { ACT_FETCH_ARTICLE_LATEST, ACT_FETCH_ARTICLE_POPULAR, ACT_FETCH_ARTICLE_GENERAL} from "./actions";

const intState = {
  articleLatest: [],
  articlePopular: [],
  articleGeneral: [],
  total:0
}

function reducer(postState = intState, action) {
  switch (action.type) {
    case ACT_FETCH_ARTICLE_LATEST:
      return {
        ...postState,
        articleLatest: action.payload.posts
      }
    case ACT_FETCH_ARTICLE_POPULAR:
      return {
        ...postState,
        articlePopular: action.payload.posts
      }
    case ACT_FETCH_ARTICLE_GENERAL:
      let newList = action.payload.posts ? postState.articleGeneral.concat(action.payload.posts) : postState.articleGeneral;
      console.log(action.payload.total);
      return {
        ...postState,
        articleGeneral:newList,
        total:action.payload.total
          
      }
    default:
      return postState;
  }
}

export default reducer;