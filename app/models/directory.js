import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('number'),

  isValid: Ember.computed.notEmpty('name')
});
