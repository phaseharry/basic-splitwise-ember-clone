import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import fillIn from '@ember/test-helpers/dom/fill-in';
import click from '@ember/test-helpers/dom/click';
import find from '@ember/test-helpers/dom/find';

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
  })

  // test('It displays the split amount correctly', async function(assert) {
  //   await render(hbs`<BaseComponent />`);
  // })
});
