import assert from 'assert';
import React from 'react';
import renderer from 'react-test-renderer';

import Fromnow from '../src';

const NOW = 1556026229910;

Date.now = jest.fn(() => NOW);

const equal = assert.equal;
const render = Element => renderer.create(Element).toJSON();

test('tag', () => {
  const { type } = render(<Fromnow date={NOW} tag="span" />);

  equal(type, 'span');
});

test('className', () => {
  const { props } = render(<Fromnow date={NOW} className="from__now" />);

  equal(props.className, 'from__now');
});
