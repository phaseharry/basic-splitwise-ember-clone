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

  test('it displays a list of expenses that passed down to it', async function(assert) {
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

    // used to stub external actions that's passed down to the expense-list component
    this.set('methodStub', () => {});

    const textHelper = str => {
      return str.replace(/\s+/g, ' ').trim()
    }

    await render(hbs`<ExpenseList @expenses={{this.testExpenses}} @users={{this.testUsers}} @addExpense={{action methodStub}}
      @deleteExpense={{methodStub}} @updateUser={{methodStub}}
    />`);
    const expenseNodes = this.element.querySelectorAll('[data-test-expense-item]'); 
    assert.strictEqual(expenseNodes.length, 4);
    assert.strictEqual(textHelper(expenseNodes[0].textContent), 'Bar 120.58 -');
    assert.strictEqual(textHelper(expenseNodes[1].textContent), 'Uber 45.90 -');
    assert.strictEqual(textHelper(expenseNodes[2].textContent), 'Cookies 15.52 -');
    assert.strictEqual(textHelper(expenseNodes[3].textContent), 'Dinner 70.63 -');
  })
});
