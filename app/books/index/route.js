import Ember from 'ember';

const {
  Route,
  set
} = Ember;

export default Route.extend({
  model() {
    return this.store.findAll('book');
  },

  setupController(controller, model) {
    set(controller, 'books', model);
  }
});
