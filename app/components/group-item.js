import Ember from 'ember';

export default Ember.Component.extend({
  newCardCreation: false,
  newCardName:"",

  actions: {

    addCard(){
      this.set('newCardCreation', true);
    },

    createCardAction(group){
      let newCardName = this.get("newCardName");
      if(newCardName !== ""){
        var store = this.get('targetObject.store');
        let card = store.createRecord('card', {
          text: newCardName,
          type: 1,
          group: group
        });
        card.save();
        group.save();
      }
      this.set('newCardCreation', false);
      this.set('newCardName', '');
    },

    deleteCard(card){
      card.destroyRecord();
    },

    saveAction(item){
      item.save();
    }
  }
});
