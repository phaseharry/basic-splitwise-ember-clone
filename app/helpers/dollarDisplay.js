import { helper } from '@ember/component/helper';

const dollarDisplay = ([amount]) => {
  amount = Number(amount);
  return amount.toFixed(2);
};

export default helper(dollarDisplay);