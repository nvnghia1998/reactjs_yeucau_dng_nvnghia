import {ADD_BUDGET, DELETE_BUDGET} from './actions';
const initState = {
  listDataIncome:JSON.parse(localStorage.getItem('budgets')) || []
};

function reducer(state = initState, action) {
  // console.log('state', state);
  // console.log('action', action);
  switch (action.type) {
    case ADD_BUDGET:
      let list = [...state.listDataIncome]
      list.unshift({
        id:action.payload.id,
        description:action.payload.description,
        amount:action.payload.amount,
      })
      localStorage.setItem('budgets', JSON.stringify(list));
      return {
        ...state,
        listDataIncome:list
      }
    case DELETE_BUDGET:
      let id = action.payload;
      let newList = [...state.listDataIncome].filter(item => item.id !== id);
      localStorage.setItem('budgets', JSON.stringify(newList));
      return {
        ...state,
        listDataIncome: newList
      }
    default:
      return {...state}
  }
}

export default reducer;