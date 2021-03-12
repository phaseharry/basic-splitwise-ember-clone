import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { A as emberArray } from '@ember/array';

export default class BaseComponentComponent extends Component {
  @tracked users = emberArray([]);
  @tracked expenses = emberArray([]);
  @tracked userIds = 0;
  @tracked expenseIds = 0;

  @action
  addUser(name) {
    const newUser = {
      name,
      id: this.userIds + 1,
      amountSpent: 0,
    };
    this.userIds++;
    this.users.addObject(newUser);
  }

  @action
  addExpense(name, cost, userId) {
    const newExpense = {
      id: this.expenseIds + 1,
      name,
      cost,
      userId,
    };
    this.expenseIds++;
    this.expenses.addObject(newExpense);
    console.log(this.expenses);
  }
}
