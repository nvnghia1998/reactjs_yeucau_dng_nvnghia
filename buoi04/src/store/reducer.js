import { v4 as uuidv4 } from 'uuid';
import {ADD_BUDGET, DELETE_BUDGET} from './actions';
const initState = {
  listDataIncome: [
    {
      id: uuidv4(),
      description: 'Chi tieu ngay 26/07',
      amount: -100000
    },
    {
      id: uuidv4(),
      description: 'Thu nhap thang 06',
      amount: 3000000
    },
    {
      id: uuidv4(),
      description: 'Thu nhap thang 07',
      amount: 2000000
    },
    {
      id: uuidv4(),
      description: 'Chi tieu ngay 27/07',
      amount: -150000
    }
  ]
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
      return {
        ...state,
        listDataIncome:list
      }
    case DELETE_BUDGET:
      let id = action.payload;
      console.log(action.payload);
      let newList = [...state.listDataIncome].filter(item => item.id !== id)
      return {
        ...state,
        listDataIncome: newList
      }
    default:
      return {...state}
  }
}

export default reducer;