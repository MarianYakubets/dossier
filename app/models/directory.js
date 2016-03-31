import DS from 'ember-data';
import Ember from 'ember';
import Faker from 'faker';

export default DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('number'),
  items: DS.hasMany('items'),

  isValid: Ember.computed.notEmpty('name'),
  
   randomize() {
    this.set('name', Faker.random.words() + ' Directory');
    this.set('type', Faker.random.number());

    // If you would like to use in chain.
    return this;
  }
});
