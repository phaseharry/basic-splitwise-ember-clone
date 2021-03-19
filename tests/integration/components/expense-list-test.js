import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | expense-list', function(hooks) {
  setupRenderingTest(hooks);

  test('expense-list renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ExpenseList />`);
    assert.dom('[data-test-expense-list-component]').exists('main element exists');
    // assert.equal(this.element.textContent.trim(), '');

    // // Template block usage:
    // await render(hbs`
    //   <ExpenseList>
    //     template block text
    //   </ExpenseList>
    // `);

    // assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
