import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('number'),
  cards: DS.hasMany('card'),
  group: DS.belongsTo('board')
});
