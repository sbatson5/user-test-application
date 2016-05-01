import Model from 'ember-data/model';
import DS from 'ember-data';

const { attr } = DS;

export default Model.extend({
  author: attr('string'),
  genre: attr('string'),
  title: attr('string'),
  price: attr('number'),
  description: attr('string')
});
