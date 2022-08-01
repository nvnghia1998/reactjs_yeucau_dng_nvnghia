import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import * as actions from '../../store/actions'

function BudgetForm() {
  const dispatch = useDispatch()
  const [newBudget, setNewBudget] = useState({
    id:  uuidv4(),
    description: '',
    amount: ''
  });
  const [budgetType, setBudgetType] = useState("inc");

  function handleChangInput(e) {
    let name = e.target.name;
    if (name === "description") {
      setNewBudget({ ...newBudget, [name]: e.target.value })
    }

    if (name === "amount") {
      setNewBudget({ ...newBudget, [name]: parseInt(e.target.value) })
    }
  }
  function handleChangeType(e) {
    const type = e.target.value;
    setBudgetType(type);

    if (budgetType === 'exp') {
      setNewBudget({
        ...newBudget,
        amount: newBudget.amount * -1
      })
    } else {
      setNewBudget({
        ...newBudget
      })
    }
  }

  function add(){
    dispatch(actions.addBudget(newBudget))
  }
  return (
    <>
      <div className="add">
        <div className="add__container">
          <select className="add__type" value={budgetType} onChange={handleChangeType}>
            <option value="inc">+</option>
            <option value="exp">-</option>
          </select>
          <input type="text" name="description" className="add__description" onChange={handleChangInput} placeholder="Add description" />
          <input type="number" name="amount" className="add__value" onChange={handleChangInput} placeholder="Value" />
          <button className="add__btn"><i className="ion-ios-checkmark-outline" onClick={add} /></button>
        </div>
      </div>
    </>
  );
}

export default BudgetForm;