// Elements
const eleListIncomes = document.getElementById('list-incomes');
const eleListExpenses = document.getElementById('list-expenses');
const eleSelectType = document.querySelector('.add__type');
const inputDes = document.querySelector('.add__description');
const inputMoney = document.querySelector('.add__value');
const btnAdd = document.querySelector('.add__btn');
const budgetValue = document.querySelector('.budget__value');
const incomeMoney = document.querySelector('.budget__income--value');
const expendMoney = document.querySelector('.budget__expenses--value');
const expendPercent = document.querySelector('.budget__expenses--percentage');

// Data

let listIncomes = {};
let listExpenses = {};
let totalAmountIncome = 0;
let totalAmountExpense = 0;
let totalAmount = 0;
let listData = JSON.parse(localStorage.getItem('moneys')) || []
render(listData);

function render(data) {
  localStorage.setItem('moneys', JSON.stringify(data));
  listIncomes = listData.filter(dataItem => dataItem.amount > 0);
  listExpenses = listData.filter(dataItem => dataItem.amount < 0);
  totalAmountIncome = calTotalAmount(listIncomes);
  totalAmountExpense = calTotalAmount(listExpenses);
  totalAmount = calTotalAmount(listData);
  budgetValue.innerHTML = formatStringAmount(totalAmount);
  incomeMoney.innerHTML = formatStringAmount(totalAmountIncome);
  expendMoney.innerHTML = formatStringAmount(totalAmountExpense);
  expendPercent.innerHTML = formatPercentAmount(totalAmountExpense, totalAmountIncome);
  renderBudgetList();
}

// render component
function renderBudgetList() {
  eleListIncomes.innerHTML = listIncomes.map(item => renderBudgetItem(item, totalAmountExpense)).join('');
  eleListExpenses.innerHTML = listExpenses.map(item => renderBudgetItem(item, totalAmountIncome)).join('');
}

function renderBudgetItem(data, total) {
  const { id, amount, description } = data;
  const percent = amount < 0 ? `<div class="item__percentage">${formatPercentAmount(amount, total)}</div>` : '';
  return /* html */`
  <div class="item clearfix">
    <div class="item__description">${description}</div>
    <div class="right clearfix">
      <div class="item__value">${formatStringAmount(amount)}</div>
      ${percent}
      <div class="item__delete">
        <button class="item__delete--btn"><i class="ion-ios-close-outline" data-id=${id}></i></button>
      </div>
    </div>
  </div>
  `;
}

// Helpers
function createUUID() {
  let dt = new Date().getTime();
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}

function formatStringAmount(amount) {
  let sign = '+';
  let amountFormatted = amount;

  if (amount < 0) {
    sign = '-';
    amountFormatted = -1 * amount;
  }

  amountFormatted = new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(amountFormatted);

  return `${sign} ${amountFormatted}`;
}

function calTotalAmount(listData) {
  let total = 0;

  for (let index = 0; index < listData.length; index++) {
    const data = listData[index];
    const amount = data.amount;

    total = total + amount;
  }

  return total;
}

// Reset input
function resetForm() {
  inputDes.value = ''
  inputMoney.value = ''
}

// Style input
eleSelectType.addEventListener('change', function (e) {
  let borderInput = 'red-focus';
  let borderBtnAdd = 'red';
  eleSelectType.classList.toggle(borderInput);
  inputDes.classList.toggle(borderInput);
  inputMoney.classList.toggle(borderInput);
  btnAdd.classList.toggle(borderBtnAdd);
})

// Thêm thu chi
btnAdd.addEventListener('click', function () {
  let type = eleSelectType.value;
  let description = inputDes.value.trim();
  let amount = Number(inputMoney.value.replace(/\,/g, ''), 10);

  if (!description) {
    alert('Mô tả không được trống');
    return;
  }

  if (!amount || amount < 0) {
    alert('Số tiền phải lớn hơn 0')
    return;
  }

  amount = type === 'inc' ? amount : amount * -1
  const objMoney = {
    id: createUUID(),
    description: description,
    amount: amount
  }
  listData.unshift(objMoney);
  // localStorage.setItem('moneys', JSON.stringify(listData))
  resetForm();
  render(listData);
})

// Xóa thu chi
document.addEventListener('click', function (event) {
  let ele = event.target;
  if (ele.classList.contains('ion-ios-close-outline')) {
    let id = ele.dataset.id;
    listData = listData.filter(dataItem => dataItem.id !== id);
    // localStorage.setItem('moneys', JSON.stringify(listData))
    render(listData);
  }
})

function formatPercentAmount(amount, total) {
  if (!total) {
    return '0%';
  }

  let percent = Math.round((amount / total) * 100)

  if (percent < 0) {
    percent = percent * (-1);
  }

  return percent + '%';
}

// Format khi nhập số tiền
inputMoney.addEventListener('input', function (e) {
  let number = e.target.value;
  number = Number(number.replace(/\,/g, ''), 10);
  if (number > 0)
    inputMoney.value = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  else {
    number = number != 0 ? '' : 0;
    inputMoney.value = number;
  }
})