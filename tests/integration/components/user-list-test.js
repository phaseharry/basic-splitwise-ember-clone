import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | user-list', function(hooks) {
  setupRenderingTest(hooks);

  test('user-list renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    await render(hbs`<UserList />`);
    assert.dom('[data-test-user-list-component]').exists('main element exists');
  });

  test('it displays a list of users that passed down to it', async function(assert){});
});
