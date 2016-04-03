
import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return this.store.createRecord('board');
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new board');
    controller.set('buttonLabel', 'Create');
  },
  

  renderTemplate() {
    this.render('boards/new');
  },

  actions: {

    save(newBoard) {
      newBoard.save().then(() => this.transitionTo('boards'));
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
