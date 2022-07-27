let listData = [
  {
    id: createUUID(),
    description: 'Chi tieu ngay 26/07',
    amount: -100000
  },
  {
    id: createUUID(),
    description: 'Thu nhap thang 06',
    amount: 3000000
  },
  {
    id: createUUID(),
    description: 'Thu nhap thang 07',
    amount: 2000000
  },
  {
    id: createUUID(),
    description: 'Chi tieu ngay 27/07',
    amount: -150000
  },
];
let budgetIncome = document.querySelector('#list-incomes');
let budgetExpenses = document.querySelector('#list-expenses');
function createUUID() {
  let dt = new Date().getTime();
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}
renderList();
function renderList() {
  let listIcome = '';
  let listExpen = '';
  listData.forEach((item) => {
    if (item.amount > 0) {
      listIcome +=
        `<div class="item clearfix">
        <div class="item__description">${formatCurency(item.description)}</div>
        <div class="right clearfix">
          <div class="item__value">+ ${item.amount}</div>
          <div class="item__delete">
            <button class="item__delete--btn">
              <i class="ion-ios-close-outline"></i>
            </button>
          </div>
        </div>
      </div>`
    } else {
      let percent = calculatorPercent(item.amount);
      listExpen +=
        `<div class="item clearfix">
        <div class="item__description">${item.description}</div>
        <div class="right clearfix">
          <div class="item__value">${formatCurency(item.amount)}</div>
          <div class="item__percentage">${percent}%</div>
          <div class="item__delete">
            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
          </div>
        </div>
      </div>`
    }
  })
  budgetIncome.innerHTML = listIcome;
  budgetExpenses.innerHTML = listExpen;
}

function calculatorPercent(number) {
  let totalExpen = 0;
  listData.map(item => {
    totalExpen += item.amount
  })
  let numPercent = Number.parseFloat((number/totalExpen)*-100).toFixed(2);
  return Math.round(numPercent);
}

function formatCurency(number){
  let num = parseFloat(number);
  return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
console.log(formatCurency(2000));