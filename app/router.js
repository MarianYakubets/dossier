import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');

  this.route('directories', function() {
    this.route('new');
    this.route('edit', { path: '/:directory_id/edit' });
  });
  
  this.route('seeder');
  
  this.route('boards', function() {
    this.route('new');
    this.route('edit', { path: '/:board_id/edit' });
  });
});


export default Router;
