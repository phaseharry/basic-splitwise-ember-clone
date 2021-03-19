import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

/* 
  expense-list  
  - data-test-event-name-input
  - data-test-event-cost-input
  - data-test-spliter-select
  - data-test-add-event-btn
*/

module('Integration | Component | base-component', function(hooks) {
  setupRenderingTest(hooks);

  this.currentUserId = 3;
  this.currentExpenseId = 4;
  this.currentTotalExpense = 252.63;

  this.testUsers = [  
    {
      "name": "Harry",
      "id": "1",
      "amountSpent": 191.20999999999998
    },
    {
      "name": "Fionne",
      "id": "2",
      "amountSpent": 45.9
    },
    {
      "name": "David",
      "id": "3",
      "amountSpent": 15.52
    }
  ]

  this.testExpenses = [
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
  ]
  
  test('base-component renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    await render(hbs`<BaseComponent />`);
    assert.dom('[data-test-base-component]').exists('main element exists');
  });

  test('It displays the split amount correctly', async function(assert) {
    await render(hbs`<BaseComponent />`);
  })
});
