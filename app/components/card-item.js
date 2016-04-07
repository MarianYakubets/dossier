import Ember from 'ember';

export default Ember.Component.extend({
    hower:false,

    mouseEnter: function(evt) {
        this.set('hower', true);
    },

    mouseLeave: function(evt) {
       this.set('hower', false);
    },

    actions : {
        remove(card) {
            card.destroyRecord();
        }
    }
});
