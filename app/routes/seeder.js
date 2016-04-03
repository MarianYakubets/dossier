import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      directories: this.store.findAll('directory'),
      items: this.store.findAll('item'),
      authors: this.store.findAll('author')
    });
  },

  setupController(controller, model) {
    controller.set('directories', model.directories);
    controller.set('items', model.items);
    controller.set('authors', model.authors);
  }
});
