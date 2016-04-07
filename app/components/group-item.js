import Ember from 'ember';

export default Ember.Component.extend({
    actions: {

    addCard(group){
        var store = this.get('targetObject.store');
        let card = store.createRecord('card', {
            text: "",
            type: 1,
            group:group
        });
        card.save();
        group.save();
      },

      deleteCard(card){
        card.destroyRecord();
      }
    }
});
