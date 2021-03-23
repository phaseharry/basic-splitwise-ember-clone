import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { A as emberArray } from '@ember/array';

module('Integration | Component | expense-list', function(hooks) {
  setupRenderingTest(hooks);
  test('expense-list renders', async function(assert) {
    await render(hbs`<ExpenseList />`);
    assert.dom('[data-test-expense-list-component]').exists('main element exists');
  });

  test.skip('it displays a list of expenses that passed down to it', async function(assert) {
    this.testExpenses = emberArray([
      {
        "id": 1,
        "name": "Bar",
        "cost": 120.58,
        "userId": "1"
      },
      {
        "id": 2,
        "name": "Uber",
        "cost": 45.9,
        "userId": "2"
      },
      {
        "id": 3,
        "name": "Cookies",
        "cost": 15.52,
        "userId": "3"
      },
      {
        "id": 4,
        "name": "Dinner",
        "cost": 70.63,
        "userId": "1"
      }
    ]);
    this.testUsers = emberArray([  
      {
        "name": "Jake",
        "id": "1",
        "amountSpent": 191.20999999999998
      },
      {
        "name": "Kathy",
        "id": "2",
        "amountSpent": 45.9
      },
      {
        "name": "Mike",
        "id": "3",
        "amountSpent": 15.52
      }
    ]);

    await render(hbs`<ExpenseList @expenses={{this.testExpenses}} @users={{this.testUsers}}/>`);
    const expenseNodes = this.element.querySelectorAll('[data-test-expense-item]'); 
    assert.strictEqual(expenseNodes.length, 4);
    // console.log(expenseNodes[0].textContent.replace(/^\s+|\s+$/g, ""));
    // assert.strictEqual(this.cleanExpenseText(expenseNodes[0].textContent), 'Bar 120.58');
  })
});
