import calculateTally from 'assignment-3/helpers/calculateTally';
import { module, test } from 'qunit';

module('Unit | Helper | calculate tally');
test('returns the correct split amount', function(assert) {
  const user = { name: 'Michelle', id: '2', amountSpent: 100 };
  assert.equal(calculateTally.compute([150, user, 3]), 50);
  assert.equal(calculateTally.compute([100, user, 1]), 0);
  assert.equal(calculateTally.compute([1000, user, 5]), -100);
});