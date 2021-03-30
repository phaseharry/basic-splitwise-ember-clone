import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { A as emberArray } from '@ember/array';

module('Integration | Component | tallied-results', function(hooks) {
  setupRenderingTest(hooks);
  test('taillied-results renders', async function(assert) {
    await render(hbs`<TalliedResults />`);
    assert.dom('[data-test-tallied-results-component]').exists('main element exists');
  });

  test('displays the correct tallied amount for each user', async function(assert) {
    this.testUsers = emberArray([
      {
        id: 1,
        name: 'A',
        amountSpent: 100
      }, 
      {
        id: 2,
        name: 'B',
        amountSpent: 50
      }, 
      {
        id: 3,
        name: 'C',
        amountSpent: 0
      }
    ]);
    this.totalCost = 150;
    
    const textHelper = str => {
      return str.replace(/\s+/g, ' ').trim()
    }
  
    await render(hbs`<TalliedResults @users={{this.testUsers}} @totalExpense={{this.totalCost}}/>`);
    const talliedUsers = this.element.querySelectorAll('[data-test-taillied-user-item]');
    assert.strictEqual(talliedUsers.length, 3);
    assert.strictEqual(textHelper(talliedUsers[0].textContent), 'A: +50.00');
    assert.strictEqual(textHelper(talliedUsers[1].textContent), 'B: 0.00');
    assert.strictEqual(textHelper(talliedUsers[2].textContent), 'C: -50.00');
  })
});
