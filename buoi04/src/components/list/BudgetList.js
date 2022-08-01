import BudgetExpenses from "./BudgetExpenses";
import BudgetIncomes from "./BudgetIncomes";
import { useSelector } from 'react-redux';
import { calTotalAmount } from '../../helper.js'

function BudgetList() {
  const listData = useSelector(state => state.listDataIncome)
  let listIncomes = listData.filter(dataItem => dataItem.amount > 0);
  let listExpenses = listData.filter(dataItem => dataItem.amount < 0);
  const totalAmountIncome = calTotalAmount(listIncomes)
  const totalAmountExpense = calTotalAmount(listExpenses)

  const totalAmount = totalAmountIncome + totalAmountExpense;
  return (
    <>
      <div className="container clearfix">
        <BudgetIncomes listData={listIncomes}/>
        <BudgetExpenses listData={listExpenses} total={totalAmount} />
      </div>
    </>
  );
}

export default BudgetList;