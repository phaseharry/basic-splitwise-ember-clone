import { helper } from '@ember/component/helper';

const calculateTally = ([totalAmount, user, splitCount]) => {
  return user.amountSpent - (totalAmount / splitCount); 
};

export default helper(calculateTally);