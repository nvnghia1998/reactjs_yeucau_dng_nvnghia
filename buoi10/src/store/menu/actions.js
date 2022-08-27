import {mappingMenuData } from "../../helpers";
import menuService from "../../services/menu";

// Action Type
export const ACT_GET_LIST_MENU = 'ACT_GET_LIST_MENU';

export function actFetchListMenu(listMenu){
    return {
        type: ACT_GET_LIST_MENU,
        payload: {
            listMenu
        }
    }
}




export function actFetchListMenuAsync() {
    return async (dispatch) => {
      try {
        const response = await menuService.getListMenu();
        const menus = response.data.items.map(mappingMenuData);
        dispatch(actFetchListMenu(menus))
      } catch (err) {
        console.log(err)
      }
    }
  }
