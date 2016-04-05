import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    
    save:function(model){
        this.set('isEditing', false);
        model.save();
    }
    
  },

  isEditing: false
});
