import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { A as emberArray } from '@ember/array';

export default class BaseComponentComponent extends Component {
  @tracked users = emberArray([]);
  @tracked currentIdentifier = 0;

  @action
  addUser(name) {
    const newUser = { name, id: this.currentIdentifier + 1 };
    this.currentIdentifier++;
    this.users.addObject(newUser);
  }
}
