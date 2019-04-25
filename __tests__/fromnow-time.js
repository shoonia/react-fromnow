import assert from 'assert';
import React from 'react';
import renderer from 'react-test-renderer';

import Fromnow from '../index';

const NOW = 1556026229910;

Date.now = jest.fn(() => NOW);

const equal = assert.equal;
const render = Element => renderer.create(Element).toJSON();
const toISO = date => new Date(date).toISOString();

test('just now', () => {
  const { type, props, children } = render(<Fromnow date={NOW} />);

  equal(type, 'time');
  equal(props.dateTime, toISO(NOW));
  equal(children[0], 'just now');
});

test('1 hour ago', () => {
  const HOUR = (NOW - 1e3 * 60 * 60);
  const { type, props, children } = render(<Fromnow date={HOUR} />);

  equal(type, 'time');
  equal(props.dateTime, toISO(HOUR));
  equal(children[0], '1 hour ago');
});

test('1 hour from now', () => {
  const HOUR = (NOW + 1e3 * 60 * 60);
  const { type, props, children } = render(<Fromnow date={HOUR} />);

  equal(type, 'time');
  equal(props.dateTime, toISO(HOUR));
  equal(children[0], '1 hour from now');
});

test('2 hours ago', () => {
  const TIME = (NOW - 1e3 * 60 * 60 * 2);
  const { type, props, children } = render(<Fromnow date={TIME} />);

  equal(type, 'time');
  equal(props.dateTime, toISO(TIME));
  equal(children[0], '2 hours ago');
});

test('2 hours from now', () => {
  const TIME = (NOW + 1e3 * 60 * 60 * 2);
  const { type, props, children } = render(<Fromnow date={TIME} />);

  equal(type, 'time');
  equal(props.dateTime, toISO(TIME));
  equal(children[0], '2 hours from now');
});

test('invalid date', () => {
  const { type, props, children } = render(<Fromnow date={'TIME'} />);

  equal(type, 'time');
  equal(props.dateTime, undefined);
  equal(children, undefined);
});
