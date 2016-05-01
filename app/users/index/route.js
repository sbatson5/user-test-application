import Ember from 'ember';

const {
  Route,
  set
} = Ember;

export default Route.extend({
  model() {
    return this.store.findAll('user');
  },

  setupController(controller, model) {
    set(controller, 'users', model);
  }
});
