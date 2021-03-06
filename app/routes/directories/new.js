import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return this.store.createRecord('directory');
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new directory');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('directories/form');
  },

  actions: {

    save(newDirectory) {
      newDirectory.save().then(() => this.transitionTo('directories'));
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
