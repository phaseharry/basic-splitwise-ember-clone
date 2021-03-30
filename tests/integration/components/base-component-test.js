import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import fillIn from '@ember/test-helpers/dom/fill-in';
import click from '@ember/test-helpers/dom/click';
import { A as emberArray } from '@ember/array';

/* 
  expense-list  
  - data-test-event-name-input
  - data-test-event-cost-input
  - data-test-spliter-select
  - data-test-add-event-btn
*/

module('Integration | Component | base-component', function(hooks) {
  setupRenderingTest(hooks);

  test('base-component renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    await render(hbs`<BaseComponent />`);
    assert.dom('[data-test-base-component]').exists('main element exists');
  });

  test('it can add a new user', async function(assert) {
    await render(hbs`<BaseComponent />`);
    const beforeAddUserList = this.element.querySelectorAll('[data-test-user-item]');
    assert.strictEqual(beforeAddUserList.length, 0);
    await fillIn('[data-test-user-input]', 'Chad');
    await click('[data-test-add-user-btn]');
    const afterAddUserList = this.element.querySelectorAll('[data-test-user-item]');
    assert.strictEqual(afterAddUserList.length, 1);
    assert.strictEqual(afterAddUserList[0].textContent.trim(), 'Chad');
  })

  test('it can add a new expense', async function(assert) {
    await render(hbs`<BaseComponent />`);
    // creating a user to assign an expense to
    await fillIn('[data-test-user-input]', 'Chad');
    await click('[data-test-add-user-btn]');
    // expense list should be empty
    const beforeAddExpList = this.element.querySelectorAll('[data-test-expense-item]');
    assert.strictEqual(beforeAddExpList.length, 0);
    // creating an expense
    await fillIn('[data-test-event-name-input]', 'Bar');
    await fillIn('[data-test-event-cost-input]', 167.13);
    // having trouble figuring out event triggers for selection/option elements
  })

  test('It displays the split amount as new expenses and users are added', async function(assert) {
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
    this.totalExpense = 252.63;
    this.userIdCount = 3;
    this.expenseIdCount = 4;

    await render(hbs`<BaseComponent @users={{this.testUsers}} @expenses={{this.testExpenses}}
      @totalExpense={{this.totalExpense}} @userIds={{this.userIdCount}} @expenseIds={{this.expenseIdCount}}
    />`);
    const beforeAddExpList = this.element.querySelectorAll('[data-test-expense-item]');
    assert.strictEqual(beforeAddExpList.length, 4);
  })
});
