import assert from 'assert';

import cc from '../src/lib/cyrillicCases';

const equal = assert.equal;
const titles = [1, 2, 3];

test('cyrillic cases 1', () => {

  equal(cc(1, titles), 1);
  equal(cc(21, titles), 1);
  equal(cc(51, titles), 1);
});

test('cyrillic cases 2', () => {

  equal(cc(2, titles), 2);
  equal(cc(32, titles), 2);
  equal(cc(54, titles), 2);
});

test('cyrillic cases 3', () => {

  equal(cc(5, titles), 3);
  equal(cc(40, titles), 3);
  equal(cc(12, titles), 3);
});
