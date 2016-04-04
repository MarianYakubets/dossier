import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('board', params.board_id);
  },

  renderTemplate() {
    this.render('boards/board');
  },

  actions: {

    delete(board) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        board.destroyRecord().then(() => this.transitionTo('boards'));
      }
    },
    
    addGroup(board){
        let group = this.store.createRecord('group', {
        name: "title",
        type: 1,
        board:board
     });
     group.save();
     board.save();
    },
    
     deleteGroup(group){
        group.destroyRecord();
    }
  }
});
