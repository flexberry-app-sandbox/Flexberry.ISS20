import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-i-s-s20-вид-поддержки', 'Unit | Serializer | i-i-s-i-s-s20-вид-поддержки', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-i-s-s20-вид-поддержки',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-i-s-s20-вид-поддержки',
    'model:i-i-s-i-s-s20-условие',
    'model:i-i-s-i-s-s20-форма',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
