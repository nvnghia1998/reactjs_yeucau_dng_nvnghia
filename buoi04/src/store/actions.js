export const ADD_BUDGET = 'ADD_BUDGET';
export const DELETE_BUDGET = 'DELETE_BUDGET';
export const CHANGE_BORDER_STYLE = 'CHANGE_BORDER_STYLE';

export function addBudget(budget) {
  return {
    type: ADD_BUDGET,
    payload: budget
  }

}

export function deleteBudget(id) {
  return {
    type: DELETE_BUDGET,
    payload:id
  }
}