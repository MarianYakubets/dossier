import Ember from 'ember';
import Faker from 'faker';

export default Ember.Controller.extend({

  directories: [],
  items: [],
  authors: [],

  actions: {

    generateDirectories() {
      const counter = parseInt(this.get('directoriesCounter'));

      for (let i = 0; i < counter; i++) {
        this.store.createRecord('directory').randomize().save().then(() => {
          if (i === counter - 1) {
            this.set('directoriesCounter', 0);
            this.set('dirDone', true);
          }
        });
      }
    },

    deleteDirectories() {
      this._destroyAll(this.get('directories'));

      this.set('dirDelDone', true);
    },

    generateItemsAndAuthors() {
      const counter = parseInt(this.get('authorCounter'));

      for (let i = 0; i < counter; i++) {
        let newAuthor = this.store.createRecord('author');
        newAuthor.randomize()
          .save().then(() => {
             if (i === counter-1) {
               this.set('authorCounter', 0);
               this.set('authDone', true);
             }
          }
        );

        this._generateSomeItems(newAuthor);
      }
    },

    deleteItemsAndAuthors() {
      this._destroyAll(this.get('items'));
      this._destroyAll(this.get('authors'));

      this.set('authDelDone', true);
    }
  },

  // Private methods

  _generateSomeItems(author) {
    const  itemCounter = Faker.random.number(10);

    for (let j = 0; j < itemCounter; j++) {
      const directory = this._selectRandomDirectory();
      this.store.createRecord('item')
        .randomize(author, directory)
        .save();
      author.save();
      directory.save();
    }
  },

  _selectRandomDirectory() {
    const directories = this.get('directories');
    const directoriesCounter = directories.get('length');

    // Create a new array from IDs
    const directoryIds = directories.map((dir) => {return dir.get('id');});
    const randomNumber = Faker.random.number(directoriesCounter - 1);

    const randomDirectory = directories.findBy('id', directoryIds[randomNumber]);
    return randomDirectory;
  },

  _destroyAll(records) {
    records.forEach((item) => {
      item.destroyRecord();
    });
  }

});