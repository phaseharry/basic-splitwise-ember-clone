import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { A as emberArray } from '@ember/array';

module('Integration | Component | user-list', function(hooks) {
  setupRenderingTest(hooks);
  test('user-list renders', async function(assert) {
    await render(hbs`<UserList />`);
    assert.dom('[data-test-user-list-component]').exists('main element exists');
  });

  test('it displays a list of users that passed down to it', async function(assert){
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

    await render(hbs`<UserList @users={{this.testUsers}}/>`);
    const userNodes = this.element.querySelectorAll('[data-test-user-item]'); 
    assert.strictEqual(userNodes.length, 3);
    assert.strictEqual(userNodes[0].textContent.trim(), 'Jake');
    assert.strictEqual(userNodes[1].textContent.trim(), 'Kathy');
    assert.strictEqual(userNodes[2].textContent.trim(), 'Mike');
  });
});
