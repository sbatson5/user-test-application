import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('books', function() {
    this.route('show', { path: '/:id' });
  });
  this.route('users', function() {
    this.route('show', { path: '/:id' });
  });
});

export default Router;
