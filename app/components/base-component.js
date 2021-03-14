import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { A as emberArray } from '@ember/array';

export default class BaseComponentComponent extends Component {
  @tracked users = emberArray([]);
  @tracked expenses = emberArray([]);
  @tracked totalExpense = 0;
  @tracked userIds = 0;
  @tracked expenseIds = 0;

  @action
  addUser(name) {
    const newUser = {
      name,
      id: `${this.userIds + 1}`,
      amountSpent: 0,
    };
    this.userIds++;
    this.users.addObject(newUser);
  }

  @action
  updateUser(userId, cost) {
    const user = this.users.findBy('id', userId);
    const idx = this.users.indexOf(user);
    this.users.removeAt(idx);
    user.amountSpent += cost;
    this.users.insertAt(idx, user);
  }

  @action
  addExpense(name, cost, userId) {
    cost = Number(cost);
    const newExpense = {
      id: this.expenseIds + 1,
      name,
      cost,
      userId,
    };
    this.expenseIds++;
    this.expenses.addObject(newExpense);
    this.totalExpense += cost;
    this.updateUser(userId, cost);
  }

  @action
  deleteExpense(id){
    this.expenses = this.expenses.filter((exp) => exp.id !== id);
  }
}
