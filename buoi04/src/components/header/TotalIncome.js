import { formatStringAmount } from '../../helper.js'
function TotalIncome({amount}) {
  return (
    <>
      <div className="budget__income clearfix">
        <div className="budget__income--text">Incomes</div>
        <div className="right" id="budget__income">
          <div className="budget__income--value">{formatStringAmount(amount)}</div>
          <div className="budget__income--percentage">&nbsp;</div>
        </div>
      </div>
    </>
  );
}

export default TotalIncome;