import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import cls from 'classnames'
import * as actions from '../../store/actions'

function BudgetForm() {
  const budget = {
    id: '',
    description: '',
    amount: ''
  }
  const dispatch = useDispatch()
  const [newBudget, setNewBudget] = useState(budget);
  const [budgetType, setBudgetType] = useState("inc");
  let classBorderInput = cls('', {
    ' red-focus': budgetType === 'exp',
  });
  let classBorderBtnAdd = cls('', {
    ' red': budgetType === 'exp',
  });

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
  }

  function add() {
    if (!newBudget.description) {
      alert('Mô tả không được trống');
      return;
    }

    if (!newBudget.amount) {
      alert('Số tiền phải lớn hơn 0');
      return;
    }

    if (budgetType === 'exp') {
      setNewBudget({
        ...newBudget,
        amount: newBudget.amount *= -1
      }
      )
    }
    dispatch(actions.addBudget({ ...newBudget, id: uuidv4() }));
    setNewBudget(budget)
  }
  return (
    <>
      <div className="add">
        <div className="add__container">
          <select className={'add__type' + classBorderInput} value={budgetType} onChange={handleChangeType}>
            <option value="inc">+</option>
            <option value="exp">-</option>
          </select>
          <input type="text" name="description" value={newBudget.description} className={'add__description' + classBorderInput} onChange={handleChangInput} placeholder="Add description" />
          <input type="number" name="amount" value={newBudget.amount < 0 ? newBudget.amount * -1 : newBudget.amount} className={'add__value' + classBorderInput} onChange={handleChangInput} placeholder="Value" />
          <button className="add__btn"><i className={'ion-ios-checkmark-outline' + classBorderBtnAdd} onClick={add} /></button>
        </div>
      </div>
    </>
  );
}

export default BudgetForm;