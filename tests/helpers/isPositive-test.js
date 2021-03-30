import isPositive from 'assignment-3/helpers/isPositive';
import { module, test } from 'qunit';

module('Unit | Helper | is positive');
test('returns a boolean indicating whether the value is positive or not', function(assert) {
  assert.equal(isPositive.compute([42.534232323512]), true);
  assert.equal(isPositive.compute([-500.5234232323]), false);
  assert.equal(isPositive.compute([142.5234232323]), true);
  assert.equal(isPositive.compute([-2]), false);
  assert.equal(isPositive.compute([6.23]), true);
});