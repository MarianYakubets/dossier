import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('directory');
  },

  actions: {

    delete(dir) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        dir.destroyRecord();
      }
    }
  }

});
