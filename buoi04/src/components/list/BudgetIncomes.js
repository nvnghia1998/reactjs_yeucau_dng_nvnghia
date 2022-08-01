import Item from "./Item";

function BudgetIncomes({ listData }) {
  return (
    <>
      <div className="income">
        <h2 className="icome__title">Income</h2>
        <div className="income__list" id="list-incomes">
          {listData.map(item => <Item data={item} key={item.id} />)}
        </div>
      </div>

    </>
  );
}

export default BudgetIncomes;