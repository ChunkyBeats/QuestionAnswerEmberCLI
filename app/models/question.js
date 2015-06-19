import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr('string'),
  author: DS.attr('string'),
  description: DS.attr('string'),

  answer: DS.hasMany('answer', {async: true})
});
