import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ExpenseListComponent extends Component {
  @tracked event = '';
  @tracked cost = null;
  @tracked userId = null;

  @action
  handleChange(ev) {
    this[ev.target.name] = ev.target.value;
  }

  @action
  handleAdd(ev) {
    ev.preventDefault();
    const { event, cost, userId } = this;
    if (!event || !cost || !userId) return;
    this.args.addExpense(event, cost, userId);
    this.event = '';
    this.cost = null;
    this.splitter = null;
  }
}
