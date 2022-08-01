import Item from "./Item";

function BudgetExpenses({ listData, total }) {
  return (
    <>
      <div className="expenses">
        <h2 className="expenses__title">Expenses</h2>
        <div className="expenses__list" id="list-expenses">
        {listData.map(item => <Item data={item} key={item.id} total ={total}/>)}
        </div>
      </div>
    </>
  );
}

export default BudgetExpenses;