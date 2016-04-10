import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
        saveAction:function(item){
        item.save();
        } 
    }
});
