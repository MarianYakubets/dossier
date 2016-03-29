import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('directory');
  },

  actions: {

    save(newDir) {
      newDir.save().then(() => this.transitionTo('directories'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
