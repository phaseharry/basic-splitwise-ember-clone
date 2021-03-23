import dollayDisplay from 'assignment-3/helpers/displaySign';
import { module, test } from 'qunit';

module('Unit | Helper | calculate tally');
test('displays the correct sign, either plus or minus', function(assert) {
  assert.equal(dollayDisplay.compute([500]), '+500');
  assert.equal(dollayDisplay.compute([-500]), '-500');
});