import { mappingPostData } from "../../helpers";
import postService from "../../services/post";


// Action Type
export const ACT_FETCH_ARTICLE_LATEST = 'ACT_FETCH_ARTICLE_LATEST';
export const ACT_FETCH_ARTICLE_POPULAR = 'ACT_FETCH_ARTICLE_POPULAR';
export const ACT_FETCH_ARTICLE_GENERAL = 'ACT_FETCH_ARTICLE_GENERAL';


// Action
export function actFetchArticleLatest(posts) {
  return {
    type: ACT_FETCH_ARTICLE_LATEST,
    payload: {
      posts
    }
  }
}

export function actFetchArticlePopular(posts) {
  return {
    type: ACT_FETCH_ARTICLE_POPULAR,
    payload: {
      posts
    }
  }
}

export function actFetchArticleGeneral(posts,total) {
  return {
    type: ACT_FETCH_ARTICLE_GENERAL,
    payload: {
      posts,
      total
    }
  }
}

// Action Async
export function actFetchArticleLatestAsync() {
  return async (dispatch) => {
    try {
      const response = await postService.getArticleLatest();
      const posts = response.data.map(mappingPostData);
      dispatch(actFetchArticleLatest(posts));
    } catch (err) {
      // TODO
    }
  }
}

// Action Async
export function actFetchArticlePopularAsync() {
  return async (dispatch) => {
    try {
      const response = await postService.getArticlePopular();
      const posts = response.data.map(mappingPostData);
      dispatch(actFetchArticlePopular(posts));
    } catch (err) {
      // TODO
    }
  }
}

export function actFetchArticleGeneralAsync(currentPage) {
  return async (dispatch) => {
    try {
      const response = await postService.getArticleGeneral(currentPage);
      const total = response.headers["x-wp-total"];
      const posts = response.data.map(mappingPostData);
      
        dispatch(actFetchArticleGeneral(posts,total));
    } catch (err) {
      dispatch(actFetchArticleGeneral(null));
    }
  }
}




