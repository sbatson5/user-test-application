import Ember from 'ember';

const {
  Route,
  set
} = Ember;

export default Route.extend({
  model(params) {
    return this.store.findRecord('book', params.id);
  },

  setupController(controller, model) {
    set(controller, 'book', model);
  }
});
