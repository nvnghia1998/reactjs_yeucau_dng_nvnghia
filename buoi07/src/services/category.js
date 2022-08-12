import { api } from './api';
const cateService = {
  getListCate() {
    return api.call().get('/wp/v2/categories', {
      params: {
        per_page: 100,
        page: 1,
        lang: 'vi'
      }
    });
  }
}

export default cateService