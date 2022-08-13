import { api } from './api';

const postService = {
  getList(params) {
    return api.call().get('/wp/v2/posts', {
      params: {
        ...params,
        lang: 'vi'
      }
    });
  },

  getArticleLatest() {
    return postService.getList({ 
      per_page: 3, 
      page: 1 
    });
  },

  getArticlePopular() {
    return postService.getList({ 
      per_page: 3, 
      page: 1,
      orderby:'post_views'
    });
  },

  getArticleGeneral(currentPage) {
    return postService.getList({ 
      per_page: 2, 
      page: currentPage 
    });
  }
}

export default postService;