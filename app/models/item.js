import DS from 'ember-data';
import Faker from 'faker';

export default DS.Model.extend({
  title: DS.attr('string'),
  date: DS.attr('date'),
  directory: DS.belongsTo('directory'),
  author: DS.belongsTo('author'),

  randomize(author, directory) {
    this.set('title', Faker.random.word());
    this.set('author', author);
    this.set('releaseYear', Faker.date.future());
    this.set('directory', directory);

    return this;
  }
});
