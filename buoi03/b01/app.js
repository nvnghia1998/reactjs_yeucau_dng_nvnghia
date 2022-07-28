// Elements
const eleListIncomes = document.getElementById('list-incomes');
const eleListExpenses = document.getElementById('list-expenses');
const eleSelectType = document.querySelector('.add__type');
const inputDes = document.querySelector('.add__description');
const inputMoney = document.querySelector('.add__value');
const btnAdd = document.querySelector('.add__btn');

// Data
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

let listIncomes = listData.filter(dataItem => dataItem.amount > 0);
let listExpenses = listData.filter(dataItem => dataItem.amount < 0);
let totalAmountIncome = calTotalAmount(listIncomes);
let totalAmountExpense = calTotalAmount(listExpenses);
let totalAmount = calTotalAmount(listData);

renderBudgetList();

// render component
function renderBudgetList() {
  console.log(listIncomes);
  eleListIncomes.innerHTML = listIncomes.map(item => renderBudgetItem(item, totalAmount)).join('');
  eleListExpenses.innerHTML = listExpenses.map(item => renderBudgetItem(item, totalAmount)).join('');
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

function resetForm() {
  eleSelectType.value = 'inc';
  inputDes.value = ''
  inputMoney.value = ''
}

eleSelectType.addEventListener('change', function (e) {
  let borderInput = 'red-focus';
  let borderBtnAdd = 'red';
  // console.log(inputDes.classList);
  // if (e.target.value === 'inc') {
  //   borderInput = 'red-focus';
  //   borderBtnAdd = 'red';
  // }

  inputDes.classList.toggle(borderInput);
  inputMoney.classList.toggle(borderInput);
  btnAdd.classList.toggle(borderBtnAdd);
})
btnAdd.addEventListener('click', function () {
  let type = eleSelectType.value;
  let description = inputDes.value.trim();
  let amount = inputMoney.value;

  if (!description) {
    alert('Description khong duoc trong');
    return;
  }

  if (amount < 0) {
    alert('Sotie phai lon hon 0')
    return;
  }

  amount = type === 'inc' ? amount : amount * -1
  const objMoney = {
    id: createUUID(),
    description: description,
    amount: amount
  }
  listData.unshift(objMoney);
  console.log(listData);
  resetForm();
  listIncomes = listData.filter(dataItem => dataItem.amount > 0);
  listExpenses = listData.filter(dataItem => dataItem.amount < 0);
  renderBudgetList();
})

document.addEventListener('click', function (event) {
  let ele = event.target;


  if (ele.classList.contains('ion-ios-close-outline')) {
    let id = ele.dataset.id;
    listData = listData.filter(dataItem => dataItem.id !== id);
    listIncomes = listData.filter(dataItem => dataItem.amount > 0);
    listExpenses = listData.filter(dataItem => dataItem.amount < 0);
    totalAmountIncome = calTotalAmount(listIncomes);
    totalAmountExpense = calTotalAmount(listExpenses);
    totalAmount = calTotalAmount(listData);
    renderBudgetList();
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

