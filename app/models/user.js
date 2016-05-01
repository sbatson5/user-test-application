import Model from 'ember-data/model';
import DS from 'ember-data';

const { attr } = DS;

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  dateOfBirth: attr('date'),
  email: attr('string')
});
