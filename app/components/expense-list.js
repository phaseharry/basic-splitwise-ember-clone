import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ExpenseListComponent extends Component {
  @tracked event = '';
  @tracked cost = null;
  @tracked splitter = null;

  @action
  handleChange(ev) {
    this[ev.target.name] = ev.target.value;
  }

  @action
  handleAdd(ev) {
    ev.preventDefault();
    const { event, cost, splitter } = this;
    // if (!event || !cost || !splitter) return;
    if (!event || !cost) return;
    this.args.addExpense(event, cost, 1); // using 1 for now
    this.event = '';
    this.cost = null;
    this.splitter = null;
  }
}
