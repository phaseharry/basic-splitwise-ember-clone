import dollayDisplay from 'assignment-3/helpers/dollarDisplay';
import { module, test } from 'qunit';

module('Unit | Helper | calculate tally');
test('returns the correct split amount', function(assert) {
  assert.equal(dollayDisplay.compute([42.534232323512]), '42.53');
  assert.equal(dollayDisplay.compute([-500.5234232323]), '-500.52');
  assert.equal(dollayDisplay.compute([142.5234232323]), '142.52');
  assert.equal(dollayDisplay.compute([2]), '2.00');
  assert.equal(dollayDisplay.compute([6.23]), '6.23');
});