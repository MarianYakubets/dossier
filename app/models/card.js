import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  type: DS.attr('number'),
  group: DS.belongsTo('group')
});
