import { moduleForModel, test } from 'ember-qunit';

moduleForModel('item', 'Unit | Model | item', {
  // Specify the other units that are required for this test.
  needs: ['model:directory', 'model:author']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
