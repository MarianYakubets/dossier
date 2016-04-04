import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit: function() {
      this.set('isEditing', true);
    }
  },

  isEditing: false
});
