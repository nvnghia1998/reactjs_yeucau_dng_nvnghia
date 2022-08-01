import { formatStringAmount, formatPercentAmount } from '../../helper.js'
import { useDispatch } from 'react-redux'
import * as actions from '../../store/actions'
function Item({ data, total }) {
  const {id,description, amount} = data;
  const dispatch = useDispatch();

  function removeBudget(){
    dispatch(actions.deleteBudget(id));
  }
  
  return (
    <>
      <div className="item clearfix">
        <div className="item__description">{description}</div>
        <div className="right clearfix">
          <div className="item__value">{formatStringAmount(amount)}</div>
          {
            data.amount < 0 && <div className="item__percentage">{formatPercentAmount(amount, total)}</div>
          }
          <div className="item__delete">
            <button className="item__delete--btn" onClick={removeBudget}><i className="ion-ios-close-outline" /></button>
          </div>
        </div>
      </div>

    </>
  );
}

export default Item;