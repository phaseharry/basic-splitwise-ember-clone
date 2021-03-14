import { helper } from '@ember/component/helper';

const displaySign = ([val]) => {
  if(+val === 0) return val;
  if (+val < 0) return val;
  return `+${val}`;
};

export default helper(displaySign);