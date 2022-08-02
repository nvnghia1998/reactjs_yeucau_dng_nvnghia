export function formatStringAmount(amount) {
  let sign = '+';
  let amountFormatted = amount;

  if (amount < 0) {
    sign = '-';
    amountFormatted = -1 * amount;
  }

  amountFormatted = new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(amountFormatted);

  return `${sign} ${amountFormatted}`;
}

export function formatPercentAmount(amount, total) {
 
  if (!total) {
    return '0%';
  }

  let percent = Math.round((amount / total) * 100)

  if (percent < 0) {
    percent = percent * (-1);
  }
  return percent + '%';
}

export function calTotalAmount(listData) {
  let total = 0;

  for (let index = 0; index < listData.length; index++) {
    const data = listData[index];
    const amount = data.amount;

    total = total + amount;
  }

  return total;
}