import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('number'),
  board: DS.belongsTo('board'),
  cards: DS.hasMany('card'),
});
