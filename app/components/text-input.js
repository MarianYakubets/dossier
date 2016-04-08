import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    
    saveAction:function(model){
        this.set('isEditing', false);
        //model.save();
        this.sendAction('saveAction');
    }
    
  },

  isEditing: false
});
