import { helper } from '@ember/component/helper';

const isPositive = ([val]) => {
  return val >= 0;
};

export default helper(isPositive);