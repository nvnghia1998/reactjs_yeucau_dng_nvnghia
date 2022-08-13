import cateService from "../../services/category";
import {handleDateCategory} from "../../helpers";
export const ACT_GET_LIST_CATEGORY = 'ACT_GET_LIST_CATEGORY';

export function actGetListCategory(categories) {
  return {
    type: ACT_GET_LIST_CATEGORY,
    payload: {
      categories
    }
  }
}

export function actGetListCategoryAsync() {
  return async (dispatch) => {
    try {
      const response = await cateService.getListCate();
      const categories = handleDateCategory(response.data);
      dispatch(actGetListCategory(categories));
    } catch (error) {
      
    }
  }
}