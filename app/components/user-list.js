import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UserListComponent extends Component {
  @tracked currentUser = '';

  @action
  handleChange(ev) {
    this.currentUser = ev.target.value;
  }

  @action
  handleAdd(ev) {
    ev.preventDefault();
    if (!this.currentUser) return;
    this.args.addUser(this.currentUser);
    this.currentUser = '';
  }
}
