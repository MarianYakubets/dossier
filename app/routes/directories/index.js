import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('directory');
  },

  actions: {

    delete(library) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        library.destroyRecord();
      }
    }
  }

});
